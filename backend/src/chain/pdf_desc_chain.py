import base64
from io import BytesIO
from pathlib import Path

import pypdf
from langchain.prompts import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import Runnable
from langchain_google_genai import ChatGoogleGenerativeAI
from pdf2image import convert_from_path
from PIL import Image

SYSTEM_TEMPLATE = "以下の画像とテキストを元に、内容を日本語で説明してください。"
HUMAN_TEMPLATE = """
```text
{text}
```
"""
IMAGE_TEMPLATE: dict = {
    "type": "image_url",
    "image_url": {
        "url": "data:image/jpeg;base64,{image}",
    },
}


def encode_pil_image_with_base64(image: Image.Image, fmt: str = "PNG") -> str:
    """Encode a PIL Image object to a base64 string."""
    buf = BytesIO()
    image.save(fp=buf, format=fmt)
    return base64.b64encode(buf.getvalue()).decode("utf-8")


def get_text(file_path: str, page_num: int) -> str:
    """Get the text from a file."""
    with Path(file_path).open("rb") as file:
        reader = pypdf.PdfReader(file)
        page = reader.pages[page_num - 1]
        return page.extract_text()


def get_image(file_path: str, page_num: int) -> str:
    """Get the image from a file."""
    images = convert_from_path(
        pdf_path=file_path,
        first_page=page_num,
        last_page=page_num + 1,
    )
    return encode_pil_image_with_base64(images[0])


def get_pdf_desc_chain() -> Runnable:
    """Get a simple chain."""
    system_prompt = SystemMessagePromptTemplate.from_template(SYSTEM_TEMPLATE)
    human_prompt = HumanMessagePromptTemplate.from_template(
        [
            HUMAN_TEMPLATE,
            IMAGE_TEMPLATE,  # type: ignore
        ],
    )
    prompt = ChatPromptTemplate.from_messages([system_prompt, human_prompt])
    model = ChatGoogleGenerativeAI(
        model="gemini-2.0-flash",
    )
    # parser = StrOutputParser()
    # return prompt | model | parser
    return prompt | model


if __name__ == "__main__":
    # settings = get_settings()
    pdf_path = "./doc/sample.pdf"
    content = ""
    # Get the pdf describe chain
    chain = get_pdf_desc_chain()

    if Path(pdf_path).exists():
        reader = pypdf.PdfReader(pdf_path)
        max_pages = len(reader.pages)
        for page in range(1, max_pages + 1):
            # Get the text and image
            text = get_text(pdf_path, page)
            image = get_image(pdf_path, page)
            # print(f"Text: {text}")
            # print(f"Image: {image[:20]}")

            # Run the chain
            result = chain.invoke(
                input={
                    "text": text,
                    "image": image,
                },
            )
            # print(f"Result: {result}")

            # Merge content
            content += f"Page {page}/{max_pages}\n"
            content += f"{result.content}\n\n"
            print(content)

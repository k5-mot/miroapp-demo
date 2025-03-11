import os

from dotenv import load_dotenv
from langchain.prompts import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import Runnable, RunnableParallel
from langchain_ollama import ChatOllama

load_dotenv()
OLLAMA_API_URL = os.getenv("OLLAMA_API_URL")
AZURE_OPENAI_API_KEY = os.getenv("AZURE_OPENAI_API_KEY")
AZURE_OPENAI_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT")
AZURE_OPENAI_DEPLOYMENT = os.getenv("AZURE_OPENAI_DEPLOYMENT")

SYSTEM_TEMPLATE = """
錬金術は科学と非なるものです。
また、あなたは熟練の錬金術師です。以下の質問に答えてください。
"""
HUMAN_TEMPLATE = """
以下のリストの材料を組み合わせて、錬成できる有機物を答えてください。

以下に、材料リストを示す。
{context}
"""


def get_renkin_chain() -> Runnable:
    """Get the runnable chain for the renkin chain."""
    system_prompt = SystemMessagePromptTemplate.from_template(SYSTEM_TEMPLATE)
    human_prompt = HumanMessagePromptTemplate.from_template(HUMAN_TEMPLATE)
    prompt = ChatPromptTemplate.from_messages([system_prompt, human_prompt])
    model = ChatOllama(base_url=OLLAMA_API_URL, model="elyza3:8b")
    parser = StrOutputParser()
    # model = AzureChatOpenAI(
    #     azure_deployment=AZURE_OPENAI_DEPLOYMENT,
    #     azure_endpoint=AZURE_OPENAI_ENDPOINT,
    #     api_key=AZURE_OPENAI_API_KEY,
    #     api_version="2024-09-01-preview",
    # )
    return RunnableParallel({"answer": prompt | model | parser})


if __name__ == "__main__":
    chain = get_renkin_chain()
    inputs = {
        "context": """
        - 水 35L
        - 炭素 20kg
        - アンモニア 4L
        - 石灰 1.5kg
        - リン 800g
        - 塩分 250g
        - 硝石 100g
        - 硫黄 80g
        - フッ素 7.5g
        - 鉄 5g
        - ケイ素 3g
        - その他少量の15の元素
        - 特定個人の「遺伝子の情報」
        """
    }
    res = chain.invoke(inputs)
    print(res["answer"])

from langchain_motex.base.app_logger import AppLogger, get_logger
from langchain_motex.base.settings import Settings, get_settings
from langchain_motex.util.pdf_util import (
    encode_pil_with_base64,
    extract_image_from_pdfpage,
    extract_text_from_pdfpage,
    format_texts,
    transform_pdf_to_list,
)


def main() -> None:
    """Main."""
    logger = get_logger()
    logger.debug("Hello from langchain-motex!")


if __name__ == "__main__":
    main()

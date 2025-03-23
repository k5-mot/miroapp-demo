from langchain_motex.base.app_logger import AppLogger, get_logger
from langchain_motex.base.settings import Settings, get_settings
from langchain_motex.chain.pdf_multi import CHAIN as PDF_MULTI_PAGE_CHAIN
from langchain_motex.chain.pdf_single import CHAIN as PDF_SINGLE_PAGE_CHAIN


def main() -> None:
    """Main."""
    logger = get_logger()
    logger.debug("Hello from langchain-motex!")


if __name__ == "__main__":
    main()

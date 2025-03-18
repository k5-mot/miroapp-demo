import logging
import logging.handlers
import sys

from settings import get_settings

LOG_FORMAT = """
[%(levelname)s] %(message)s
├─ %(asctime)s.%(msecs)03d
└─ %(pathname)s:%(lineno)d (%(funcName)s)
"""
LOG_DATE_FORMAT = "%Y/%m/%d %H:%M:%S"


class AppLogger(logging.Logger):
    LOG_FILEPATH: str = "./log/app.log"
    LOG_LEVEL: str = "INFO"

    def __init__(self) -> None:
        """Initialize the logger."""
        super().__init__(__name__)

        # Get the settings
        settings = get_settings()
        self.LOG_LEVEL = settings.LOG_LEVEL
        self.LOG_FILEPATH = settings.LOG_FILEPATH

        # Set up the handlers
        self.handlers = []
        self.addHandler(self.get_file_handler())
        self.addHandler(self.get_stderr_handler())

    def get_formatter(self) -> logging.Formatter:
        """Get the formatter for the logger."""
        return logging.Formatter(
            fmt=LOG_FORMAT,
            datefmt=LOG_DATE_FORMAT,
        )

    def get_file_handler(self) -> logging.Handler:
        """Get the file handler for the logger."""
        handler = logging.handlers.RotatingFileHandler(
            filename=self.LOG_FILEPATH,
            mode="a",
            maxBytes=10485760,  # 10MB
            backupCount=5,  # 5 backup files
            encoding="utf-8",
        )
        handler.setLevel(self.LOG_LEVEL)
        handler.setFormatter(self.get_formatter())
        return handler

    def get_stderr_handler(self) -> logging.Handler:
        """Get the stderr handler for the logger."""
        handler = logging.StreamHandler(sys.stderr)
        handler.setLevel(self.LOG_LEVEL)
        handler.setFormatter(self.get_formatter())
        return handler


def get_logger() -> logging.Logger:
    """Get the logger for the application."""
    return AppLogger()


if __name__ == "__main__":
    # Get the logger
    logger = get_logger()

    # Log some messages
    logger.debug("これはデバッグメッセージです")
    logger.info("これは情報メッセージです")
    logger.warning("これは警告メッセージです")
    logger.error("これはエラーメッセージです")
    logger.critical("これは重大なエラーメッセージです")

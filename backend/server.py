from langserve import add_routes
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import chains

app = FastAPI(
    title="LangChain Server",
    version="1.0",
    description="LangchainのRunnableインターフェースを使ったシンプルなAPIサーバー",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

add_routes(
    app,
    chains.renkinChain(),
    path="/ollama",
)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)

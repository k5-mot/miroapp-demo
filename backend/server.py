from langserve import add_routes
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langchain_ollama import ChatOllama
from langchain.prompts import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)

# from langchain_anthropic import ChatAnthropic
# from langchain_openai import AzureChatOpenAI

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

# OLLAMA_API_URL = "http://homelab-ollama:11434"
# OLLAMA_API_URL = "http://localhost:11434"
OLLAMA_API_URL = "http://host.docker.internal:11434"
SYSTEM_TEMPLATE = "関連ドキュメントを元に、次の質問に答えてください。"
HUMAN_TEMPLATE = """
関連ドキュメントを元に、要約とその説明を生成してください。

以下に、関連ドキュメントを示す。
{context}
"""
# system_prompt = SystemMessagePromptTemplate.from_template(SYSTEM_TEMPLATE)
human_prompt = HumanMessagePromptTemplate.from_template(HUMAN_TEMPLATE)
# prompt = ChatPromptTemplate.from_messages([system_prompt, human_prompt])
prompt = ChatPromptTemplate.from_messages([human_prompt])
model = ChatOllama(base_url=OLLAMA_API_URL, model="llama3.2:3b")
chain = prompt | model
add_routes(
    app,
    chain,
    path="/ollama",
)
# add_routes(
#     app,
#     AzureChatOpenAI(),
#     path="/openai",
# )
# add_routes(
#     app,
#     ChatAnthropic(),
#     path="/anthropic",
# )

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)

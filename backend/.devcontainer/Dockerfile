FROM mcr.microsoft.com/devcontainers/base:bullseye

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update
RUN apt-get install -y curl git ca-certificates openssh-client socat keychain

USER vscode

RUN curl -LsSf https://astral.sh/uv/install.sh | sh
ENV PATH=/home/${USERNAME}/.local/bin:${PATH}
RUN uv python install 3.12

RUN curl https://get.volta.sh | bash
ENV PATH=/home/${USERNAME}/.volta/bin:${PATH}

RUN volta install node@22
RUN npm install -g npm
RUN npm install -g git-cz


ENTRYPOINT ["sleep", "infinity"]

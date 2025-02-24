FROM mcr.microsoft.com/devcontainers/base:bullseye

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID
USER vscode

RUN curl https://get.volta.sh | bash
ENV PATH=/home/${USERNAME}/.volta/bin:${PATH}
ENV PATH=/home/${USERNAME}/.local/bin:${PATH}
# COPY ~/.ssh /home/${USERNAME}/.ssh

RUN volta install node@22
RUN npm install -g npm

ENTRYPOINT ["sleep", "infinity"]

FROM mcr.microsoft.com/devcontainers/base:bullseye
ARG USERNAME=vscode
USER vscode
WORKDIR /workspaces/miroapp-demo/frontend
RUN curl https://get.volta.sh | bash
ENV PATH=/home/${USERNAME}/.volta/bin:${PATH}
ENV PATH=/home/${USERNAME}/.local/bin:${PATH}
RUN volta install node@22
RUN pwd >> /home/vscode/a.log
RUN npm list >> /home/vscode/a.log
ENTRYPOINT ["sleep", "infinity"]

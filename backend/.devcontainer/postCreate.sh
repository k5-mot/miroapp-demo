#!/usr/bin/env bash

printf "\e[36mpostCreateCommand\e[0m\n"

export USERNAME=$(whoami)

## Install uv (Python Package Manager)
curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH=/home/${USERNAME}/.local/bin:${PATH}
uv python install 3.12
uv sync --dev

## Install volta (Node.js Package Manager)
curl https://get.volta.sh | bash
export PATH=/home/${USERNAME}/.volta/bin:${PATH}
ls /home/${USERNAME}/.volta/bin
volta install node@22
export PATH=/home/${USERNAME}/.volta/bin:${PATH}

npm install -g npm
npm install -g git-cz

echo "/usr/bin/keychain -q --nogui $HOME/.ssh/id_rsa" >> $HOME/.bashrc
echo "source $HOME/.keychain/$(hostname)-sh" >> $HOME/.bashrc

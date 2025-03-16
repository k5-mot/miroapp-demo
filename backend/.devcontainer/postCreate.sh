#!/usr/bin/env bash

printf "\e[36mpostCreateCommand\e[0m\n"

export USERNAME=$(whoami)

function reset_env() {
    git clean -xdn -e "*.env"
    git clean -xdf -e "*.env"
}

function install_apt() {
    # Install apt packages
    sudo apt-get update
    sudo apt-get upgrade -y
    sudo apt-get autoremove -y
    sudo apt-get install -y \
        poppler-utils
}

function install_uv() {
    # Install uv (Python Package Manager)
    curl -LsSf https://astral.sh/uv/install.sh | sh
    export PATH=/home/${USERNAME}/.local/bin:${PATH}
    uv python install 3.12
    uv sync --dev
}

function install_volta() {
    # Install volta (Node.js Package Manager)
    curl https://get.volta.sh | bash
    export PATH=/home/${USERNAME}/.volta/bin:${PATH}
    ls /home/${USERNAME}/.volta/bin
    volta install node@22
    export PATH=/home/${USERNAME}/.volta/bin:${PATH}

    npm install -g npm
    npm install -g git-cz
}

function install_rust() {
    # Install rust
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    export PATH=/home/${USERNAME}/.cargo/bin:${PATH}
    rustup update
    cargo update
}

reset_env
install_apt     > /tmp/install_apt.log      &
install_volta   > /tmp/install_volta.log    &
install_rust    > /tmp/install_rust.log     &
install_uv      > /tmp/install_uv.log       &

wait

#!/usr/bin/env bash

printf "\e[36mpostCreateCommand\e[0m\n"

rm -rfv .next/ node_modules/ out/ package-lock.json
npm install

# Computer Setup

## Objective

Outline the steps to get a new computer set up and ready to start coding.

## Overview

- Update OS X
- Open this repo in Safari
- `oh-my-zsh` [ref](https://ohmyz.sh/#install)
- Create relevant folders via `mkdir ~/books ~/companies ~/projects ~/sandbox ~/scripts`
- `cd ~/scripts` and clone this repo
- Change to this directory via `cd computer-setup`
- Homebrew [ref](https://brew.sh/)
- Homebrew Formulae via `brew install $(cat homebrew-formulae.txt)`
- Homebrew Casks via `brew install --cask $(cat homebrew-casks.txt)`
- Git config
  - `git config --global user.name "Gerry Pass"`
  - `git config --global user.email "rgpass@gmail.com"`
  - `git config --global core.editor "subl -n -w"`
  - Copy over `~/.gitmessage` via `cp .gitmessage ~/.gitmessage`
  - `git config --global commit.template ~/.gitmessage`
- Scripts
  - `z` [ref](https://github.com/rupa/z)
  - Copy over `notifiers` code via `cp -r notifiers ~/scripts/`
  - Run `softwareupdate --install-rosetta` to fix notifier script
  - `plz` [ref](https://github.com/rgpass/plz)
- Copy over `~/.zshrc` via copying line-by-line
- VS Code settings sync
- Install whatever languages are needed via `asdf` [ref](https://asdf-vm.com/)
- Unzip `ASUS_MB_Series_APP_for_macOS_11_and_12.zip` for second monitor support
- Sync Messages with iCloud

# Computer Setup

## Objective

Outline the steps to get a new computer set up and ready to start coding.

## Overview

- Update OS X
- `oh-my-zsh` [ref](https://ohmyz.sh/#install)
- Clone this repo
- Change to this directory via `cd computer-setup`
- Homebrew [ref](https://brew.sh/)
- Homebrew Formulae via `brew install $(cat homebrew-formulae.txt)`
- Homebrew Casks via `brew install --cask $(cat homebrew-casks.txt)`
- Create relevant folders via `mkdir ~/books ~/companies ~/notifiers ~/projects ~/sandbox ~/scripts`
- Git config
  - `git config --global user.name "Gerry Pass"`
  - `git config --global user.email "rgpass@gmail.com"`
  - `git config --global core.editor=subl -n -w`
  - Copy over `~/.gitmessage` via `cp .gitmessage ~/.gitmessage`
  - `git config --global commit.template ~/.gitmessage`
- Scripts
  - `z` [ref](https://github.com/rupa/z)
  - Copy over `notifiers` code
  - `plz` [ref](https://github.com/rgpass/plz)
- Copy over `~/.zshrc` via copying line-by-line
- VS Code
  - Settings Sync
- Install whatever languages are needed via `asdf` [ref](https://asdf-vm.com/)
- Unzip `ASUS_MB_Series_APP_for_macOS_11_and_12.zip` for second monitor support
- Sync Messages with iCloud

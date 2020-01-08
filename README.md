# erlang-formatter README

Automatically format your Erlang code in Visual Studio Code.

## Requirements

- Visual Studio Code
- Erlang/OTP
- [steamroller](https://github.com/old-reliable/steamroller)
- [rebar3](https://www.rebar3.org/)

## Setup

Install rebar3 if you haven't already, then set up the formatter steamroller for it by following [their install instructions](https://github.com/old-reliable/steamroller). Then set up rebar to have global access to steamroller by adding `{plugins, [steamroller]}` to your `~/.config/rebar3/rebar.config` file. Shortcut:

    touch ~/.config/rebar3/rebar.config
    echo "\n{plugins, [steamroller]}" >> ~/.config/rebar3/rebar.config

You should then be able to run `rebar3 steamroller` from any directory, and it will integrate with VSC Erlang Formatter.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

- `myExtension.enable`: enable/disable this extension
- `myExtension.thing`: set to `blah` to do something

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Working with Markdown

**Note:** You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
- Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
- Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**

## TODO

Add default configuration

    "[erlang]": {
        "editor.defaultFormatter": "szTheory.erlang-formatter",
        "editor.formatOnSave": true
    },

## Thanks

Thanks to the authors of these projects who were highly valuable resources:

- https://github.com/old-reliable/steamroller
- https://github.com/sarat-ravi/elixir-formatter
- https://github.com/JakeBecker/vscode-elixir-ls
- https://github.com/yuce/erlang-vscode

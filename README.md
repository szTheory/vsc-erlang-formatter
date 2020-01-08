# <img src="images/erlang.png" width="18"> Erlang Formatter for Visual Studio Code

    Automatically format your Erlang code.

## Features

### Auto format on Save

![Auto format on save](https://user-images.githubusercontent.com/28652/72016514-d37fc400-325b-11ea-8a88-29608d198860.gif)

### Notify of formatter error

![Notify of formatter error](https://user-images.githubusercontent.com/28652/72013240-6a954d80-3255-11ea-8f49-524ebafdc489.png)

### Compatible with your favorite Erlang extensions

Works great with other extensions to provide all the things this one doesn't, such as syntax highlighting, intellisense, and snippets. Currently tested with:

- ["Erlang" (pgourlain.erlang)](https://marketplace.visualstudio.com/items?itemName=pgourlain.erlang)
- ["Erlang/OTP" (yuce.erlang-otp)](https://marketplace.visualstudio.com/items?itemName=yuce.erlang-otp)

## Setup

### Requirements

- [Visual Studio Code](https://code.visualstudio.com/) - Code editor
- [Erlang/OTP](https://www.erlang-solutions.com/resources/download.html) - Erlang distribution
- [rebar3](https://www.rebar3.org/) - Erlang package manager
- [steamroller](https://github.com/old-reliable/steamroller) - Erlang formatter

### Install extension

Install the Erlang Formatter from the Visual Studio Marketplace [from this link](https://marketplace.visualstudio.com/items?itemName=szTheory.erlang-formatter) or by searching from the Extensions tab within the app itself. If you have trouble finding it search for `erlang-formatter`.

### Install Erlang

Distributions are available from the [official Erlang website](https://www.erlang.org/downloads) or [Erlang Solutions](https://www.erlang-solutions.com/resources/download.html).

### Install Rebar3

Follow the [official Rebar install instructions](https://www.rebar3.org/docs/getting-started) or use our shortcut below which downloads rebar3 to a temporary directory and installs it for your OS user.

    $ cd ~/projects
    $ git clone https://github.com/erlang/rebar3.git
    $ cd rebar3
    $ ./bootstrap
    $ ./rebar3 local install

### Install Steamroller

Follow the [official Steamroller install instructions](https://github.com/old-reliable/steamroller) or use our shortcut below which sets up rebar to have global access to steamroller by adding `{plugins, [steamroller]}` to your `~/.config/rebar3/rebar.config` file.

    touch ~/.config/rebar3/rebar.config
    echo "\n{plugins, [steamroller]}." >> ~/.config/rebar3/rebar.config

You should then be able to run `rebar3 steamroller` from any directory, and it will integrate with VSC Erlang Formatter.

### Configure VS Code for Erlang Formatter

Add the extension config to your preferences file.

- Open preferences (Mac: `cmd + ,`)
- Open settings.json (Click the icon at the top right with the document's corner being folded over to open the file)
- Paste this in:

```json
  "[erlang]": {
  "editor.defaultFormatter": "szTheory.erlang-formatter",
  "editor.formatOnSave": true
  },
```

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

- `myExtension.enable`: enable/disable this extension
- `myExtension.thing`: set to `blah` to do something

## Links

- [Erlang Formatter on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=szTheory.erlang-formatter)

## Thanks

Thanks to the authors of these projects which were highly valuable resources:

- https://github.com/old-reliable/steamroller
- https://github.com/sarat-ravi/elixir-formatter
- https://github.com/JakeBecker/vscode-elixir-ls
- https://github.com/nwolverson/vscode-erlang-formatter
- https://github.com/yuce/erlang-vscode

## TODO

- Add extension marketplace icon
- Add default configuration
- Performance: Investigate piping the output from steamroller STDOUT directly to VS Code and replacing its internal buffer rather than steamroller overwriting the file which takes almost 1.5-2 seconds to refresh in the VS Code UI after hitting save.

```json
  "[erlang]": {
    "editor.defaultFormatter": "szTheory.erlang-formatter",
    "editor.formatOnSave": true
  },
```

- Clean up marketplace listing

# <img src="images/erlang.png" width="18"> Erlang Formatter for Visual Studio Code

> Automatically format your Erlang code.

- [Features](#features)
- [Setup](#setup)

## Features

### Auto format on Save

![Auto format on save](https://user-images.githubusercontent.com/28652/72016514-d37fc400-325b-11ea-8a88-29608d198860.gif)

## Setup

### 1. Install the VSC extension

Install the Erlang Formatter from the Visual Studio Marketplace [from this link](https://marketplace.visualstudio.com/items?itemName=szTheory.erlang-formatter) or by searching from the Extensions tab within the app itself. If you have trouble finding it search for `erlang-formatter`.

### 2. Install Rebar

Follow the [official Rebar install instructions](https://www.rebar3.org/docs/getting-started) or use the commands below which will download rebar3 to a temporary directory and install it for your OS user.

```bash
cd ~/projects
git clone https://github.com/erlang/rebar3.git
cd rebar3
./bootstrap
./rebar3 local install
```

Then add rebar3 to your PATH by putting it to your shell configuration file (for example `~/.zshrc` or `~/.bash_profile`).

```bash
export PATH=$PATH:~/.cache/rebar3/bin
```

### 3a. Default formatter setup

If you just want to get up and running quickly, run the following command for a good default. Otherwise read the section below for more detail.

```bash
echo -e "{plugins, [rebar3_format]}." >> ~/.config/rebar3/rebar.config
```

**NOTE**: The first time you format your code it might take a few seconds if rebar3 hasn't already downloaded the formatter plugin.

### 3b. Choosing a specific formatter

There are three main options for Erlang formatters right now. They are all written in Erlang and depend on rebar3. There's no community consensus on which to use, so you'll just have to pick one. Simply add the plugin to your project's `rebar.config` file, or set it up globally by adding it to `~/.config/rebar3/rebar.config` instead. Then you'll be able to format Erlang files anywhere without project configuration.

- [rebar3_format](https://github.com/AdRoll/rebar3_format) - Highly configurable formatter

```erlang
{plugins, [rebar3_format]}.
```

- [Steamroller](https://github.com/old-reliable/steamroller) - Opinionated formatter with minimal configuration

```erlang
{plugins, [steamroller]}.
```

- [erlfmt](https://github.com/whatsapp/erlfmt) - Opinionated formatter with minimal configuration

```erlang
{plugins, [erlfmt]}.
```

### 4. Extension configuration

Add the extension config to your preferences file.

- Open preferences (`Cmd/Ctrl + ,`)
- Open `settings.json` (Click the icon at the top right with the document's corner being folded over to open the file)
- Paste this in:

```json
"[erlang]": {
  "editor.defaultFormatter": "szTheory.erlang-formatter",
  "editor.formatOnSave": true
},
"erlangFormatter.formatter": "rebar3_format",
```

**NOTE**: If you want to use another formatter just replace `rebar3_format` with either `steamroller` or `erlfmt`.
**NOTE**: You don't need to enable `formatOnSave`. If it's disabled then you can just manually select `Format Document` from the Command Palette (`Cmd/Ctrl + Shift + P`) in VS Code to run the formatter.

## Links

- [Erlang Formatter on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=szTheory.erlang-formatter)

## Thanks

Thanks to the authors of these projects, which were highly valuable resources.

### Formatters

- [rebar3_fmt](https://github.com/AdRoll/rebar3_format)
- [Steamroller](https://github.com/old-reliable/steamroller)
- [erlfmt](https://github.com/whatsapp/erlfmt)

### Visual Studio Code Extensions

- [Elixir Formatter](https://github.com/sarat-ravi/elixir-formatter)
- [Elixir LS](https://github.com/elixir-lsp/vscode-elixir-ls)
- [vscode-erlang-formatter](https://github.com/nwolverson/vscode-erlang-formatter)
- [Erlang/OTP](https://github.com/yuce/erlang-vscode)

## Releasing

1. Bump the version number
2. Update `CHANGELOG.md`
3. `npm run test`
4. `vsce package`
5. `vsce publish`

For more info see ["Publishing Extensions"](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

# VSC Erlang Formatter

    Automatically format your Erlang code in Visual Studio Code.

![Auto format on save](images/auto-format-on-save.gif)

## Requirements

- [Visual Studio Code](https://code.visualstudio.com/)
- [Erlang/OTP](https://www.erlang-solutions.com/resources/download.html)
- [steamroller](https://github.com/old-reliable/steamroller)
- [rebar3](https://www.rebar3.org/)

## Setup

Install rebar3 if you haven't already, then set up the formatter steamroller for it by following [their install instructions](https://github.com/old-reliable/steamroller). Then set up rebar to have global access to steamroller by adding `{plugins, [steamroller]}` to your `~/.config/rebar3/rebar.config` file. Shortcut:

    touch ~/.config/rebar3/rebar.config
    echo "\n{plugins, [steamroller]}" >> ~/.config/rebar3/rebar.config

You should then be able to run `rebar3 steamroller` from any directory, and it will integrate with VSC Erlang Formatter.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

- `myExtension.enable`: enable/disable this extension
- `myExtension.thing`: set to `blah` to do something

## Release Notes

### 0.0.1

Initial release with working formatter on auto save.

---

## Links

- [Erlang Formatter on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=szTheory.erlang-formatter)

## TODO

- Add extension marketplace icon
- Add .gif animation to README of auto format on save
- Add default configuration

```json
  "[erlang]": {
    "editor.defaultFormatter": "szTheory.erlang-formatter",
    "editor.formatOnSave": true
  },
```

- Clean up marketplace listing

## Thanks

Thanks to the authors of these projects which were highly valuable resources:

- https://github.com/old-reliable/steamroller
- https://github.com/sarat-ravi/elixir-formatter
- https://github.com/JakeBecker/vscode-elixir-ls
- https://github.com/nwolverson/vscode-erlang-formatter
- https://github.com/yuce/erlang-vscode

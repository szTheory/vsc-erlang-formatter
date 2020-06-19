// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import child_process = require("child_process");
import { workspace, TextDocument, TextEdit, window } from "vscode";
import path = require("path");

type FormatterName = "rebar3_format" | "steamroller" | "erlfmt";
type FormatterCommand = "format" | "steamroll" | "fmt";

function format(
  filePath: string,
  outputChannel: vscode.OutputChannel
): Promise<TextEdit[]> {
  return new Promise((resolve) => {
    const workspaceRootPath = workspace.rootPath ? workspace.rootPath : "";
    const currentWorkingDirectory = path.resolve(workspaceRootPath);
    const args = formatterArgs(outputChannel).concat(filePath);

    outputChannel.appendLine(
      `Formatting with command: rebar3 ${args.join(" ")}`
    );
    const formatter = child_process.spawn("rebar3", args, {
      cwd: currentWorkingDirectory,
    });

    formatter.on("error", (err) => {
      outputChannel.appendLine(err.message);
    });

    formatter.on("message", (msg) => {
      outputChannel.appendLine(msg);
    });

    formatter.stderr.on("data", (data) => {
      outputChannel.appendLine(data);
    });

    formatter.stdout.on("data", (data) => {
      const missingFormatter = missingFormatterName(data.toString());
      if (missingFormatter) {
        const msg = missingFormatterMsg(missingFormatter);
        window.showErrorMessage(msg);
      }

      outputChannel.appendLine(data);
    });

    resolve([]);
  });
}

export function activate(context: vscode.ExtensionContext) {
  let outputChannel = vscode.window.createOutputChannel("Erlang Formatter");

  vscode.languages.registerDocumentFormattingEditProvider("erlang", {
    provideDocumentFormattingEdits(
      document: TextDocument
    ): Thenable<TextEdit[]> {
      return format(document.fileName, outputChannel);
    },
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}

function formatterArgs(outputChannel: vscode.OutputChannel): string[] {
  const config = workspace.getConfiguration("erlangFormatter");
  const formatter = config.get("formatter");

  switch (formatter) {
    case "rebar3_format":
      return [formatterCommand(formatter), "--files"];
    case "steamroller":
      return [formatterCommand(formatter), "-f"];
    case "erlfmt":
      return [formatterCommand(formatter), "-w"];
    default:
      throw new Error(
        `Error while reading Erlang formatter configuration: ${formatter}`
      );
  }
}

function missingFormatterName(stdout: string): FormatterName | null {
  const commandNotFoundMatches = stdout
    .toString()
    .match(/Command (.+) not found/);
  const formatterCommand = commandNotFoundMatches
    ? commandNotFoundMatches[1]
    : null;

  return formatterCommand
    ? formatterName(formatterCommand as FormatterCommand)
    : null;
}

function missingFormatterMsg(formatterName: FormatterName): string {
  return `Formatter "${formatterName}" not found. Add {plugins, [${formatterName}]}. to your rebar.config and try again. There will be a pause on the first run while it installs.`;
}

function formatterName(formatterCommand: FormatterCommand): FormatterName {
  switch (formatterCommand) {
    case "format":
      return "rebar3_format";
    case "steamroll":
      return "steamroller";
    case "fmt":
      return "erlfmt";
    default:
      throw new Error(
        `Could not find the formatter name for ${formatterCommand}`
      );
  }
}

function formatterCommand(formatterName: FormatterName): FormatterCommand {
  switch (formatterName) {
    case "rebar3_format":
      return "format";
    case "steamroller":
      return "steamroll";
    case "erlfmt":
      return "fmt";
    default:
      throw new Error(
        `Could not find the formatter command for ${formatterName}`
      );
  }
}

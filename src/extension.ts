// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import child_process = require("child_process");
import { workspace, TextDocument, TextEdit, window } from "vscode";
var path = require("path");

export function activate(context: vscode.ExtensionContext) {
  vscode.languages.registerDocumentFormattingEditProvider("erlang", {
    provideDocumentFormattingEdits(
      document: TextDocument
    ): Thenable<TextEdit[]> {
      return document.save().then(() => {
        return format(document);
      });
    }
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}

function format(document: TextDocument): Promise<TextEdit[]> {
  return new Promise((resolve, reject) => {
    // Create mix command
    const cmd = `rebar3 steamroll -f ${document.fileName}`;

    // Figure out the working directory to run mix format in
    const workspaceRootPath = workspace.rootPath ? workspace.rootPath : "";
    const relativePath = "";
    const cwd = path.resolve(workspaceRootPath, relativePath);

    // Run the command
    child_process.exec(cmd, { cwd }, function(error, stdout, stderr) {
      if (error !== null) {
        const message = `Cannot format due to syntax errors.: ${stderr}`;
        window.showErrorMessage(message);
        return reject(message);
      }

      return [];
    });
  });
}

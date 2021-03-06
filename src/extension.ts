// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('ha Congratulations, your extension "markdown-reader" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('markdown-reader.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from markdown-reader!');
	});

	let disposable2 = vscode.commands.registerCommand('markdown-reader.getCurrentFilePath', (uri) => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.path : '空'}`);
	});

	let disposable3 = vscode.commands.registerTextEditorCommand('markdown-reader.testEditorCommand', (textEditor, edit) => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		console.log('您正在执行编辑器命令！');
    	console.log(textEditor, edit);
	});

	context.subscriptions.push(disposable, disposable2, disposable3);
}

/**
 * 插件被释放时触发
 */
// this method is called when your extension is deactivated
export function deactivate() {
	console.log('您的扩展“vscode-plugin-demo”已被释放！');
}

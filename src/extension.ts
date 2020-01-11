import * as vscode from 'vscode';
import { Extension } from './core/Extension';

export async function activate(context: vscode.ExtensionContext) {
	console.log('swagger2struct plugin is now active!')

	await Extension.init(context)
}

// this method is called when your extension is deactivated
export function deactivate() {}

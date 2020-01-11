import * as vscode from "vscode"
import { join, relative, extname } from 'path'
import { File } from "../core/File"
import { Config } from "../core/Config"

export enum Commands {
    configureApiJsonFile = 'extension.configureApiJsonFile',
    configureEnvFile = 'extension.configureEnvFile',
    generate = 'extension.generate',
    merge = 'extension.merge',
    sync = 'extension.sync',
    help = 'extension.help',
    helloWorld = 'extension.helloWorld',
}

export class CommandsRegister {
    static init(ctx: vscode.ExtensionContext) {
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.configureApiJsonFile, evt => this.configureApiJsonFile(evt)))
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.configureEnvFile, evt => this.configureEnvFile(evt)))
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.generate, evt => this.generate(evt)))
        ctx.subscriptions.push(vscode.commands.registerTextEditorCommand(Commands.merge, (...args) => this.merge(...args)))
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.sync, evt => this.sync(evt)))
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.help, evt => this.help(evt)))
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.helloWorld, evt => this.helloWorld(evt)))
    }
    static async chooseFile(filePath: string): Promise<string | undefined> {
        const projectPathResult = File.getProjectPath().expect()
        const projectUri = projectPathResult.data.with({ path: join(projectPathResult.data.toString().substr('/file:'.length), filePath) })
        const extName = extname(projectUri.path)
        console.log('projectUri: ', projectUri, join(projectPathResult.data.toString().substr('/file:'.length), filePath))
        const uri = await vscode.window.showSaveDialog({
            defaultUri: projectUri,
            saveLabel: '确定',
            filters: {
                JavaScript: extName ? [extName.substr(1)] : []
            }
        })
        console.log('chooseFile: ', uri)
        return uri ? relative(projectPathResult.data.path, uri.path) : undefined
    }
    static async configureEnvFile(evt: any) {
        const path = await CommandsRegister.chooseFile(Config.DEFAULT_ENV_FILE_PATH)
        console.log('choose env file path: ', path)
        if (!path) return
        const options = await Config.getLocaleOptions()
        options.setEnvFilePath(path)
    }
    static async configureApiJsonFile(evt: any) {
        const path = await CommandsRegister.chooseFile(Config.DEFAULT_API_JSON_FILE_PATH)
        console.log('choose API doc.json path: ', path)
        if (!path) return
        const options = await Config.getLocaleOptions()
        options.setApiJsonPath(path)
    }
    static async help(evt: any) {
        const opt = await Config.getLocaleOptions()
        console.log(opt)
        vscode.window.showInformationMessage('查看帮助文档 ???');
    }
    static sync(evt: any): any {
        vscode.window.showInformationMessage('同步 ...');
    }
    static helloWorld(evt: any): any {
        vscode.window.showInformationMessage('hellloooooooooooooooo');
    }
    static generate(evt: any): any {
        vscode.window.showInformationMessage('generate');
    }
    static merge(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit, ...args: any): any {
        // vscode.window.showInformationMessage('merge ..');
        const options: vscode.InputBoxOptions = {
            value: 'default'
        }
        vscode.window.showInputBox(options)
        console.log(textEditor, edit, ...args)
    }
}
import * as vscode from "vscode"
import { join, relative, extname } from 'path'
import { File } from "../core/File"
import { Config } from "../core/Config"
import * as _ from 'lodash'
import { Struct, ApiModel } from "../core/Struct"

export enum Commands {
    generateStruct = 'extension.generateStruct',
    configureApiURLPath = 'extension.configureApiURLPath',
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
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.generateStruct, evt => this.generateStruct(evt)))
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.configureApiURLPath, evt => this.configureApiURLPath(evt)))
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.configureApiJsonFile, evt => this.configureApiJsonFile(evt)))
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.configureEnvFile, evt => this.configureEnvFile(evt)))
        ctx.subscriptions.push(vscode.commands.registerTextEditorCommand(Commands.merge, (...args) => this.merge(...args)))
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.sync, evt => this.sync(evt)))
        ctx.subscriptions.push(vscode.commands.registerCommand(Commands.help, evt => this.help(evt)))
    }
    static async generateStruct(evt: any) {
        const schemaName = await vscode.window.showInputBox({
            prompt: '请输入 schema 名称'
        })
        const schemaChineseName = await vscode.window.showInputBox({
            prompt: '请输入资源名称(中文)'
        })
        if (!schemaName || !schemaChineseName) return
        const opt = await Config.getLocaleOptions()
        const apiJson = await File.getApiJson(opt.apiJsonPath)
        const apiModel = apiJson.definitions[schemaName].properties
        const defaultStructNameParts = schemaName.split('.')
        const defaultStructName = defaultStructNameParts[defaultStructNameParts.length - 1]
        const structName = await vscode.window.showInputBox({
            value: defaultStructName,
            prompt: `请输入 struct 名称, 最终将生成 src/config/Name.struct.js`,
        })
        if (!structName) return
        const struct = new Struct(structName, schemaName, apiModel, schemaChineseName)
        const template = struct.generate()
        await File.writeStructFile(template, structName)
        // console.log(struct, template, apiModel, structName)
    }
    static async configureApiURLPath(evt: any) {
        const val = await vscode.window.showInputBox({
            value: Config.DEFAULT_API_JSON_URL_PATH,
            prompt: '请输入 doc.json 文件的 URL(相对于 `dev.env.js` 中的 `BASE_URL`)'
        })
        if (!val) return
        const options = await Config.getLocaleOptions()
        options.setApiJsonURLPath(val)
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
    static async sync(evt: any) {
        const opt = await Config.getLocaleOptions()
        await File.syncDocJson(opt.envFilePath, opt.apiJsonURLPath, opt.apiJsonPath)
        // vscode.window.showInformationMessage('正在将  同步 ...');
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
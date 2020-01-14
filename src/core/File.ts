import * as vscode from 'vscode'
import { Result, ResultError, ErrorTypes } from './Result'
import * as fs from 'fs-extra'
import { join } from 'path'
import * as http from 'http'
import * as https from 'https'

export class File {
    static getProjectPath (): Result<vscode.Uri> {
        let result: Result<vscode.Uri> = new Result(vscode.Uri.file(''))
        const folders = vscode.workspace.workspaceFolders
        if (!Array.isArray(folders) || folders.length === 0 || !folders[0].uri) {
            result.err = new ResultError(
                ErrorTypes.get_project_path_failed,
                '获取当前项目路径失败: workspaceFolders is ' + folders
            )
            return result
        }
        result.data = folders[0].uri
        return result
    }
    static async getConfigureJson(configureFilePath: string): Promise<Result<{ [prop: string]: any }>> {
        let result = new Result<{ [prop: string]: any }>({})
        const uri = File.getProjectPath().expect()
        try {
            const content = await fs.readFile(join(uri.data.path, configureFilePath))
            result.data = JSON.parse(content.toString())
            return result
        } catch (err) {
            console.log('read configure file failed', err)
            result.err = new ResultError(ErrorTypes.get_configure_file_failed)
            return result
        }
    }
    static async writeLocaleConfig(k: string, v: any, configureFilePath: string) {
        const optionsRes = await File.getConfigureJson(configureFilePath)
        optionsRes.data[k] = v
        console.log('设置配置项并保存到本地', k, v, optionsRes.data, configureFilePath)
        const projectPath = File.getProjectPath().expect()
        const data = JSON.stringify(optionsRes.data, null, '    ')
        fs.writeFile(join(projectPath.data.path, configureFilePath), data)
    }
    static async syncDocJson(envFilePath: string, apiJsonURLPath: string, apiJsonPath: string) {
        const uri = File.getProjectPath().expect()
        const envFile = await import(join(uri.data.path, envFilePath))
        const requester = envFile.BASE_URL.indexOf('https://') !== -1 ? https : http
        const apiJson = await File.getResource(requester, join(envFile.BASE_URL.substr(1, envFile.BASE_URL.length - 2), apiJsonURLPath))
        const apiJsonFilePath = join(uri.data.path, apiJsonPath)
        // 写入 apiJsonPath 对应的文件
        await fs.writeFile(apiJsonFilePath, apiJson)
        vscode.window.showInformationMessage('Api Json 文件写入成功, 位置: ' + apiJsonFilePath)
        // 打开文件
        await vscode.window.showTextDocument(vscode.Uri.file(apiJsonFilePath), {
            selection: new vscode.Range(new vscode.Position(1, 1), new vscode.Position(1, 1)),
            preview: false
        })
        // 使用 gitlens 对比文件修改
        await vscode.commands.executeCommand('gitlens.diffWithPrevious')
        // 聚焦到下一个修改
        // await vscode.commands.executeCommand('workbench.action.editor.nextChange')
        // await vscode.commands.executeCommand('workbench.action.compareEditor.nextChange')
    }
    static async getApiJson(apiJsonPath: string) {
        const uri = File.getProjectPath().expect()
        const apiJson = await import(join(uri.data.path, apiJsonPath))
        return apiJson
    }
    static getResource (requester: typeof http | typeof https = http, url: string): Promise<string> {
        return new Promise((resolve, reject) => {
            requester.get(url, res => {
                if (res.statusCode !== 200) {
                    vscode.window.showErrorMessage('同步 doc.json 失败 -1')
                    res.resume()
                    reject()
                } else {
                    res.setEncoding('utf-8')
                    let rawData = ''
                    res.on('data', chunk => rawData += chunk)
                    res.on('end', () => {
                        try {
                            resolve(rawData)
                        } catch (err) {
                            vscode.window.showErrorMessage('同步 doc.json 失败 -2')
                            reject(err)
                        }
                    })
                }
            })
        })
    }
    static toStructFileName(struct: string): string {
        return `${struct}.struct.js`
    }
}
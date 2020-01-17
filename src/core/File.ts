import * as vscode from 'vscode'
import { Result, ResultError, ErrorTypes } from './Result'
import * as fs from 'fs-extra'
import diff from '../Diff'
import * as day from 'dayjs'
// import { diff } from 'deep-object-diff'
// const diff = require('variable-diff')
import { join } from 'path'
import * as http from 'http'
import * as https from 'https'
import { ApiJson } from './Struct'

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
            console.log('warning: read configure file failed, so use default config', err)
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
        // 先保存修改前的 `api.swagger2struct.json`
        const origin = await import(apiJsonFilePath)
        // 写入 apiJsonPath 对应的文件
        await fs.writeFile(apiJsonFilePath, apiJson)
        vscode.window.showInformationMessage('Api Json 文件写入成功, 位置: ' + apiJsonFilePath)
        // 打开文件
        // await vscode.window.showTextDocument(vscode.Uri.file(apiJsonFilePath), {
        //     selection: new vscode.Range(new vscode.Position(1, 1), new vscode.Position(1, 1)),
        //     preview: false
        // })
        // 使用 gitlens 对比文件修改
        // await vscode.commands.executeCommand('gitlens.diffWithPrevious')
        // 聚焦到下一个修改
        // await vscode.commands.executeCommand('workbench.action.editor.nextChange')
        // await vscode.commands.executeCommand('workbench.action.compareEditor.nextChange')
        // 使用 variable-diff
        // console.log(diff, JSON.parse(apiJson))
        const diffResult = diff(origin, JSON.parse(apiJson), { indent: '    ', newLine: '\n', color: true })
        console.log('diff result:\n\n', diffResult.text)
        const diffFileName = 'mark.swagger2struct.' + day().format('YYYY-MM-DD_HH-mm-ss') + '.diff'
        const diffFilePath = join(uri.data.path, diffFileName)
        await fs.writeFile(diffFilePath, diffResult.text)
        await vscode.window.showTextDocument(vscode.Uri.file(diffFilePath), {
            selection: new vscode.Range(new vscode.Position(1, 1), new vscode.Position(1, 1)),
            preview: false
        })
    }
    static async getApiJson(apiJsonPath: string): Promise<ApiJson> {
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
    static async writeStructFile(template: string, structName: string) {
        const uri = File.getProjectPath().expect()
        const savePath = join(uri.data.path, `src/config/${structName}.struct.js`)
        await fs.writeFile(savePath, template)
        vscode.window.showInformationMessage('struct 文件生成成功!')
        // 打开文件
        await vscode.window.showTextDocument(vscode.Uri.file(savePath), {
            preview: false
        })
    }
}
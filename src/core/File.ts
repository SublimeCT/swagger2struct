import * as vscode from 'vscode'
import { Result, ResultError, ErrorTypes } from './Result'
import * as fs from 'fs-extra'
import { join } from 'path'

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
}
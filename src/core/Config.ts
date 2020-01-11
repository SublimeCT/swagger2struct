import { File } from "./File"

export class ConfigOptions {
    public apiJsonPath: string
    public envFilePath: string
    constructor (opt: { [prop: string]: any }) {
        this.apiJsonPath = opt.apiJsonPath || Config.DEFAULT_API_JSON_FILE_PATH
        this.envFilePath = opt.envFilePath || Config.DEFAULT_ENV_FILE_PATH
    }
    async setApiJsonPath (v: string) {
        await File.writeLocaleConfig('apiJsonPath', v, Config.CONFIGURE_FILE_PATH)
        this.apiJsonPath = v
    }
    async setEnvFilePath (v: string) {
        await File.writeLocaleConfig('envFilePath', v, Config.CONFIGURE_FILE_PATH)
        this.envFilePath = v
    }
}

export class Config {
    /**
     * 默认的 API 文档上的 doc.json 同步到本地的文件名
     */
    static readonly DEFAULT_API_JSON_FILE_PATH = 'api.swagger2struct.json'
    /**
     * 默认的当前环境的配置文件路径
     */
    static readonly DEFAULT_ENV_FILE_PATH = 'config/dev.env.js'
    /**
     * 本插件配置文件保存路径
     */
    static readonly CONFIGURE_FILE_PATH = 'config.swagger2struct.json'
    /**
     * 从本地的配置文件中获取所有配置项
     */
    static async getLocaleOptions(): Promise<ConfigOptions> {
        const options = await File.getConfigureJson(Config.CONFIGURE_FILE_PATH)
        return new ConfigOptions(options.data)
    }
}
import * as _ from 'lodash'

export class Struct {
    static version = '1.0.0'
    /**
     * strut.js 文件模版
     * @description 通过该模版生成结构文件, 插值语法为 `€name€`; ~~不在代码中显示的内容 `π...π`~~
     */
    static template = `import { Struct, Field, Rule, Strategy } from './struct.js'

/**
 * €schema€ 结构定义
 * @version template version: ${Struct.version}
 */
export class €structClassName€Struct extends Struct {
    /**
     * 开关状态
     */
    static STATUS = {
        '0': { label: '禁用', tagType: 'info', color: '#909399' },
        '1': { label: '启用', tagType: 'success', color: '#67C23A' }
    }
    static options = {
        /**
         * 当前数据的唯一标识
         * @note 注意: 在 options 的代理对象中的 swapId 引用了这个 key, 所以至少应该保证这个 swapId 不会错
         */
        key: '€key€',
        /**
         * 在 api 请求中的 key
         * @type {string}
         * @note 用于生成当前资源的 CURD 请求函数, 若不存在该属性则无法使用
         * ## Usage
         * \`apiKey === 'areas'\`
         *
         * - create: POST \`/ areas\`
         * - delete: DELETE \`/ areas / \${ req.id } \`
         * - edit: POST \`/ areas / \${ req.id } \`
         * - select: POST \`/ areas / \${ req.id } \`
         * - list: POST \`/ areas\`
         */
        apiKey: '',
        label: '€structChineseName€', /* 🔥 you must rewrite this value ! */
        schema: '€schema€'
    }
    static fields = { // 🚗🚕🚙🚓🚑🚒
        /* 🚗🚗🚗🚗🚗🚗 预定义字段 START - powerd by swagger2struct */
        id: { methods: [Field.METHOD_LIST] },
        €key€id: { methods: [Field.METHOD_LIST] },
        addtime: {
            label: '创建时间',
            reqStrategy: Strategy.EFFECT_DISABLED,
            methods: [Field.METHOD_LIST]
        },
        /* 🚗🚗🚗🚗🚗🚗 预定义字段 END */
        /* 🚕🚕🚕🚕🚕🚕 结构字段 START - powerd by swagger2struct */
€fields€
        /* 🚕🚕🚕🚕🚕🚕 结构字段 END */
    }
    constructor(instance) {
        super(€structClassName€Struct.options, €structClassName€Struct.fields)
        this.instance = instance
    }
}
`
    static listFields = ['methods', 'rules']

    get structName () {
        return _.capitalize(_.camelCase(this.key))
    }
    constructor(public readonly key: string, public readonly schema: string, public readonly model: Properties, public readonly chineseName: string) {}
    generate(): string {
        const interpolations: Interpolation = {
            key: this.key,
            structClassName: this.structName,
            structChineseName: this.chineseName,
            schema: this.schema,
            fields: this._convertFields(this.model),
        }
        const interpolationsHandler = new InterpolationsHandler(Struct.template, interpolations)
        interpolationsHandler.replace()
        return interpolationsHandler.result
    }
    private _convertFields(model: Properties): string {
        const fields: { [name: string]: StructModel } = {}
        for (const k in model) {
            const field: ApiModel = model[k]
            let val = null
            switch (field.type) {
                case 'integer': val = 0; break
                case 'string': val = ''; break
            }
            const _field: StructModel = {
                val: val,
                rules: `[Rule.required]`,
                label: field.description || k,
                description: field.description || k,
                methods: `[Field.METHOD_LIST, Field.METHOD_GET]`
            }
            fields[k] = _field
        }
        let fieldsResult = ''
        for (const f in fields) {
            const fieldTemplatePrefix = `        ${f}: {\n`
            const fieldTemplateSuffix = `\n        },\n`
            const rows: string[] = []
            for (const r in fields[f]) {
                let v = fields[f][r]
                if (Struct.listFields.includes(r)) {
                    // methods: ['Field.METHOD_LIST', 'Field.METHOD_GET'],
                } else if (typeof fields[f][r] !== 'string') {
                    // val: 0 / val: null
                } else {
                    v = `'${fields[f][r]}'`
                }
                rows.push(`            ${r}: ${v},`)
            }
            fieldsResult += fieldTemplatePrefix + rows.join('\n') + fieldTemplateSuffix
        }
        return fieldsResult
    }
}

export class InterpolationsHandler {
    public result: string = ''
    constructor (
        public readonly template: string,
        public params: { [name: string]: string } = {},
    ) {}
    public replace() {
        let _template = this.template
        for (const k in this.params) {
            const pattern = this.toReplaceRegexp(k)
            // 执行替换
            _template = _template.replace(pattern, this.params[k])
        }
        this.result = _template
    }
    public toReplaceRegexp(name: string): RegExp {
        return new RegExp(`€${name}€`, 'g')
    }
}

export interface StructModel {
    val: number | string | null,
    label: string,
    rules?: string,
    reqStrategy?: string,
    resStrategy?: string,
    inputFilterRange?: string,
    inputFilterFixedCount?: number,
    description: string,
    methods: string,
    [props: string]: any,
}

export interface ApiModel {
    description?: string
    type: string
    $ref: string
    [prop: string]: any
}

export interface Properties {
    [fieldName: string]: ApiModel
}

export interface ApiJson {
    paths: {
        [pathName: string]: object
    },
    definitions: {
        [modelName: string]: {
            type: string,
            properties: Properties
        }
    }
}

export interface Interpolation {
    key: string,
    schema: string,
    fields: string,
    structClassName: string,
    [param: string]: string
}

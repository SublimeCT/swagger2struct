# swagger2struct extension

## Start
[doc](https://code.visualstudio.com/api/get-started/your-first-extension)

## Install
```bash
code --install-extension swagger2struct-1.0.0.vsix
```

## Packaged
初次打包需要先安装 vsce
```bash
yarn global add vsce
```

```bash
vsce package --yarn
```

## 参考
- [vscode extension API](https://code.visualstudio.com/api/get-started/your-first-extension)
- [VSCode插件开发全攻略](http://blog.haoji.me/vscode-plugin-overview.html)
- [vscode extension 中文文档](https://www.cntofu.com/book/98/md/%E6%89%A9%E5%B1%95/%E5%AE%89%E8%A3%85-%E6%89%A9%E5%B1%95.md)

## Commands
命令 | 描述 | 未完成部分
--- |--- |---
`onCommand:extension.generateStruct` | 通过 `api.swagger2struct.json` 生成结构文件 | 
`onCommand:extension.configureApiURLPath` | 配置 API `doc.json` URL(相对于 `dev.env.js` 中的 `BASE_URL` 保存的路径值) | 
`onCommand:extension.configureApiJsonFile` | 配置 API `doc.json` 文件路径 | 
`onCommand:extension.configureEnvFile` | 配置当前使用的环境配置文件 | 
`onCommand:extension.merge` | 在 `api.swagger2struct.json` 中查找当前结构并与当前结构文件合并 | 
`onCommand:extension.sync` | 查看帮助文档 | 
`onCommand:extension.help` | 同步后端的 API doc.json 到本地 | 

## Features
...

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

- 初步完成保存配置项及通过 `API` `doc.json` 生成 `struct` 文件

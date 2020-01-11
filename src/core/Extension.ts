import { ExtensionContext } from "vscode";
import { CommandsRegister } from "../commands";


export class Extension {
    static ctx: ExtensionContext
    static init(ctx: ExtensionContext) {
        Extension.ctx = ctx
        // 注册 commands
        CommandsRegister.init(ctx)
	}
}
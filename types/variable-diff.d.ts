/**
 * Type definitions for variable-diff 2.0.1
 * source: https://www.npmjs.com/package/variable-diff
 * @author sven
 */
declare module 'variable-diff' {
    interface DiffOptions {
        indent: string,
        newLine: string,
        wrap?: (type: string, text: string) => string,
        color: boolean
    }
    function diff(left: object, right: object, options: DiffOptions): string
    export default diff
}

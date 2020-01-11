export enum ErrorTypes {
    get_project_path_failed,
    get_configure_file_failed,
    result_not_found
}

export class Result<T> {
    err?: ResultError
    constructor (public data: T) {}
    expect(): this {
        if (this.err) throw this.err
        if (this.data === undefined) throw new ResultError(ErrorTypes.result_not_found)
        return this
    }
}

export class ResultError extends Error {
    constructor(
        public readonly type: ErrorTypes,
        public readonly details?: string) {
        super(ErrorTypes[type].toString())
    }

    toString(): string {
        return ErrorTypes[this.type].toString() + (this.details ? ('\n' + this.details) : '')
    }
}

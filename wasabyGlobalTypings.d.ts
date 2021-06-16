declare module 'i18n!*' {
    function rk(key: string, ctx?: string | number, num?: number): string;
    const module: typeof rk;
    export = module;
}

declare module 'wml!*' {
    // tslint:disable-next-line: no-any
    const module: any;
    export = module;
}

declare module 'tmpl!*' {
    // tslint:disable-next-line: no-any
    const module: any;
    export = module;
}

declare module 'html!*' {
    // tslint:disable-next-line: no-any
    const module: any;
    export = module;
}

declare module 'css!*' {
    const value: string;
    export = value;
}

declare module 'json!*' {
    // tslint:disable-next-line: no-any
    const value: any;
    export = value;
}

declare module 'optional!*' {
    // tslint:disable-next-line: no-any
    const module: any;
    export = module;
}

declare module 'browser!*' {
    // tslint:disable-next-line: no-any
    const value: any;
    export = value;
}

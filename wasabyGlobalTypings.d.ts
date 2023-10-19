declare module 'i18n!*' {
    function rk(key: string, ctx?: string | number, num?: number): string;
    const module: typeof rk;
    export = module;
}

declare module 'wml!*' {
    const module: any;
    export = module;
}

declare module 'tmpl!*' {
    const module: any;
    export = module;
}

declare module 'html!*' {
    const module: any;
    export = module;
}

declare module 'css!*' {
    const value: string;
    export = value;
}

declare module 'json!*' {
    const value: any;
    export = value;
}

declare module 'optional!*' {
    const module: any;
    export = module;
}

declare module 'browser!*' {
    const value: any;
    export = value;
}

declare function setTestID(id: number): void;

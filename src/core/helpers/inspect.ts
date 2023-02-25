
export function inspect(x: any): any {
    if (x && typeof x.inspect === 'function') {
        return x.inspect();
    }

    function inspectFn(f: any) {
        return f.name ? f.name : f.toString();
    }

    function inspectTerm(t: any) {
        switch (typeof t) {
            case 'string':
                return `'${t}'`;
            case 'object': {
                const ts = Object.keys(t).map(k => [k, inspect(t[k])]);
                return `{${ts.map(kv => kv.join(': ')).join(', ')}}`;
            }
            default:
                return String(t);
        }
    }

    function inspectArgs(args: any) {
        return Array.isArray(args) ? `[${args.map(inspect).join(', ')}]` : inspectTerm(args);
    }

    return (typeof x === 'function') ? inspectFn(x) : inspectArgs(x);
}
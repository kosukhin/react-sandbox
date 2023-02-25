import {capitalize} from "./capitalize";

export const getType = (x: any): any => {
    if (x === null) {
        return 'Null';
    }

    if (typeof x === 'undefined') {
        return '()';
    }

    if (Array.isArray(x)) {
        return `[${x[0] ? getType(x[0]) : '?'}]`;
    }

    if (typeof x.getType === 'function') {
        return x.getType();
    }

    if (x.constructor && x.constructor.name) {
        return x.constructor.name;
    }

    return capitalize(typeof x);
};
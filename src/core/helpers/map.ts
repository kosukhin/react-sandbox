import * as R from 'ramda'

export const map = R.curry(function map(fn, f) {
    return f.map(fn);
});
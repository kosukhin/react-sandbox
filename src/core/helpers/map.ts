import * as R from 'ramda'

export const map = R.curry(function map(fn, f) {
    console.log('map called on', f.inspect())
    return f.map(fn);
});
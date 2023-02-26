import {curry} from "ramda";

export const liftA3 = curry(function liftA3(fn, a1, a2, a3) {
    return a1.map(fn).ap(a2).ap(a3);
});
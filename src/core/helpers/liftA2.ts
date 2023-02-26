import {curry} from "ramda";

export const liftA2 = curry(function liftA2(fn, a1, a2) {
    return a1.map(fn).ap(a2);
});
/**
 * Эффект позволяет выполнить допработу
 * без изменения значения
 */
import {compose, pipe} from "ramda";
import {call} from "./call";
import {apply} from "./apply";

export const effect = (fn) => (x?) => {
    fn(x);
    return x;
}

export const effectCall = compose(
    effect,
    call,
)

export const effectApply = compose(
    effect,
    apply,
)
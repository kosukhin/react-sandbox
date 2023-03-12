import {Left, Right} from "../containers";
import {curry} from "ramda";

/**
 * Для случая Left
 */
export const forLeft = curry((fn: any, either: Left | Right) => {
    if (either.isLeft) {
        fn(either.$value);
    }
})
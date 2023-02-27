import {curry} from "ramda";

/**
 * Вызывает функцию
 */
export const call = (fn, ...args) => {
    return () => {
        fn(...args)
    }
}
/**
 * Применяет полученное значение на функцию
 * @param fn
 * @param args
 */
export const apply = (fn, ...args) => {
    return (x) => {
        fn(x, ...args)
    }
}
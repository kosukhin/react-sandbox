import {inspect, getType} from "../helpers";

/**
 * Контейнер для возможно пустых значений
 * для безопасного использования этих значений
 */
export class Maybe {
    $value: any;

    static of(x: any) {
        return new Maybe(x);
    }

    get isNothing() {
        return this.$value === null || this.$value === undefined;
    }

    get isJust() {
        return !this.isNothing;
    }

    constructor(x: any) {
        this.$value = x;
    }

    ap(f: any) {
        return this.isNothing ? this : f.map(this.$value);
    }

    chain(fn: any) {
        return this.map(fn).join();
    }

    inspect() {
        return this.isNothing ? 'Nothing' : `Just(${inspect(this.$value)})`;
    }

    getType() {
        return `(Maybe ${this.isJust ? getType(this.$value) : '?'})`;
    }

    join() {
        return this.isNothing ? this : this.$value;
    }

    map(fn: any) {
        return this.isNothing ? this : Maybe.of(fn(this.$value));
    }

    sequence(of: any) {
        return this.traverse(of, (x: any) => x);
    }

    traverse(of: any, fn: any) {
        return this.isNothing ? of(this) : fn(this.$value).map(Maybe.of);
    }
}
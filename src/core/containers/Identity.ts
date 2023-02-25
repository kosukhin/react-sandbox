import {inspect, getType} from "../helpers";

/**
 * Как я понял это контейнер который
 * просто хранит значение и не добавляет ничего сверху
 * никакой доп логики
 */
export class Identity {
    $value: any;

    static of(x: any) {
        return new Identity(x);
    }

    constructor(x: any) {
        this.$value = x;
    }

    ap(f: any) {
        return f.map(this.$value);
    }

    chain(fn: any) {
        return this.map(fn).join();
    }

    inspect() {
        return `Identity(${inspect(this.$value)})`;
    }

    getType() {
        return `(Identity ${getType(this.$value)})`;
    }

    join() {
        return this.$value;
    }

    map(fn: any) {
        return Identity.of(fn(this.$value));
    }

    sequence(of: any) {
        return this.traverse(of, (x: any) => x);
    }

    traverse(of: any, fn: any) {
        return fn(this.$value).map(Identity.of);
    }
}
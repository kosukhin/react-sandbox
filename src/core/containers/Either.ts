import {inspect, getType} from "../helpers";

/**
 * Эти классы нужня для программирования
 * условий как я понял Right - это правильная ветка
 * left альтернативная, но это не точно
 */
export class Either {
    $value: any;

    static of(x: any) {
        return new Right(x);
    }

    constructor(x: any) {
        this.$value = x;
    }
}


export class Left extends Either {
    get isLeft() {
        return true;
    }

    get isRight() {
        return false;
    }

    ap() {
        return this;
    }

    chain() {
        return this;
    }

    inspect() {
        return `Left(${inspect(this.$value)})`;
    }

    getType() {
        return `(Either ${getType(this.$value)} ?)`;
    }

    join() {
        return this;
    }

    map() {
        return this;
    }

    sequence(of: any) {
        return of(this);
    }

    traverse(of: any, fn: any) {
        return of(this);
    }
}


export class Right extends Either {
    get isLeft() {
        return false;
    }

    get isRight() {
        return true;
    }

    ap(f: any) {
        return f.map(this.$value);
    }

    chain(fn: any) {
        return fn(this.$value);
    }

    inspect() {
        return `Right(${inspect(this.$value)})`;
    }

    getType() {
        return `(Either ? ${getType(this.$value)})`;
    }

    join() {
        return this.$value;
    }

    map(fn: any) {
        return Either.of(fn(this.$value));
    }

    sequence(of: any) {
        return this.traverse(of, (x: any) => x);
    }

    traverse(of: any, fn: any) {
        fn(this.$value).map(Either.of);
    }
}
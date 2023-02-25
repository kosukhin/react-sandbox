import {assert, inspect, getType} from "../helpers";

/**
 * Тоже набор значений но в виде хэша
 */
class Map {
    $value: any;

    constructor(x: any) {
        assert(
            typeof x === 'object' && x !== null,
            'tried to create `Map` with non object-like',
        );

        this.$value = x;
    }

    inspect() {
        return `Map(${inspect(this.$value)})`;
    }

    getType() {
        const sample = this.$value[Object.keys(this.$value)[0]];

        return `(Map String ${sample ? getType(sample) : '?'})`;
    }

    insert(k: any, v: any) {
        const singleton: any = {};
        singleton[k] = v;
        return new Map(Object.assign({}, this.$value, singleton));
    }

    reduce(fn: any, zero: any) {
        return this.reduceWithKeys((acc: any, _: any, k: any) => fn(acc, k), zero);
    }

    reduceWithKeys(fn: any, zero: any) {
        return Object.keys(this.$value)
            .reduce((acc, k) => fn(acc, this.$value[k], k), zero);
    }

    map(fn: any) {
        return new Map(this.reduceWithKeys((obj: any, v: any, k: any) => {
            obj[k] = fn(v); // eslint-disable-line no-param-reassign
            return obj;
        }, {}));
    }

    sequence(of: any) {
        return this.traverse(of, (x: any) => x);
    }

    traverse(of: any, fn: any) {
        return this.reduceWithKeys(
            (f: any, a: any, k: any) => fn(a).map((b: any) => (m: any) => m.insert(k, b)).ap(f),
            of(new Map({})),
        );
    }
}
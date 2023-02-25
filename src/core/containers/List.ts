import {assert, inspect, getType} from "../helpers";

/**
 * Набор значений
 */
export class List {
    $value: any;

    static of(x: any) {
        return new List([x]);
    }

    constructor(xs: any) {
        assert(
            Array.isArray(xs),
            'tried to create `List` from non-array',
        );

        this.$value = xs;
    }

    concat(x: any) {
        return new List(this.$value.concat(x));
    }

    inspect() {
        return `List(${inspect(this.$value)})`;
    }

    getType() {
        const sample = this.$value[0];

        return `(List ${sample ? getType(sample) : '?'})`;
    }

    map(fn: any) {
        return new List(this.$value.map(fn));
    }

    sequence(of: any) {
        return this.traverse(of, (x: any) => x);
    }

    traverse(of: any, fn: any) {
        return this.$value.reduce(
            (f: any, a: any) => fn(a).map((b: any) => (bs: any) => bs.concat(b)).ap(f),
            of(new List([])),
        );
    }
}
import {assert} from "../helpers";
import * as R from 'ramda'

/**
 * Асинхронная внешняя зависимость
 */
export class Task {
    fork: any;

    constructor(fork: any) {
        assert(
            typeof fork === 'function',
            'invalid `fork` operation given to Task constructor. Use `Task.of` if you want to lift a value in a default minimal Task context.',
        );

        this.fork = fork;
    }

    static of(x: any) {
        return new Task((_: any, resolve: any) => resolve(x));
    }

    static rejected(x: any) {
        return new Task((reject: any, _: any) => reject(x));
    }

    ap(f: any) {
        return this.chain((fn: any) => f.map(fn));
    }

    chain(fn: any) {
        return new Task((reject: any, resolve: any) => this.fork(reject, (x: any) => fn(x).fork(reject, resolve)));
    }

    inspect() { // eslint-disable-line class-methods-use-this
        return 'Task(?)';
    }

    getType() { // eslint-disable-line class-methods-use-this
        return '(Task ? ?)';
    }

    join() {
        return this.chain((x: any) => x);
    }

    map(fn: any) {
        return new Task((reject: any, resolve: any) => this.fork(reject, R.compose(resolve, fn)));
    }
}
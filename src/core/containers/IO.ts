import * as R from 'ramda'
import {inspect, getType, assert} from "../helpers";

/**
 * Синхронная внешняя зависимость
 */
export class IO {
    unsafePerformIO: any;

    // В of передаем значения
    static of(x: any) {
        return new IO(() => x);
    }

    // io это функция выоплняющая внешнюю работу
    constructor(io: any) {
        assert(
            typeof io === 'function',
            'invalid `io` operation given to IO constructor. Use `IO.of` if you want to lift a value in a default minimal IO context.',
        );

        this.unsafePerformIO = io;
    }

    // Это применение IO, вычисление и получение рез
    ap(f: any) {
        return this.chain((fn: any) => f.map(fn));
    }

    // Позволяет также применить функцию и смержить монаду
    chain(fn: any) {
        return this.map(fn).join();
    }

    inspect() {
        return `IO(${inspect(this.unsafePerformIO())})`;
    }

    getType() {
        return `(IO ${getType(this.unsafePerformIO())})`;
    }


    join() {
        return this.unsafePerformIO();
    }

    // применение функции к результату выполнения IO
    map(fn: any) {
        return new IO(R.compose(fn, this.unsafePerformIO));
    }
}
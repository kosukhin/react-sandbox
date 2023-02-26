import {IO} from "../../core/containers";

export const myLogger = (x: any) => {
    console.log('logger called with', x)
    return new IO(() => console.log(x))
}
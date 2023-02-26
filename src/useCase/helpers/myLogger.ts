import {IO} from "../../core/containers";

export const myLogger = (x: any) => {
    return new IO(() => console.log(x))
}
import {IO} from "../../core/containers";

export const waitTask = (task) => {
    return new IO(() => {
        return new Promise((resolve, reject) => {
            task.fork(reject, resolve)
        })
    })
}
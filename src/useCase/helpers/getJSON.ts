import {IO, Task} from "../../core/containers";

export const getJSON = (url: string) => {
    console.log('url is', url)
    return new Task((reject: any, result: any) => {
        console.log('fetching')
        fetch(url).then(result).catch(reject)
    })
}
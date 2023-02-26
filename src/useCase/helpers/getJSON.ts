import {Task} from "../../core/containers";

export const getJSON = (url: string) => {
    return new Task((reject: any, result: any) => {
        fetch(url).then(response => response.json()).then(result).catch(reject)
    })
}
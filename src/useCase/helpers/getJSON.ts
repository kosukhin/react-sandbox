import {Left, Right, Task} from "../../core/containers";

export const getJSON = (url: string) => {
    return new Task((reject: any, result: any) => {
        setTimeout(() => {
            fetch(url).then(response => {
                if (response.status !== 200) {
                    return 'Error '+response.status;
                }

                return response.json()
            })
                .then((value) => {
                    if (typeof(value) === 'string') {
                        result(new Left(value))
                        return
                    }
                    result(Right.of(value))
                })
                .catch((error) => {
                    reject(Left.of(error))
                })
        }, 1000);
    })
}
import * as R from 'ramda'
import {Task} from "../core/containers";


const getJSON = R.curry((url, params) => new Task((reject: any, result: any) => {
    fetch(url).then(result).catch(reject)
}));

const res = Task.of(3).map(three => three + 1);
res.fork(
    error => console.log(error),
    value => console.log(value),
)
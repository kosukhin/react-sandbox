import {Task} from "../core/containers";

const res = Task.of(3).map(three => three + 1);
res.fork(
    error => console.log(error),
    value => console.log(value),
)
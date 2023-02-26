import {Identity} from "../../core/containers";

export const performTask = (task) => task.fork(Identity.of, Identity.of)
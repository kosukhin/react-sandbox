import {Identity} from "../../core/containers";

export const runTask = task => task.fork(Identity.of, Identity.of)
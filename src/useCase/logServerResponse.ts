import {compose} from "ramda";
import {runTask} from "./helpers/runTask";
import {map} from "../core/helpers";
import {myLogger} from "./helpers/myLogger";
import {getJSON} from "./helpers/getJSON";
import {performIO} from "./helpers/performIO";

/**
 * Вывод в консоль ответа сервера
 */
export const logServerResponse = compose(
    runTask,
    map(performIO),
    map(myLogger),
    getJSON
)
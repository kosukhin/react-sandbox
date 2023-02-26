import {compose} from "ramda";
import {performTask} from "./performTask";
import {map} from "../../core/helpers";
import {performIO} from "./performIO";

/**
 * Выполняет IO внутри Task
 */
export const performIOTask = compose(
    performTask,
    map(performIO),
)
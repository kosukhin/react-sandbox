import {compose} from "ramda";
import {map} from "../core/helpers";
import {myLogger} from "./helpers/myLogger";
import {getJSON} from "./helpers/getJSON";

/**
 * Вывод в консоль ответа сервера
 */
export const logServerResponse = compose(
    map(myLogger),
    getJSON
)
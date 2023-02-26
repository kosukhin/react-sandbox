import {logServerResponse} from "./logServerResponse";
import {performIOTask} from "./helpers/performIOTask";
import {compose} from "ramda";
import {getJSON} from "./helpers/getJSON";
import {waitTask} from "./helpers/waitTask";
import {performIO} from "./helpers/performIO";

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

/**
 * Выводит в консоль список юзеров
 */
export const showUsersTable = () => compose(
    performIOTask,
    logServerResponse
)(usersUrl)

/**
 * Returns promise with users
 */
export const getUsers = () => compose(
    performIO,
    waitTask,
    getJSON
)(usersUrl)
import {logServerResponse} from "./logServerResponse";
import {performIOTask} from "./helpers/performIOTask";
import {compose} from "ramda";

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

/**
 * Выводит в консоль список юзеров
 */
export const showUsersTable = () => compose(
    performIOTask,
    logServerResponse
)(usersUrl)
import {logServerResponse} from "./logServerResponse";

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

/**
 * Выводит таблицу с списком юзеров
 * Что нужно сделать:
 * вызвать getJSON
 * вернется Task
 * замапить логирование
 */
export const showUsersTable = () => {
    logServerResponse(usersUrl);
}
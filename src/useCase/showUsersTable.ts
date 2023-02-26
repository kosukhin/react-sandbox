import * as R from 'ramda'
import {getJSON} from "./helpers/getJSON";
import {map} from "../core/helpers";
import {myLogger} from "./helpers/myLogger";
import {Either, Identity, Task} from "../core/containers";

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

/**
 * Выводит таблицу с списком юзеров
 * Что нужно сделать:
 * вызвать getJSON
 * вернется Task
 * замапить логирование
 */
export const showUsersTable = () => {
    const logUsers = R.compose(map(myLogger), getJSON)

    // logUsers(usersUrl).fork(
    //     error => console.log,
    //     value => value
    // )

    const res = Either.of(myLogger).ap(getJSON(usersUrl))
    res.fork(Identity.of, Identity.of)
}
import {ChangeEvent, useState} from "react";
import "../useCase/fromBook";
import {getPureUsers, getUsersError} from "../useCase/showUsersTable";
import {myLogger} from "../useCase/helpers/myLogger";
import {compose, curry, pipe, prop} from "ramda";
import {performIO} from "../useCase/helpers/performIO";
import {Button} from "./ui/Button";
import {ButtonGroup} from "./ui/ButtonGroup";
import {map} from "../core/helpers";
import {effect, effectApply, effectCall} from "../useCase/helpers/effect";
import {call} from "../useCase/helpers/call";
import {apply} from "../useCase/helpers/apply";
import {performTask} from "../useCase/helpers/performTask";
import {getTodos} from "../useCase/todos";
import {showError} from "../core/helpers/showError";
import {forLeft} from "../core/helpers/forLeft";

// Покажет имя юзера в консоль
const showName = compose(performIO, myLogger, prop('name'))

interface User {
    id: number,
    name: string
}

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const loadingProcess = curry((dataLoader, setData, setLoading) => pipe(
    effectCall(setData, []),
    effectCall(setLoading, true),
    dataLoader,
    map(effectApply(forLeft(showError))),
    map(map(effectApply(setData))),
    map(effectCall(setLoading, false)),
))

function Tests() {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState<User[]>([])
    const [todos, setTodos] = useState<Todo[]>([])
    const [user, setUser] = useState({
        name: 'Ivan',
    });
    const onShowName = () => showName(user)
    const changeName = (event: ChangeEvent<HTMLInputElement>) =>  {
        setUser({name: event.target.value})
    }

    const onClick = pipe(loadingProcess(
        getPureUsers,
        setUsers,
        setLoading
    ), performTask)

    const onGetUsersError = pipe(loadingProcess(
        getUsersError,
        setUsers,
        setLoading
    ), performTask)

    const onClick2 = pipe(loadingProcess(
        getTodos,
        setTodos,
        setLoading
    ), performTask)

    return (
        <div>
            <input
                className="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                value={user.name}
                onChange={changeName}
            />
            <ButtonGroup>
                <Button onClick={onShowName}>
                    Показать имя
                </Button>
            </ButtonGroup>
            <h2>Юзеры</h2>
            <ButtonGroup>
                <Button onClick={onClick}>
                    Получить юзеров
                </Button>
                <Button onClick={onGetUsersError}>
                    Получить юзеров ошибка
                </Button>
            </ButtonGroup>
            <div>
                {loading ? (<div>Идет загрузка...</div>) : null}
                {users.length ? (
                    <ul>
                        { users.map(user => (<li key={user.id}>{user.name}</li>))}
                    </ul>
                ) : (
                    <div>Нет юзеров</div>
                )}
            </div>
            <hr/>
            <h2>Туду</h2>
            <Button onClick={onClick2}>
                Получить туду
            </Button>
            <div>
                {loading ? (<div>Идет загрузка...</div>) : null}
                {todos.length ? (
                    <ul>
                        { todos.map(todo => (<li key={todo.id}>{todo.title}</li>))}
                    </ul>
                ) : (
                    <div>Нет туду</div>
                )}
            </div>
        </div>
    )
}

export default Tests
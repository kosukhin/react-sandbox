import {ChangeEvent, useState} from "react";
import "../useCase/fromBook";
import {getPureUsers, getUsers, showUsersTable} from "../useCase/showUsersTable";
import {myLogger} from "../useCase/helpers/myLogger";
import {compose, curry, prop} from "ramda";
import {performIO} from "../useCase/helpers/performIO";
import {Button} from "./ui/Button";
import {ButtonGroup} from "./ui/ButtonGroup";
import {IO} from "../core/containers";
import {map} from "../core/helpers";
import {performIOTask} from "../useCase/helpers/performIOTask";

// Покажет имя юзера в консоль
const showName = compose(performIO, myLogger, prop('name'))

showUsersTable();

interface User {
    id: number,
    name: string
}

const ioSetter = curry((setter, value) => new IO(() => {
    setter(value)
}))

const updateUsers = (setUsers, setLoading) => compose(
    performIOTask,
    map(ioSetter(setUsers)),
    map((x) => {
        console.log('set load', false)
        setLoading(false)
        return x
    }),
    getPureUsers,
    (x?) => {
        console.log('setload', true)
        setLoading(true)
        setUsers([])
        return x
    },
)

function Tests() {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState({
        name: 'Ivan',
    });
    const onShowName = () => showName(user)
    const changeName = (event: ChangeEvent<HTMLInputElement>) =>  {
        setUser({name: event.target.value})
    }

    const onClick = async () => {
        updateUsers(setUsers, setLoading)()
    }

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
                <Button onClick={onClick}>
                    Получить юзеров
                </Button>
            </ButtonGroup>
            {loading ? (<div>Идет загрузка...</div>) : null}
            {users.length ? (
                <ul>
                    { users.map(user => (<li key={user.id}>{user.name}</li>))}
                </ul>
            ) : (
                <div>Нет юзеров</div>
            )}
        </div>
    )
}

export default Tests
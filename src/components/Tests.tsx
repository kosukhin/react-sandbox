import * as R from 'ramda'
import {ChangeEvent, useState} from "react";
import "../useCase/fromBook";
import {getUsers, showUsersTable} from "../useCase/showUsersTable";
import {myLogger} from "../useCase/helpers/myLogger";

// Покажет имя юзера в консоль
const showName = R.compose(myLogger, R.prop('name'))

showUsersTable();

function Tests() {
    const [user, setUser] = useState({
        name: 'Ivan',
    });
    const onShowName = () => showName(user).unsafePerformIO()
    const changeName = (event: ChangeEvent<HTMLInputElement>) =>  {
        setUser({name: event.target.value})
    }

    const onClick = async () => {
        const res = await getUsers()
        console.log(res)
    }

    return (
        <div>
            <input
                className="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                value={user.name}
                onChange={changeName}
            />
            <button onClick={onShowName}>show name</button>
            <button onClick={onClick}>get users</button>
        </div>
    )
}

export default Tests
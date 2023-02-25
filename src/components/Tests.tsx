import * as R from 'ramda'
import {IO} from "../core/containers";
import {ChangeEvent, useState} from "react";

const {log} = console

const performIO = (io: any) => io.unsafePerformIO ? io.unsafePerformIO() : null
// myLogger - это чистая функция, нечистая - анонимная функция
const myLogger = (x: any) => new IO(() => console.log(x))
// Покажет имя юзера в консоль
const showName = R.compose(myLogger, R.prop('name'))
const composeTest = R.compose(() => log('two'), () => log('one'))

function Tests() {
    const [user, setUser] = useState({
        name: 'Ivan',
    });
    const onShowName = () => showName(user).unsafePerformIO()
    const changeName = (event: ChangeEvent<HTMLInputElement>) =>  {
        setUser({name: event.target.value})
    }

    return (
        <div>
            <input
                className="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                value={user.name}
                onChange={changeName}
            />
            <button onClick={onShowName}>show name</button>
        </div>
    )
}

export default Tests
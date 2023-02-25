import * as R from 'ramda'
import {IO} from "../core/containers";
import {user} from "../state";

const {log} = console

const perform = (io: any) => io.unsafePerformIO ? io.unsafePerformIO() : null
// myLogger - это чистая функция, нечистая - анонимная функция
const myLogger = (x: any) => new IO(() => console.log(x))
// Покажет имя юзера в консоль
const showName = R.compose(perform, myLogger, R.prop('name'))
const composeTest = R.compose(() => log('two'), () => log('one'))

user.name = 'Eugene';

function Tests() {
    const toUpper = R.map(R.toUpper)
    const onShowName = () => showName(user)

    return (
        <div>
            <button onClick={onShowName}>show name</button>
        </div>
    )
}

export default Tests
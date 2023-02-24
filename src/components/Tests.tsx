import * as R from 'ramda'

const {log} = console

function Tests() {
    log('tests');
    const toUpper = R.map(R.toUpper)
    const res = toUpper(['hello', 'world'])
    log(res)

    return (
        <div>
            tests
        </div>
    )
}

export default Tests
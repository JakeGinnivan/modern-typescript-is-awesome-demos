type LOAD_DATA = 'LOAD_DATA'
const LOAD_DATA: LOAD_DATA = 'LOAD_DATA'
type LOAD_DATA_ACTION = {
    type: LOAD_DATA
}

type Action = LOAD_DATA_ACTION

type State = {

}

const reducer = (state: State = {}, action: Action) => {
    switch (action.type) {
        default:
            state
    }
}

reducer({}, { type: LOAD_DATA })
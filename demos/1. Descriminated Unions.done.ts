type LOAD_DATA = 'LOAD_DATA'
const LOAD_DATA = 'LOAD_DATA'
type LOAD_DATA_COMPLETE = 'LOAD_DATA_COMPLETE'
const LOAD_DATA_COMPLETE = 'LOAD_DATA_COMPLETE'

type LOAD_DATA_ACTION = {
    type: LOAD_DATA
}
type LOAD_DATA_COMPLETE_ACTION = {
    type: LOAD_DATA_COMPLETE
    payload: { title: string }
}

type Action = LOAD_DATA_ACTION | LOAD_DATA_COMPLETE_ACTION

type State = {
    isLoading: boolean
    data?: string
}

const INITIAL_STATE: State = {
    isLoading: false
}

export const reducer = (state: State = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                isLoading: true
            }

        case LOAD_DATA_COMPLETE:
            return {
                isLoading: false,
                data: action.payload.title
            }

        default:
            return state
    }
}

let state: State | undefined = undefined
state = reducer(state, { type: LOAD_DATA })
state

state = reducer(state, { type: LOAD_DATA_COMPLETE, payload: { title: 'Hi Yow!'} })
state
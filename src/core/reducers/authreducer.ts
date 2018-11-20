import {
    Action,
    Reducer,
} from 'redux'

export type State = {
    readonly counter: number;
    readonly todos: ReadonlyArray<string>
}

const initState: State = {
    counter: 0,
    todos: []
    
}


const authReducer = (state = initState, action: Action) => {
    return state
}

export default authReducer
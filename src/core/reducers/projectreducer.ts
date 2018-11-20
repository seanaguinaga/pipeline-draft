import {
    Action,
    Reducer,
} from 'redux'

export type State = {
    projects: any;
}

const initState: State = {
    projects:  [
        {id: '1', title: 'help me win the lotto', content: 'yes yes yes'},
        {id: '2', title: 'give me money', content: 'yes yes yes'},
        {id: '3', title: 'yes yes yes', content: 'give me money'}
    ]    
}

const projectReducer = (state = initState, action: Action) => {
    return state
};

export default projectReducer
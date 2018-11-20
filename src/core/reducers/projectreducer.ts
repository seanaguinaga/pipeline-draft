import {
    Action,
    Reducer,
} from 'redux'

interface Project {
    id: number,
    title: string,
    content: string
}

export type State = {
    projects: Array<Project>
}

const initState: State = {
    projects:  [
        {id: 1, title: 'help me win the lotto', content: 'yes yes yes'},
        {id: 2, title: 'give me money', content: 'yes yes yes'},
        {id: 3, title: 'yes yes yes', content: 'give me money'}
    ]    
}

const projectReducer = (state = initState) => {
    return state
};

export default projectReducer
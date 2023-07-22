import * as ActionType from '../ActionType'


const initState = {
    course: [],
    loading: false,
    error: null
}


export const courseReducer = (state = initState , action) => {
    switch (action.type) {
        case ActionType.GET_DATA:
            return{
                ...state,
                course: action.payload
            }
        default :
            return state
    }
}
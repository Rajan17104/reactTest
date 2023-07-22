import * as ActionType from "../ActionType"

export const getData = () => (dispatch) => {
    fetch("  http://localhost:3005/course")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ActionType.GET_DATA, payload: data }))
        .catch((error) => console.log(error))
}
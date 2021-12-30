import {
    LOGIN,
    LOGOUT,
    SIGN_UP
} from "./actions";

const initialState = {
    auth: false,
    user: {}
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            if (action.userData[0]) {
                return {
                    ...state,
                    auth: true,
                    user: action.userData[0]
                }
            } else {

                return {
                    ...state,
                    auth: true,
                    user: action.userData
                }
            }

        case LOGOUT:
            return {
                ...state,
                auth: false
            }
        case SIGN_UP:
            return {
                ...state,
                auth: true
            }
        default:
            return state
    }
}
export default reducers;
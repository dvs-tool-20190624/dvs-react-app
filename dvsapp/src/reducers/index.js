import { LOGIN_START, LOGIN_SUCCESS } from '../actions'

const initalState = {
    logginIn: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: '',
                logginIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: ''
            };
        default:
            return state;
    }
};
export default reducer;
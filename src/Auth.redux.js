const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// reducer
export function auth(state={user:'王涛',isAuth:false},action) {
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth:true};
        case LOGOUT:
            return {...state, isAuth:false};
        default:
            return state;
    }
}

// action
function login() {
    return {type:LOGIN}
}

function logout() {
    return {type: LOGOUT}
}
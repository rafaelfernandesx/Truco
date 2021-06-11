const initialState = {
    nickname: 'Guest',
    logged: false
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_NICKNAME':
            return { ...state, nickname: action.payload.nickname }

        case 'SET_LOGGED':
            return { ...state, logged: action.payload.logged }

        default:
            return state
    }

}


export default userReducer;
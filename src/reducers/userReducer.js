const initialState = {

};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'HELLO':
            return { ...state }

        default:
            return { ...state }
    }
}
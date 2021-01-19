const initialState = {

};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'HELLO':
            return { ...state }

        default:
            return { ...state }
    }
}
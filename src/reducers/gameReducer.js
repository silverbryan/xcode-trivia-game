const initialState = {
    isLoading: true,
    questions: [],
};

function gameReducer(state = initialState, action) {
    switch (action.type) {
        case setLoading:
            return {
                ...state,
                isLoading: action.payload,
            }
        case 
        default:
            break;
    }
}
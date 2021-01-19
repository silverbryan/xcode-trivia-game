import { SET_LOADING, SET_NEW_GAME } from '../constants';
const initialState = {
    loading: true,
    errors: false,
    points: 0,
    time: 0,
    questions: [],
};

function gameReducer(state = initialState, action) {
    switch (action.type) {
        case setLoading:
            return {
                ...state,
                isLoading: action.payload,
            }
        case SET_NEW_GAME: {

        }
        default:
            break;
    }
}
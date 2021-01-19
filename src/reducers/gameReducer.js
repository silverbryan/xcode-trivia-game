import { SET_LOADING, SET_NEW_GAME, SET_FIRST_QUESTION, NEXT_QUESTION } from '../constants';

const initialState = {
    loading: true,
    errors: false,
    points: 0,
    time: 0,
    currentQuestion: {},
    questions: [],
};

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case SET_NEW_GAME:
            return {
                ...state,
                questions: action.payload.questions,
            }
        case SET_FIRST_QUESTION:
            return {
                ...state,
                currentQuestion: action.payload,
            }
        case NEXT_QUESTION:
            return {
                ...state,
                currentQuestion: state.questions.shift(),
            }
        default:
            return { ...state }
    }
}
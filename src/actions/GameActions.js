import axios from 'axios';
import {
    SET_LOADING,
    SET_NEW_GAME,
    SET_NEW_ERRORS,
    NEXT_QUESTION,
    SET_FIRST_QUESTION,
    CORRECT_OPTION,
    WRONG_OPTION,
} from '../constants';

export const newGame = username => dispatch => {
    const request = axios.post(`http://localhost:5000/api/v1/game/new`, {
        username: 'silverbryan',
        questionsNro: 5,
    });

    function setLoading(status) {
        dispatch({ type: SET_LOADING, payload: status });
    }
    function success(data) {
        dispatch({ type: SET_NEW_GAME, payload: data });
        dispatch({ type: SET_FIRST_QUESTION, payload: data.questions[0] })
    }
    function errors(err) {
        dispatch({ type: SET_NEW_ERRORS, payload: err });
    }

    setLoading(true);
    request
        .then(response => {
            success(response.data.data);
            setLoading(false);
        })
        .catch(err => errors(err));
}

export const wrongOption = () => {
    return {
        type: WRONG_OPTION,
    }
}

export const correctOption = () => {
    return {
        type: CORRECT_OPTION,
    }
}
export const nextQuestion = () => {
    return {
        type: NEXT_QUESTION,
    }
}
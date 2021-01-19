import axios from 'axios';
import { SET_LOADING, SET_NEW_GAME, SET_NEW_ERRORS } from '../constants';

export const newGame = username => dispatch => {
    const request = axios.post(`${process.env.API_URL}/game/new`, {
        username,
        questionsNro: 20,
    });

    function setLoading(status) {
        dispatch({ type: SET_LOADING, payload: status });
    }
    function success(data) {
        dispatch({ type: SET_NEW_GAME, payload: data });
    }
    function errors(err) {
        dispatch({ type: SET_NEW_ERRORS, payload: err });
    }

    setLoading(true);
    request
        .then(response => {
            const { success, data } = response.data;
            if (success) {
                success(data);
            }
            setLoading(false);
        })
        .catch(err => errors(err));
}
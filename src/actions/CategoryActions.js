import axios from 'axios';
import { SET_LOADING, SET_CATEGORIES } from '../constants';

export const getCategories = () => async dispatch => {

    function setLoading(status) {
        dispatch({ type: SET_LOADING, payload: status });
    }
    function success(data) {
        dispatch({ type: SET_CATEGORIES, payload: data });
    }

    setLoading(true);
    const response = await axios.get('http://localhost:5000/api/v1/category/all');
    success(response.data);
    setLoading(false);
}
import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducers/mainReducer';

// connect STORE to REDUCER

let store= createStore(reducer, applyMiddleware());

export default store;
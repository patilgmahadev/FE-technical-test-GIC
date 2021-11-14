import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';


const initialState = {
    employees: {
        employeeList: [],
    },
}

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
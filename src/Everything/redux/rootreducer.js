import {combineReducers} from 'redux';
import employeeReducer from './Reducer';

const rootreducer = combineReducers({
    employees: employeeReducer
})

export default rootreducer;
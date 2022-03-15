import {combineReducers} from 'redux';
// import employeeReducer from './Reducer';
import saga_employeeReducer from '../redux-saga/saga-reducer';
const rootreducer = combineReducers({
    // employees: employeeReducer
    employees: saga_employeeReducer
})

export default rootreducer;
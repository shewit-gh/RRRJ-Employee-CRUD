import {loadEmployees, loadEmployee, addEmployee, editEmployee, deleteEmployee} from './sagas';
import {GET_EMPLOYEES, GET_EMPLOYEE, ADD_EMPLOYEE, EDIT_EMPLOYEE, DEL_EMPLOYEE} from '../redux-thunk/Actiontype'
import {fork, takeLatest} from 'redux-saga/effects';


function* getempshandler(){
    yield takeLatest(GET_EMPLOYEES, loadEmployees);
};

function* getemphandler(){
    yield takeLatest(GET_EMPLOYEE, loadEmployee);
}
function* addemphandler(){
    yield takeLatest(ADD_EMPLOYEE, addEmployee);
}
function* editemphandler(){
    yield takeLatest(EDIT_EMPLOYEE, editEmployee);
}
function* deleteemphandler(){
    yield takeLatest(DEL_EMPLOYEE, deleteEmployee);
}
export default function* rootSaga(){
    yield fork(getempshandler);
    yield fork(getemphandler);
    yield fork(addemphandler);
    yield fork(deleteemphandler);
    yield fork(editemphandler);  
}
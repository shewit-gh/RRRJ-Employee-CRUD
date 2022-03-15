import {call, put} from 'redux-saga/effects';
import {getemployeeSuccess, getemployeesSuccess, addEmpSuccess, deleteEmpSuccess, editEmpSuccess} from './saga-actions'

//get all 
export function* loadEmployees(){
    try{
        const employees = yield call( async() => {const res = await fetch('http://localhost:8000/employees'); return res.json()})
        yield put(getemployeesSuccess(employees))
    }catch(err){
        console.log(err)
    }
}

//get one
export function* loadEmployee({payload:id}){
    try{
        const employee = yield call( async () =>{ const res = await fetch(`http://localhost:8000/employees/${id}`); return res.json();})
        yield put(getemployeeSuccess(employee));
    }catch(err){
        console.log(err)
    }
}

//add one
export function* addEmployee({payload}){
    try{
        const response = yield call( async() =>{ const res = await fetch('http://localhost:8000/employees',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(payload)
        } );
        return res.json();
        });
        console.log(response);
        yield put(addEmpSuccess());
    }catch(err){
        console.log(err)
    }
}

//Delete one
export function* deleteEmployee({payload:id}){
    try{
        const response = yield call(async () =>{ const res = await fetch(`http://localhost:8000/employees/${id}`, {method: 'DELETE'}); return res.json();});
        console.log(response);
        yield put(deleteEmpSuccess());
        
    }catch(err){
        console.log(err)
    }
}

//edit one
export function* editEmployee({payload:{employee, id}}){
    try{
        const response = yield call( async()=>{ const res = await fetch(`http://localhost:8000/employees/${id}`,{
            method: 'PUT',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(employee)
        } );
        return res.json();
        });
        console.log(response);
        // const employee = response.json();
        yield put(editEmpSuccess());
    }catch(err){
        console.log(err)
    }
}
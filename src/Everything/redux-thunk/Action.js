import {GET_EMPLOYEES, DEL_EMPLOYEE, ADD_EMPLOYEE, EDIT_EMPLOYEE, GET_EMPLOYEE} from "./Actiontype"


// http://localhost:8000/employees

//GET EMPLOYEES
const getemployees = (employees)=>({
    type: GET_EMPLOYEES,
    payload: employees
})

export const loadEmployees = ()=>{
    return function (dispatch){
        fetch('http://localhost:8000/employees')
        .then(res =>res.json())
        .then(data => {dispatch(getemployees(data)); console.log(data)})
        .catch(err=> console.log(err))
    }
}

//get a single employee

const getemployee = (employee)=>({
    type: GET_EMPLOYEE,
    payload: employee
})

export const loadEmployee = (id)=>{
    return function (dispatch){
        fetch(`http://localhost:8000/employees/${id}`)
        .then(res =>res.json())
        .then(data => {dispatch(getemployee(data)); console.log(data)})
        .catch(err=> console.log(err))
    }
}

const deleteEmp = ()=>({
    type: DEL_EMPLOYEE
})

export const deleteEmployee = (id)=>{
    return function(dispatch){
        fetch(`http://localhost:8000/employees/${id}`, {
            method: 'DELETE'
        } )
        .then(res=> {console.log(res); dispatch(deleteEmp()); dispatch(loadEmployees());})
        .catch(err => console.log(err))
    }
}


//Add employee
const addEmp = ()=>({
    type:ADD_EMPLOYEE
})

export const addEmployee = (employee)=>{
    return function(dispatch){
        fetch(`http://localhost:8000/employees`, {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(employee)
        } )
        .then(res=> {console.log(res); dispatch(addEmp()); })
        .catch(err => console.log(err))
    }
}


//Edit Employee
const editEmp = ()=>({
    type:EDIT_EMPLOYEE
})

export const editEmployee = (employee, id)=>{
    return function(dispatch){
        fetch(`http://localhost:8000/employees/${id}`, {
            method: 'PUT',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(employee)
        } )
        .then(res=> {console.log(res); dispatch(editEmp()); })
        .catch(err => console.log(err))
    }
}




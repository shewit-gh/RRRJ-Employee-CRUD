import * as Actiontype from  '../redux-thunk/Actiontype';

//GET EMPLOYEES
export const getemployees = ()=>({
    type: Actiontype.GET_EMPLOYEES,
})
export const getemployeesSuccess = (employees)=>({
    type: Actiontype.GET_EMPLOYEES_SUCCESS,
    payload: employees
})


//GET EMPLOYEE
export const getemployee = ()=>({
    type: Actiontype.GET_EMPLOYEE,
})
export const getemployeeSuccess = (employee)=>({
    type: Actiontype.GET_EMPLOYEE_SUCCESS,
    payload: employee
})


//DELETE EMPLOYEE
export const deleteEmp = (id)=>({
    type: Actiontype.DEL_EMPLOYEE,
    payload: id
})
export const deleteEmpSuccess = ()=>({
    type: Actiontype.DEL_EMPLOYEE_SUCCESS,
})

//ADD EMPLOYEE
export const addEmp = (employee)=>({
    type: Actiontype.ADD_EMPLOYEE,
    payload:employee
})
export const addEmpSuccess = ()=>({
    type: Actiontype.ADD_EMPLOYEE_SUCCESS,

})


//EDIT EMPLOYEE
export const editEmp = (employee, id)=>({
    type: Actiontype.EDIT_EMPLOYEE,
    payload:{employee, id}
})
export const editEmpSuccess = ()=>({
    type: Actiontype.EDIT_EMPLOYEE_SUCCESS

})


import * as AT from '../redux-thunk/Actiontype';
const initialstate ={
    employees:[],
    employee:{}
    
}

const saga_employeeReducer = (state = initialstate, action)=>{
        if (action.type === AT.GET_EMPLOYEES_SUCCESS){
            return {
                ...state,
                employees: action.payload
            }
        }else if(action.type === AT.DEL_EMPLOYEE_SUCCESS){
            return{
                ...state
            }
        }else if(action.type === AT.ADD_EMPLOYEE_SUCCESS ){
            return{
                ...state
            }
        }else if(action.type === AT.EDIT_EMPLOYEE_SUCCESS){
            return{
                ...state
            }
        }
        else if(action.type === AT.GET_EMPLOYEE_SUCCESS){
            return{
                ...state,
                employee: action.payload
            }
        }
        return state;
}


export default saga_employeeReducer;
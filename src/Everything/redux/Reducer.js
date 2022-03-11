import * as AT from './Actiontype';
const initialstate ={
    employees:[],
    employee:{}
    
}

const employeeReducer = (state = initialstate, action)=>{
        if (action.type === AT.GET_EMPLOYEES){
            return {
                ...state,
                employees: action.payload
            }
        }else if(action.type === AT.DEL_EMPLOYEE){
            return{
                ...state
            }
        }else if(action.type === AT.ADD_EMPLOYEE ){
            return{
                ...state
            }
        }else if(action.type === AT.EDIT_EMPLOYEE){
            return{
                ...state
            }
        }
        else if(action.type === AT.GET_EMPLOYEE){
            return{
                ...state,
                employee: action.payload
            }
        }
        return state;
}


export default employeeReducer;
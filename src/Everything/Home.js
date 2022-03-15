import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import '../style/home.css';
import {useDispatch, useSelector} from 'react-redux';
// import { deleteEmployee, loadEmployees} from './redux-thunk/Action';
import {getemployees,deleteEmp} from './redux-saga/saga-actions'

function Home(props) {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const {employees} = useSelector(state => state.employees)
   //loadEmployees
   useEffect(()=>{
       dispatch(getemployees());
   }, []);

   
   const edit =(id)=>{
        const employee = employees.filter(emp => emp.id === id).at(0);
        localStorage.setItem("employee", JSON.stringify(employee));
        navigate(`/editemployee/${employee.id}`)
   }
   //delete Employee
   const deletehandler =(id)=>{
        dispatch(deleteEmp(id));
        dispatch(getemployees());
   }
    return (
        <div style={{ marginTop: "100px"}}>
        <div className='top'>
            <div><p>EMPLOYEES</p></div>
            <div className='try'>
                <button className="btn btn-add" onClick={()=>{navigate('/addemployee')}}>Add</button>
                
            </div>
            
            
        </div>
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{ textAlign: "center" }}> No</th>
                    <th style={{ textAlign: "center" }}> Name</th>
                    <th style={{ textAlign: "center" }}> Gender</th>
                    <th style={{ textAlign: "center" }}> Age</th>
                    <th style={{ textAlign: "center" }}> Height</th>
                    <th style={{ textAlign: "center" }}> Action</th>
                </tr>
            </thead>
            <tbody>
                {/* maping the objects we have in database */}
                {
                   employees && employees.map((employee, index )=> {
                        return (
                                <tr key= {employee.id}>
                                    <th scope="row">
                                        {index + 1}
                                    </th>
                                    <td>{employee.First_name +` `+ employee.Last_name}</td>
                                    <td>{employee.Gender}</td>
                                    <td>{employee.Age}</td>
                                    <td>{employee.Height}</td>
                                    <td>
                                        
                                            <button className="btn btn-edit" onClick={()=>{edit(employee.id)}}>Edit</button>
                                        
                                            <button className="btn btn-delete" onClick={()=>{deletehandler(employee.id)}}>Delete</button>
            
                                        </td>
                                </tr>
                        );
                    }
                    )
                }
            </tbody>
        </table>

    </div>
    );
}

export default Home;
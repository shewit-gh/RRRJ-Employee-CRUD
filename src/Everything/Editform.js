import React, { useState, useEffect } from 'react'
import '../style/form.css'
import {Box, Flex, Button, Text} from 'rebass'
import {
    Label,
    Input,
    Radio,
  } from '@rebass/forms';
import { css, jsx } from '@emotion/react';
import{useDispatch, useSelector} from 'react-redux';
import{useNavigate, useParams} from 'react-router-dom';
// import { editEmployee, loadEmployee } from './redux-thunk/Action';
import {editEmp} from './redux-saga/saga-actions'

function Editform(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {empId} = useParams();
    // const {employee} = useSelector(state => state.employee);
    const employee = JSON.parse(localStorage.getItem("employee"))
    
    const [check, setcheck]=useState( employee.Gender ==='Male'? {Male:true, Female:false}:{Male:false, Female:true})
    const [First_name, setfname]=useState(employee.First_name)
    const [Last_name, setlname]=useState(employee.Last_name)
    const [Gender, setgender]=useState(employee.Gender)
    const [Age, setage]=useState(employee.Age)
    const [Height, setheight]=useState(employee.Height)

    const submithandler =  (e)=>{
        e.preventDefault();
        if(!First_name || !Last_name || !Gender || !Age || !Height){
            window.confirm("please enter all the required fields")
        }else{
            const emp = {First_name,Last_name,Gender,Age,Height};
            dispatch(editEmp(emp, empId));
            navigate('/');
        }
        
    }

    return(
        <div className='form'>
            
            <Button  onClick={()=>{navigate('/')}}
                css={css`
                margin-bottom:4%;
                margin-left:3%;
                width: 100px;
                background-color: rgb(0, 162, 255);
                border-radius:8px;
                &:hover {
                background-color: rgba(0, 162, 255, 0.7);
                }
              `}
            >Back</Button>
            
            <Box
                css ={css`
                border-radius: 10px;
                box-shadow: 0 0 20px rgba(0,0,0,0.15);
                `}
            as='form'
            onSubmit={submithandler}
            py={3}>
            <Box css ={css`margin:5%`}>
                <Flex mb={3} mx={2}>
                    <Box width={1/3}>
                    <Label htmlFor='Fname' py={2}>First Name</Label>
                    <Input
                        id='Fname'
                        name='Fname'
                        value={First_name}
                        onChange ={(e)=>{setfname(e.target.value)}}
                    />
                    </Box>
                    <Box width={1/3} mx={5}>
                    <Label htmlFor='Lname' py={2}>Last Name</Label>
                    <Input
                        id='Lname'
                        name='Lname'
                        value={Last_name}
                        onChange ={(e)=>{setlname(e.target.value)}}
                    />
                    </Box>
                </Flex>
                <Flex mx={2}>
                <Box width={1/3} >
                    <Label htmlFor='age' py={2}>Age</Label>
                    <Input
                        id='age'
                        name='age'
                        value={Age}
                        onChange ={(e)=>{setage(parseInt(e.target.value) || 0)}}
                    />
                    </Box>
                    <Box width={1/3} mx={5} >
                    <Label htmlFor='height' py={2}>Height</Label>
                    <Input
                        id='height'
                        name='height'
                        value={Height}
                        onChange ={(e)=>{setheight(parseInt(e.target.value) || 0)}}
                    />
                    </Box>
                    </Flex>
                <Flex 
                    css={css 
                    `margin-top:4%; flex-wrap:wrap;`
                    }>
                    <Label width={[ 1/2, 1/4 ]} p={2}>
                    <Radio
                        id='F'
                        name='gender'
                        value='Female'
                        checked= {check.Female}
                        onChange ={(e)=>{setgender(e.target.value);setcheck({Male:false, Female:true})}}
                    />
                    Female
                    </Label>
                    <Label width={[ 1/2, 1/4 ]} p={2}>
                    <Radio
                        id='M'
                        name='gender'
                        value='Male'
                        checked = {check.Male}
                        onChange ={(e)=>{setgender(e.target.value); setcheck({Male:true, Female:false})}}
                    />
                    Male
                    </Label>
                    
                </Flex>
            </Box>
            <Box>
                <Button 
                    css={css `
                    color:white;
                    font-size:2;
                    margin-left:40%;
                    margin-top:2%;
                    width:100px;
                    border-radius:8px;
                    background-color:rgb(0, 162, 255);
                    &:hover {
                        background-color: rgba(0, 162, 255, 0.7);
                        }
                    `}
                    type='submit'
                    onClick={submithandler}
                    >
                    Submit
                </Button>
                </Box>
            </Box>
      </div>
    );
}

export default Editform;
import React, { useState, useEffect } from 'react'
import '../style/form.css'
import {Box, Flex, Button, Text} from 'rebass'
import {
    Label,
    Input,
    Radio,
  } from '@rebass/forms';
import{useDispatch, useSelector} from 'react-redux';
import{useNavigate, useParams} from 'react-router-dom';
import { editEmployee, loadEmployee } from './redux/Action';


function Editform(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {empId} = useParams();
    // const {employee} = useSelector(state => state.employee);
    const employee = JSON.parse(localStorage.getItem("employee"))
    
    const [check, setcheck]=useState( employee.Gender ==='Male'? {Male:true, Female:false}:{Male:false, Female:false})
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
            dispatch(editEmployee(emp, empId));
            navigate('/');
        }
        
    }

    // useEffect(()=>{
    //     dispatch(loadEmployee(empId))
    // },[])
    // useEffect(()=>{
    //    if(employee){
    //         setfname(employee.First_name)
    //         setlname(employee.Last_name)
    //         setage(employee.Age)
    //         setheight(employee.Height)
    //         employee.Gender ==='Male'? setcheck({Male:true, Female:false}):setcheck({Male:false, Female:false})
    //    }
    //  },[employee])
    return(
        <div className='form'>
            
            <Button  onClick={()=>{navigate('/')}}
                sx={{ 
                backgroundColor:'blue'}}>
                    Back
            </Button>
            
            <Box
            sx={{ 
                backgroundColor:'white',
                borderRadius:10
            }}
            
            as='form'
            onSubmit={submithandler}
            py={3}>
            <Text
                sx={{
                    marginBottom:10
                }}
                px={2}
            >
                Employee Detail <span sx={{color:'red'}}>*</span>
            </Text>
            <Flex mb={3}>
                <Box width={1/2} px={2} >
                <Label htmlFor='Fname' py={2}>First Name</Label>
                <Input
                    id='Fname'
                    name='Fname'
                    value={First_name}
                    onChange ={(e)=>{setfname(e.target.value)}}
                />
                </Box>
                <Box width={1/2} px={3}>
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
            <Box width={1/4} >
                <Label htmlFor='age' py={2}>Age</Label>
                <Input
                    id='age'
                    name='age'
                    value={Age}
                    onChange ={(e)=>{setage(parseInt(e.target.value))}}
                />
                </Box>
                <Box width={1/4} mx={5} >
                <Label htmlFor='height' py={2}>Height</Label>
                <Input
                    id='height'
                    name='height'
                    value={Height}
                    onChange ={(e)=>{setheight(parseInt(e.target.value))}}
                />
                </Box>
                </Flex>
            <Flex  flexWrap='wrap'>
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
            <Box px={2} ml='auto'>
                <Button 
                type='submit'
                    sx={{
                        ':hover':{
                        backgroundColor: 'tomato',
                        },
                    color: 'white', 
                    fontSize: 2,      
                    margin: 3,  
                    backgroundColor:'ActiveCaption'      
                    }}
                >
                    Submit
                </Button>
                </Box>
            </Box>
      </div>
    );
}

export default Editform;
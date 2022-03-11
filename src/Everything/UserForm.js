import React, { useState } from 'react'
import '../style/form.css'
import {Box, Flex, Button, Text} from 'rebass'
import {
    Label,
    Input,
    Radio,
  } from '@rebass/forms';

import{useDispatch} from 'react-redux';
import{useNavigate} from 'react-router-dom';
import { addEmployee } from './redux/Action';




function Userform(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [First_name, setfname]=useState('')
    const [Last_name, setlname]=useState('')
    const [Gender, setgender]=useState('')
    const [Age, setage]=useState('')
    const [Height, setheight]=useState('')

    const submithandler =  (e)=>{
        e.preventDefault();
        if(!First_name || !Last_name || !Gender || !Age || !Height){
            window.confirm("please enter all the required fields")
        }else{
            const emp = {First_name,Last_name,Gender,Age,Height}
            dispatch(addEmployee(emp))
            console.log(emp);

            setfname("");
            setlname("");
            setage('');
            setheight('');
        }
        
    }
    // const [employee, setEmployee]= useState({
    //     First_name: "",
    //     Last_name: "",
    //     Gender:"",
    //     Age: 0,
    //     Height: 0
    // })
    // const {First_name,Last_name,Age,Height}= employee
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
                    checked= {false}
                    onChange ={(e)=>{setgender(e.target.value)}}
                />
                Female
                </Label>
                <Label width={[ 1/2, 1/4 ]} p={2}>
                <Radio
                    id='M'
                    name='gender'
                    value='Male'
                    checked = {false}
                    onChange ={(e)=>{setgender(e.target.value)}}
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

export default Userform;
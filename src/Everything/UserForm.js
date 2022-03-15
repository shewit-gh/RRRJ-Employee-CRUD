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
// import { addEmployee } from './redux-thunk/Action';
import {addEmp} from './redux-saga/saga-actions';



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
            dispatch(addEmp(emp))
            console.log(emp);

            setfname("");
            setlname("");
            setage('');
            setheight('');
        }
        
    }
    
    return(
        <div className='form'>
            
            <Button  onClick={()=>{navigate('/')}}
                sx={{
                    ':hover':{
                        backgroundColor: 'rgba(0, 162, 255, 0.7)',
                        },
                    backgroundColor:'rgb(0, 162, 255)',
                    marginBottom: 4,
                    marginLeft:3,
                    borderRadius:8,
                    width:'100px'

                }}>
                    Back
            </Button>
            
            <Box
            sx={{ 
                borderRadius:10,
                boxShadow:'0 0 20px rgba(0,0,0,0.15)'
            }}
            
            as='form'
            onSubmit={submithandler}
            py={3}>
            <Box sx={{
                    margin:'5%'
            }}>
                <Flex mb={3} mx={2}>
                    <Box width={1/3}  >
                    <Label htmlFor='Fname' py={2}>First Name <Text color={'red'}>*</Text></Label>
                    <Input
                        id='Fname'
                        name='Fname'
                        value={First_name}
                        onChange ={(e)=>{setfname(e.target.value)}}
                    />
                    </Box>
                    <Box width={1/3} mx={5}>
                    <Label htmlFor='Lname' py={2}>Last Name <Text color={'red'}>*</Text> </Label>
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
                    <Label htmlFor='age' py={2}>Age <Text color={'red'}>*</Text></Label>
                    <Input
                        id='age'
                        name='age'
                        value={Age}
                        onChange ={(e)=>{setage(parseInt(e.target.value) || '')}}
                    />
                    </Box>
                    <Box width={1/3} mx={5} >
                    <Label htmlFor='height' py={2}>Height <Text color={'red'}>*</Text></Label>
                    <Input
                        id='height'
                        name='height'
                        value={Height}
                        onChange ={(e)=>{setheight(parseInt(e.target.value) || '')}}
                    />
                    </Box>
                    </Flex>
                <Flex  flexWrap='wrap' marginTop={4}>
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
            </Box>
            <Box >
                <Button 
                type='submit'
                    sx={{
                        ':hover':{
                        backgroundColor: 'rgba(0, 162, 255, 0.7)',
                        },
                    color: 'white', 
                    fontSize: 2,      
                    marginLeft:'40%',
                    marginTop:'2%',
                    width:'100px', 
                    borderRadius:'8px',
                    backgroundColor:'rgb(0, 162, 255)'      
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
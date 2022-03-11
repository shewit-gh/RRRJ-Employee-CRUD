
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Editform from './Everything/Editform';
import Home from './Everything/Home';
import Userform from './Everything/UserForm';


function App(props) {
  return (
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/addemployee' element ={<Userform/>} />
      <Route path='/editemployee/:empId' element ={<Editform/>} />

    </Routes>
  );
}

export default App;

import './App.css';
//import { Login,} from './components/Login';
//import { Signup } from './components/Signup';
import React, { useState,useEffect } from "react";
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import Login from './components/Login';
import  Signup  from './components/Signup';
import HomePage from './components/HomePage';
import Club from './components/Club/Club';
import Createclub from './components/Club/Createclub'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <div className="App">
      
    {
      loading ?
      <ClimbingBoxLoader
      color={"#000000"}
      loading={loading}
      size={35}
    />
   
      :
    <Router>
      <Routes>
        
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path='/createclub' element={<Createclub/>}/>
        <Route path='/club' element={<Club/>}/>
      </Routes>  
      
    
    </Router>
        }
        </div>
  );
}

export default App;

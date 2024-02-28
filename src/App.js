// import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Textform from './componets/Textform';
import About from './componets/About';
import React, { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';


function App() {
 let  [mode, setMode] = useState('light');


 

 const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    
   
  }
 }
  return (
   <>
 <Navbar title ="TexTyle" mode={mode} toggleMode={toggleMode}/>
 
 <div className="container">
 
 <Routes>
 <Route path="/" element={<Textform heading="Enter text "/>}/>
 <Route path="/About" element={<About/>}/>

 </Routes>
 
 </div>
 </>
  );
}

export default App;

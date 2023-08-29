import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null)

  const showAlert =(message, type) =>{
      setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled", "success");
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light  mode has been Enabled", "success");
    }
    }
  

  return(
  <>
{/* <Navbar title = "TextUtils" aboutText="About TextUtils"/> */}
{/* <Navbar/> */}
{/* <Router> */}
<Navbar title= "TextUtils" mode = {mode} toggleMode = {toggleMode} />
<Alert alert = {alert}/>
<div className="container my-3">
  {/* <Routes>
  <Route exact path='/' element={
<TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode}/>

  }></Route>
  <Route exact path='/about' element={< About />}></Route>
  </Routes> */}
  <TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
{/* <About/> */}
</div>
{/* </Router> */}
</>
  );
  }


export default App;

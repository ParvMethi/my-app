import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type,
      })

      setTimeout(()=>{
          setAlert(null);
      },1500)
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled", "success");
    }
    else{
        setMode('light');
        showAlert("Light mode has been enabled", "success");
        document.body.style.backgroundColor = 'white';
       
   }
  
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/about"
          element={<About/>}>
        </Route>
          <Route exact path="/"element=
          {<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

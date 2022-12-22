import React from "react";
import Home from "./Home";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Form from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {



  return (

    
  <BrowserRouter>
    <Routes>
      <Route exact path = "/login" element={ <Login />} />
      <Route exact path = "/" element={ <Home />} />
      <Route exact path = "/signup" element={ <Form />}/>
    </Routes>
  </BrowserRouter>
  
    );
}

export default App;

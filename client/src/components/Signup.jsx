import React, {useEffect, useState} from "react";
import Validation from "./Validation";
import Axios from "axios";

const API_BASE = "http://localhost:3001";


  function Signup({submitForm}) {

    const [values, setValues] = useState({
      fname:"",
      surname:"",
      email:"",
      password:"",
      confirmpassword:""
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]:event.target.value,
      })
    }


    const handleFormSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation(values));
      setDataIsCorrect(true);
    };

    useEffect(() =>{
      if(Object.keys(errors).length === 0 && dataIsCorrect){
        addUser(values);
        submitForm(true);
        
      }

    }, [errors]);


    const addUser =  async (values) => {
      const user = await Axios.post(API_BASE + "/user/new", {
    
        fname:values.fname,
        surname:values.surname,
        email:values.email,
        password:values.password,
        confirmpassword:values.confirmpassword    
        
          }).then(res => res.data)
       
    };

    

   

    return (
     
    
        <div >
        <h1 className="login_greeting">Sign Up!</h1>
        <form >
        <input  name = "fname" value = {values.fname} onChange={handleChange} type="text"  className = "login_input" placeholder="Name" />
        {errors.fname && <p className = "error" style={{color:"white"}}>{errors.fname} </p>}
     
        <input name = "surname" value = {values.surname} onChange={handleChange}  type="text"  className = "login_input" placeholder="Last Name" />
        {errors.surname && <p className = "error" style={{color:"white"}}>{errors.surname} </p>}

        <input name = "email" value = {values.email} onChange={handleChange}   type="text"   className = "login_input" placeholder="email" />
        {errors.email && <p className = "error" style={{color:"white"}}>{errors.email} </p>}

        <input name = "password" value = {values.password} onChange={handleChange}  type="text"    className = "login_input" placeholder="password"  />
        {errors.password && <p className = "error" style={{color:"white"}}>{errors.password} </p>}
      
        <input name = "confirmpassword" value = {values.confirmpassword} onChange={handleChange} type="text"   className = "login_input" placeholder="confirm password"  />
        {errors.confirmpassword && <p className = "error" style={{color:"white"}}>{errors.confirmpassword} </p>}
      

        <button className="login_button" onClick={handleFormSubmit}>Sign In </button>

      
        </form>
        </div>
    
        
    );
   
     
    
      
  };


export default Signup;
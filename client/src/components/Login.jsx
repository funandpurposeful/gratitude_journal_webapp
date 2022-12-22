import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";




function Login() {

  const [user, setUser] = useState({
    email:"",
    password:""
  });

  const [incorrectpassword, setPassword] = useState(false);

  const [accountExists, setAccount] = useState(true);



  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]:event.target.value,
    })
  }

  let navigate = useNavigate();

  const checkPresenceInDB = (user) => {
    Axios.get("http://localhost:3001/users").then((response) => {
       //Find email of specific object using findIndex method. 
       const dataFetched = response.data;

        

        if (dataFetched.some(obj => obj.email === user.email)) {

          const relIndex = dataFetched.findIndex((obj => obj.email === user.email));

          if (response.data[relIndex]["password"] === user.password) {
            navigate('/'); 
          } else {
            setPassword(true);
            alert("Incorrectly entered password")
          }
        } else  {
          alert("No account registered");
          navigate('/signup');
        }
    });

  };










const handleFormSubmit = (event) => {
    event.preventDefault();
    checkPresenceInDB(user);
    
 
  };


    return (
        <div>
        <h1 className="login_greeting">Hello!</h1>
        <form>
        <input type = "email" name = "email" value = {user.email} onChange = {handleChange}  className = "login_input" placeholder="email"  />
        <input type = "password" name = "password" value = {user.password} onChange = {handleChange} className = "login_input" placeholder="password" />
        <button className="login_button" onClick={handleFormSubmit}>Login</button>
        </form>
        
        <p><Link className = "registrationLink"  to="/signup">Don't have an account? Sign up here!</Link></p>
        </div>
    );
   
     
      
  };

export default Login;




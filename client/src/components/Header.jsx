import React from "react";
import Navbar from "./Navbar";



function Header() {



    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const date = new Date().getDate();
    const m = new Date();
    const year = new Date().getFullYear();
    const time = new Date().getHours();

 

    const month = months[m.getMonth()];

  

  



    return(
    <div>
    
        <header className="wrapper">
        <h2 className = "date">{month}, {date}, {year}</h2>
        <h1 className = "greeting">{time < 18 && time >12 ? "Good Afternoon!" : (time > 18) ? "Good Evening!" : "Good Morning!" }</h1>
        <h2 className = "logo">My bulletpoint journal</h2>
        <Navbar />
        </header>
        
      
        
        
        
        
      </div>
      );
    }

export default Header;
import React from "react";
import { Link } from "react-router-dom";

const SignUpFormSuccess = () => {
    return (
        <div className = "success_container">
            <div className = "app-wrapper">
                <h1 className = "form-success">Account Created!</h1>
                <p><Link className = "registrationLink"  to="/">Happy journaling!</Link></p>
                
            </div>


        </div>
    );
};

export default SignUpFormSuccess;
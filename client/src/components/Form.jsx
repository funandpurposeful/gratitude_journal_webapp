import React, { useState } from "react";
import Signup from "./Signup";
import SignUpSuccess from "./SignUpSuccess";


const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);

    };
    return (
        <div>
        {!formIsSubmitted ? <Signup submitForm = {submitForm}/> : <SignUpSuccess/>}

        </div>
    );

};

export default Form;
const Validation = (values) => {
    let errors={};

    if(!values.fname){
        errors.fname="Name is required!"
    }
    if(!values.surname){
        errors.surname="Surname is required!"
    }
    if(!values.email){
        errors.email="Email is required!"

    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid!"
    }
    if(!values.password){
        errors.password="Password is required!"
    } else if (values.password.length < 8){
        errors.password="Password must be at least 8 characters long!"
    }
    if (!values.confirmpassword){
        errors.confirmpassword="Please, confirm your password!"

    } else if (values.password !== values.confirmpassword){
        errors.confirmpassword="Passwords should match!"
    }

    return errors;

};

export default Validation;

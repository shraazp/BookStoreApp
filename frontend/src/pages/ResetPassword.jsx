import React from 'react';
import {useForm} from "../components/UseForm";
import userPost from '../service/userRegister'
import '../styles/login.css'
const Reset = () => {
    const initialFValues = {
        password: "",
        confirmp:""
    }
    const validate = (fieldValues = values) => {
        let temp = {
            ...errors
        }
        if ('password' in fieldValues) {
            temp.password = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(fieldValues.password) ? "" : "Minimum 8 characterss required."
        }
        if ('confirmp' in fieldValues) {
            temp.confirmp = fieldValues.confirmp===values.password ? "" : "Should match with the password given"
        }
        setErrors({
            // eslint-disable-next-line
            ... temp
        })
        if (fieldValues === values) 
            return Object.values(temp).every(x => x === "")
    }
    const {values, errors, setErrors, handleInputChange} = useForm(initialFValues, true, validate);
    const data = {
        password: values.password
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
           userPost(`users/${window.location.pathname}`,data);
           alert("Succefully reset password")
           window.location="/"
        }
    }
    return (
        <section>
            <div class="container">
                <div class="user signinBx">

                    <div class="formBx">

                        <form onSubmit={handleSubmit}>
                            <div className="heading-book">
                                <h1>Bookstore</h1>
                            </div>
                            <h2>Reset password</h2>
                            <input type="password" placeholder="Password" name="password"
                                className={
                                    errors.password ? 'redBorder' : 'border-default'
                                }
                                onChange={handleInputChange}
                                value={
                                    values.password
                                }
                                required/>
                            <span>{
                                errors.password
                            }</span>
                            
                            <input type="password" placeholder="Confirm" name="confirmp"
                                className={
                                    errors.confirmp ? 'redBorder' : 'border-default'
                                }
                                onChange={handleInputChange}
                                value={
                                    values.confirmp
                                }
                                required/>
                            <span>{
                                errors.confirmp
                            }</span>
                           
                            <div className="login-button">
                             
                                <button class="mbtn blue"
                                    onChange={handleSubmit}>Next</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reset

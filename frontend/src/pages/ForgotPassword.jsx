import React from 'react';
import {useForm} from "../components/UseForm";
import userPost from '../service/userRegister'
import '../styles/login.css'
const ForgotPassword = () => {
    const initialFValues = {
        email: ""
    }
    const validate = (fieldValues = values) => {
        let temp = {
            ...errors
        }
        if ('email' in fieldValues) 
            temp.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(fieldValues.email) ? "" : "Email is not valid."

        setErrors({
            // eslint-disable-next-line
            ... temp
        })
        if (fieldValues === values) 
            return Object.values(temp).every(x => x === "")
    }
    const {values, errors, setErrors, handleInputChange} = useForm(initialFValues, true, validate);
    const data = {
        email: values.email
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            userPost('users/forgot', data).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
        
    }
    return (
        <section >
            <div class="container">
                <div class="user signinBx">
                    <div class="formBx">
                        <form class="forgot" onSubmit={handleSubmit}>
                            <div className="heading-book">
                                <h1>Bookstore</h1>
                            </div>
                            <h2>Forgot Password</h2>
                            <input type="text"
                                className={
                                    errors.email ? 'redBorder' : 'border-default'
                                }
                                name="email"
                                placeholder="Email"
                                onChange={handleInputChange}
                                value={
                                    values.email
                                }
                                required/>
                            <span>{
                                errors.email
                            }</span>
                           
                            <div className="login-button">
                                <a href="/">Back.</a>
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

export default ForgotPassword;

import React from 'react';
import {useForm} from "../components/UseForm";
import userPost from '../service/userRegister'
import '../styles/login.css'
const LoginForm = () => {
    const initialFValues = {
        email: "",
        password: ""
    }
    const validate = (fieldValues = values) => {
        let temp = {
            ...errors
        }
        if ('email' in fieldValues) 
            temp.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('password' in fieldValues) {
            temp.password = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(fieldValues.password) ? "" : "Minimum 8 characterss required."
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
        email: values.email,
        password: values.password
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            userPost('users/login', data).then((res) => {
                console.log(res)
                window.location="/dashboard"
            }).catch((err) => {
                console.log(err)
            })
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
                            <h2>Sign In</h2>
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
                            }<br/></span>
                            <div className="forgot-password">
                                <a href="forgot">forgot password?</a>
                            </div>
                            <div className="login-button">
                                <a href="/create">Sign Up.</a>
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

export default LoginForm;

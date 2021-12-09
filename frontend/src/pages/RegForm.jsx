import React from 'react';
import {useForm} from "../components/UseForm";
import userPost from '../service/userRegister'
import '../styles/login.css'

const RegForm = () => {
    const initialFValues = {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber:"",
        password: "",
    }
    const validate = (fieldValues = values) => {
        let temp = {
            ...errors
        }
        if ('firstname' in fieldValues) 
            temp.firstname = fieldValues.firstname ? "" : "This field is required."
        if ('lastname' in fieldValues) 
            temp.lastname = fieldValues.lastname ? "" : "This field is required."
        if ('email' in fieldValues) 
            temp.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(fieldValues.email) ? "" : "Email is not valid."
        if('phoneNumber' in fieldValues)
            temp.phoneNumber=(/^[1-9][0-9]{9}$/).test(fieldValues.phoneNumber)?"":"phone number should consists of 10 digits."
        if ('password' in fieldValues) 
            temp.password = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(fieldValues.password) ? "" : "Minimum 8 characterss required."
        setErrors({
            // eslint-disable-next-line
            ... temp
        })
        if (fieldValues === values) 
            return Object.values(temp).every(x => x === "")
        
    }
    const {
        values,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFValues,true,validate);
    const data={firstName:values.firstname,lastName:values.lastname,password:values.password,email:values.email,phoneNumber:values.phoneNumber}

    const handleSubmit = e => {
        console.log(data)
        e.preventDefault()
        if (validate()) {
           userPost('users',data).then((res) => {
            console.log(res)
            window.location="/"
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
                            <h2>Create an account</h2>
                            <input type="text"
                                className={
                                    errors.firstname ? 'redBorder' : 'border-default'
                                }
                                name="firstname"
                                placeholder="firstname"
                                onChange={handleInputChange}
                                value={
                                    values.firstname
                                }
                                required/>
                            <span>{
                                errors.firstname
                            }</span>
                             <input type="text"
                                className={
                                    errors.lastname ? 'redBorder' : 'border-default'
                                }
                                name="lastname"
                                placeholder="lastname"
                                onChange={handleInputChange}
                                value={
                                    values.lastname
                                }
                                required/>
                            <span>{
                                errors.lastname
                            }</span>
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
                             <input type="number"
                                className={
                                    errors.phoneNumber ? 'redBorder' : 'border-default'
                                }
                                name="phoneNumber"
                                placeholder="phoneNumber"
                                onChange={handleInputChange}
                                value={
                                    values.phoneNumber
                                }
                                required/>
                            <span>{
                                errors.phoneNumber
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
                            }</span>
                             
                            <div className="login-button">
                                <a href="/">Sign in.</a>
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
export default RegForm;

import React from 'react';
import LoginForm from './pages/Login';
import RegForm from './pages/RegForm';
import ForgotPassword from './pages/ForgotPassword';
import Reset from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';


import {BrowserRouter, Route} from "react-router-dom"
const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact><LoginForm/></Route>
            <Route path="/create"><RegForm/></Route>
            <Route path="/forgot"><ForgotPassword/></Route>
            <Route path="/reset"><Reset/></Route>
            <Route path="/dashboard"><Dashboard/></Route>
        </BrowserRouter>
    );
};

export default App;

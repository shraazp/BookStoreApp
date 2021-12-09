
import LoginForm from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"

export default function Routers() {
    return (
        <Routes>
        <Route path="/" exact>
            <LoginForm/></Route>
        <Route path="/forgot"><ForgotPassword/></Route>
    </Routes>
    )
}
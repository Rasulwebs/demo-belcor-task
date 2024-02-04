import React from 'react';
import styled from "./styleLogin.module.css"
import FormLogin from './components/formLogin/FormLogin';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            Login
            <FormLogin />

            or <Link to={"/register"}>Register</Link>
        </div>
    );
};

export default Login;
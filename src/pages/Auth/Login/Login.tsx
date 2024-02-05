import React, { useEffect } from 'react';
import styled from "./styleLogin.module.css"
import FormLogin from './components/formLogin/FormLogin';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '@/hooks/useUser';
 export const Login = () => {
    const { isAuth } = useUser()
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuth) {
            return navigate("/")
        }
    },[isAuth])
    return (
        <div>
            Login
            <FormLogin />

            or <Link to={"/register"}>Register</Link>
        </div>
    );
};


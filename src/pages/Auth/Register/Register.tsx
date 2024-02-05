import React, { FC, useEffect } from 'react';
import styled from "./styleRegister.module.css"
import FormRegister from './components/formRegister/FormRegister';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '@/hooks/useUser';
export const Register: FC = () => {
    const { isAuth } = useUser()
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuth) {
            return navigate("/")
        }
    }, [isAuth])
    return (
        <div>
            Register
            <div className={styled.registerFormWrapper}>

                <FormRegister />
                <br /> <hr /><br />
                or <Link to={"/login"}>Login</Link>
            </div>
        </div>
    );
};

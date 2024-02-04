import React, { FC } from 'react';
import styled from "./styleRegister.module.css"
import FormRegister from './components/formRegister/FormRegister';
import { Link } from 'react-router-dom';
const Register: FC = () => {
    return (
        <div>
            Register
            <FormRegister />
            or <Link to={"/login"}>Login</Link>
        </div>
    );
};

export default Register;
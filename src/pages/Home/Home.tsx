import React, { useEffect } from 'react';
import styled from "./styleHome.module.css"
import { UserTypes } from '@/types/userTypes';
import { useAuth } from '@/hooks/auth/use-auth';
import { redirect, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { removeUser } from '@/store/userSlice/userSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import useUser from '@/hooks/useUser';
const Home = () => {
    const { isAuth } = useUser()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    console.log(isAuth)
    useEffect(() => {
        if (!isAuth) {
            return navigate("/login")
        }
    })
    return (
        <div>
            Home
            <Button onClick={() => {
                dispatch(removeUser())
            }}>Log Out  </Button>
        </div>
    );
};

export default Home;
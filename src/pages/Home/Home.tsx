import React, { useEffect } from 'react';
import styled from "./styleHome.module.css"
import { UserTypes } from '@/types/userTypes';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Layout } from 'antd';
import { removeUser } from '@/store/userSlice/userSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import useUser from '@/hooks/useUser';
import { useQuery } from 'react-query';
import { QuizService } from '@/services/quiz.service';
import { addNotificationAxios } from '@/utils/addNotification';
import { Link } from 'react-router-dom';
import { setAllQuizData } from '@/store/quizSlice/quizSlice';
import { NavLink } from 'react-router-dom';
import { BarChartOutlined } from "@ant-design/icons"


export const Home = () => {
    const { isAuth } = useUser()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isAuth) {
            return navigate("/login")
        }
    }, [isAuth])

    const { data: quizSubject, isLoading: getAllQuizSubjectLoading } = useQuery({
        queryKey: ["getQuizSubject"],
        queryFn: () => QuizService.getAllQuizSubject(),
        onError: addNotificationAxios,
    });
    return (
        <div>
            <Layout.Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: "10px",
                    color: "#fff",
                    justifyContent: "space-between"
                }}
            ><h3>QuizAPP</h3>
                <NavLink to={"/results"} ><Button icon={<BarChartOutlined />}>Results</Button></NavLink></Layout.Header>

            <div style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                {
                    quizSubject?.map((el, i) => {
                        return <div key={i}>
                            <Link to={`/quizes/${el?.subject}`} key={i}>
                                <Card key={i} onClick={() => {
                                    dispatch(setAllQuizData(el))
                                }} size='small' className={styled.quizSubjectCard}
                                    loading={getAllQuizSubjectLoading}>
                                    {el?.subject}
                                </Card>
                            </Link>
                        </div>
                    })
                }


                <Button onClick={() => {
                    dispatch(removeUser())
                }}>Log Out  </Button>
            </div>





        </div>
    );
};

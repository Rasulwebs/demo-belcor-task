import React, { FC, useEffect, useState } from 'react';
import { QuizService } from '@/services/quiz.service';
import { addNotificationAxios } from '@/utils/addNotification';
import { Button, Card, Radio, RadioChangeEvent, Space } from 'antd';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { QuizTypes } from '@/types/quizTypes';
import styled from "./styleQuizPage.module.css"
import { setCorrectAnswers, setNumberAnswers } from '@/store/quizSlice/quizSlice';

export const Quiz: FC = () => {
    const { subject } = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const numberQuestion = useAppSelector<number>((state) => state.quiz.numberQuestion)
    const correctAnswers = useAppSelector<number>((state) => state.quiz.correctAnswers)
    const isOpenResultsModal = useAppSelector<boolean>((state) =>
        state.quiz.isOpenResultsModal)
    const userString = localStorage.getItem("user")
    const user = JSON.parse(userString as string)

    const [oneQuestionData, setOneQuestionData] =
        useState<QuizTypes.QuizOptions | undefined>()
    const [ansewer, setAnswer] =
        useState<string>("")
    // const { data: quizData, isLoading: getAllQuizDataLoading } = useQuery({
    //     queryKey: ["getQuizData"],
    //     queryFn: () => QuizService.getAllQuizData(subject as string),
    //     onError: addNotificationAxios,
    // });

    const { data: quizSubject, isLoading: getAllQuizSubjectLoading } = useQuery({
        queryKey: ["getQuizSubject"],
        queryFn: () => QuizService.getAllQuizSubject(),
        onError: addNotificationAxios,
    });

    const { mutate: editUserAnswrs,
        isLoading: putCorrectAnswersLoading } = useMutation({
            mutationFn: (correctAnswer: number) =>
                QuizService.putCorrectAnswers(user?.id, correctAnswer),
            onSuccess: () => {

            },
            onError: addNotificationAxios,

        });

    useEffect(() => {
        const oneQuestion = quizSubject?.find((el) => el?.subject === subject)?.options[numberQuestion || 0]
        setOneQuestionData(oneQuestion)
        // console.log(oneQuestion)
        // console.log(numberQuestion)
        // console.log(subject)
        // console.log(quizSubject)

    }, [numberQuestion, oneQuestionData])

    const handleNextStepQuestion = () => {
        if (numberQuestion >= 4) {
            dispatch(setNumberAnswers(0))
        } else {
            dispatch(setNumberAnswers(numberQuestion + 1))
        }
    }

    const handleBackStepQuestion = () => {
        if (numberQuestion >= 4) {
            dispatch(setNumberAnswers(0))
        } else {
            dispatch(setNumberAnswers(numberQuestion - 1))
        }
    }

    const handleChangeAnswer = (e: RadioChangeEvent) => {
        setAnswer(e.target.value)
        if (oneQuestionData?.correct === e.target.value) {
            dispatch(setCorrectAnswers(correctAnswers + 1))
        }
        console.log(e.target.value)
        console.log(oneQuestionData?.correct)
    }

    const handleSubmitAnswers = () => {
        editUserAnswrs(correctAnswers)
    }

    // console.log(correctAnswers)
    return (
        <>
            <Button onClick={() => { navigate("/") }}>Home</Button>
            <div className={styled.quizCardWrapper}>
                {/* {(quizSubject?.find((el) => el?.subject === subject))?.
                    options?.map((el, i) => {
                        return <>
                            <Card style={{}}
                                key={i}>{el?.question}</Card>
                        </>


                    })} */}

                <Card style={{}}
                    key={numberQuestion}>{oneQuestionData?.question}
                    <div>
                        <Radio.Group onChange={handleChangeAnswer} value={ansewer}>
                            <Space direction="vertical">

                                <Radio value={oneQuestionData?.a}>{oneQuestionData?.a}</Radio>
                                <Radio value={oneQuestionData?.b}>{oneQuestionData?.b}</Radio>
                                <Radio value={oneQuestionData?.c}>{oneQuestionData?.c}</Radio>
                            </Space>
                        </Radio.Group>
                    </div>

                </Card>

                <Button disabled={Boolean(numberQuestion >= 4)} onClick={() => {
                    handleNextStepQuestion()
                }}>NEXT
                    {numberQuestion + 1}/{quizSubject?.find((el) =>
                        el?.subject === subject)?.options?.length}</Button>
                <Button disabled={Boolean(numberQuestion === 0)} onClick={() => { handleBackStepQuestion() }}>Back</Button>

                {Boolean(numberQuestion >= 4) && <>
                    <Button loading={putCorrectAnswersLoading}
                        onClick={handleSubmitAnswers}>Submit</Button></>
                }
                {/* {isOpenResultsModal && <ResultsModal result={correctAnswers} />} */}
            </div>
        </>
    );
};

import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setIsOpenResultsModal } from '@/store/quizSlice/quizSlice';
import { Modal } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    result: number
}
const ResultsModal = ({ result }: Props) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isOpenResultsModal = useAppSelector<boolean>((state) =>
        state.quiz.isOpenResultsModal)

    const handleOk = () => {
        navigate("/")
        dispatch(setIsOpenResultsModal(false))
    }

    const handleCancel = () => {
        dispatch(setIsOpenResultsModal(false))
    }
    return (
        <>
            <Modal
                title="Your Results"
                open={isOpenResultsModal}
                onOk={handleOk}
                onCancel={handleCancel}>
                <h2>{result}/5</h2>

            </Modal>

        </>
    );
};

export default ResultsModal;
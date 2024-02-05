import React, { FC, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Form, Input } from 'antd';
import { UserTypes } from '@/types/userTypes';
import { addNotificationAxios, addNotificationFirebaseErr } from '@/utils/addNotification';
import { AuthService } from '@/services/auth.service';
import { validateMessages } from '@/constants/validate.constant';
import { setUser } from '@/store/userSlice/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { FirebaseError } from 'firebase/app';

const FormLogin: FC = () => {
    const [form] = Form.useForm()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(false);

    const handleFinish = async (value: UserTypes.UserFormLoginType) => {
        setLoading(true)
        await AuthService.checkUser(value).then((res) => {
            console.log(res)
            if (res.data) {
                navigate("/")
                form.resetFields()
                dispatch(setUser({
                    id: res?.data[0]?.id,
                    isAuth: true,
                    email: res.data[0]?.email,
                    username: value?.username
                }))
                setLoading(false)
            }
        }).catch((err) => {
            addNotificationFirebaseErr("User not found")
        }).
            finally(() => { setLoading(false) })
    }

    const handleFormSubmit = () => {
        form.submit()
    }

    return (
        <>
            <Form
                form={form}
                onFinish={handleFinish}
                layout="vertical"
                validateMessages={validateMessages}
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, min: 4 }]}
                    getValueFromEvent={(event) => event.target.value.trimStart()}
                >
                    <Input placeholder="Username" />
                </Form.Item>
                {/* <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true }, {
                        type: 'email',
                        message: 'Пожалуйста, укажите email',
                    },]}
                    getValueFromEvent={(event) => event.target.value.trimStart()}
                >
                    <Input type='email' placeholder="Email" />
                </Form.Item> */}
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, min: 6 }]}

                    getValueFromEvent={(event) => event.target.value.trimStart()}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Button block type='primary' loading={loading} onClick={handleFormSubmit}>SUBMIT</Button>
            </Form>

        </>
    );
};

export default FormLogin;
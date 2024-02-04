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

        // const auth = getAuth()

        // await signInWithEmailAndPassword(auth, value?.email, value?.password)
        //     .then((user) => {
        //         dispatch(setUser({
        //             id: user?.user?.uid,
        //             email: user?.user?.email as string,
        //             username: user?.user?.refreshToken
        //         }))
        //         navigate("/")
        //         setLoading(false)
        //     })
        //     .catch((err: FirebaseError) => {
        //         console.log(err)
        //         addNotificationFirebaseErr(err.message)
        //         setLoading(false)
        //     })

        

        await AuthService.login(value).then((res) => {
            if (res.data) {
                console.log(res)
                addNotificationAxios("Successfully registered")
                form.resetFields()
                dispatch(setUser({
                    isAuth: true,
                    id: value?.email,
                    email: value?.email as string,
                    username: value?.username
                }))
                navigate("/")
                setLoading(false)
            }
        }).catch(addNotificationAxios).
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
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true }, {
                        type: 'email',
                        message: 'Пожалуйста, укажите email',
                    },]}
                    getValueFromEvent={(event) => event.target.value.trimStart()}
                >
                    <Input type='email' placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, min: 6 }]}

                    getValueFromEvent={(event) => event.target.value.trimStart()}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Button loading={loading} onClick={handleFormSubmit}>SUBMIT</Button>
            </Form>

        </>
    );
};

export default FormLogin;
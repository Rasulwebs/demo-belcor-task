import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Form, Input } from 'antd';
import { UserTypes } from '@/types/userTypes';
import { addNotificationAxios, addNotificationFirebaseErr } from '@/utils/addNotification';
import { AuthService } from '@/services/auth.service';
import { validateMessages } from '@/constants/validate.constant';
import { useNavigate } from 'react-router-dom';
import { setUser } from '@/store/userSlice/userSlice';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { FirebaseError } from 'firebase/app';

const FormRegister = () => {
    const [form] = Form.useForm()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false);

    const handleFinish = async (value: UserTypes.UserFormRegisterType) => {
        setLoading(true)

        // const auth = getAuth()

        // await createUserWithEmailAndPassword(auth, value?.email, value?.password)
        //     .then((user) => {
        //         dispatch(setUser({
        //             id: user?.user?.uid,
        //             email: user?.user?.email as string,
        //             token: user?.user?.refreshToken
        //         }))

        //         navigate("/")
        //         setLoading(false)
        //     })
        //     .catch((err: FirebaseError) => {
        //         console.log(err)
        //         addNotificationFirebaseErr(err.message)
        //         setLoading(false)

        //     })

        await AuthService.register(value).then((res) => {
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
                    rules={[{ required: true }]}
                    getValueFromEvent={(event) => event.target.value.trimStart()}
                >
                    <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true }]}
                    getValueFromEvent={(event) => event.target.value.trimStart()}
                >
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true }]}

                    getValueFromEvent={(event) => event.target.value.trimStart()}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Button loading={loading} onClick={handleFormSubmit}>SUBMIT</Button>
            </Form>

        </>
    );
};

export default FormRegister;
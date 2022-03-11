/**
 * @filename    : AdminLogin.js
 * @author      : 김우영 (https://github.com/0x000613)
 * @description : 어드민 로그인 페이지
 */

// Core Modules
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import Alert from 'components/common/Alert';

import { login } from 'slices/admin/LoginSlice';
import { appSlice } from 'slices/admin/appSlice';

// Styles
import 'css/AdminLogin.css';

// Resources
import AdminLoginLogo from 'img/TheGreatCatsby-Center-Pink-logo.png';

const LoginFormContainer = styled('div')`
    width: 350px;
    height: 450px;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputTitle = styled('p')`
    left: 0;
    font-weight: bold;
`;

const InputWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const AdminLogin = () => {
    // useNavigate, useDispatch 객체 초기화
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // User email, password를 입력받기 위한 state 생성
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { rt, rtmsg, data, loading } = useSelector(state => state.login);

    // User email, password Input 변경 핸들러 함수
    const onChangeEmail = e => setEmail(e.target.value);
    const onChangePassword = e => setPassword(e.target.value);

    // 잘못된 로그인 시도시 실행할 함수
    const badLoginRequest = err => {
        alert('존재하지 않는 이메일 혹은 잘못된 패스워드입니다.');
        console.log(err);
    };

    // 성공적인 로그인 시도시 실행할 함수
    const successLoginRequest = res => {
        navigate('/admin/manageadmin');
    };

    // Login 요청 함수
    const requestLogin = e => {
        dispatch(
            login({
                email: email,
                password: password,
            }),
        );
    };

    useEffect(() => {
        if (rt === 200) {
            dispatch(
                appSlice.actions.changeLoginState({
                    loginSuccess: true,
                    email: data.email,
                    name: data.name,
                    tel: data.tel,
                    user_id: data.user_id,
                }),
            );
            successLoginRequest();
        } else if (rt !== null) {
            badLoginRequest();
        }
    }, [rt]);

    return (
        <>
            <LoginFormContainer>
                <img src={AdminLoginLogo} alt="AdminLoginLogoImage" width="260px" height="100px" />
                <InputWrapper>
                    <InputTitle>이메일</InputTitle>
                    <Input Inptype="full" borderColor="var(--white)" type="email" name="email" onChange={onChangeEmail} />
                </InputWrapper>
                <InputWrapper>
                    <InputTitle>패스워드</InputTitle>
                    <Input Inptype="full" borderColor="var(--white)" type="password" name="password" onChange={onChangePassword} />
                </InputWrapper>
                <Button onClick={requestLogin}>로그인</Button>
            </LoginFormContainer>
        </>
    );
};

export default AdminLogin;

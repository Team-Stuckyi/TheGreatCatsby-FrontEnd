/**
 * @filename    : AdminLogin.js
 * @author      : 김우영 (https://github.com/0x000613)
 * @description : 어드민 로그인 페이지
 */

// Core Modules
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// Components
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import Alert from 'components/common/Alert';

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
    // User email, password를 입력받기 위한 state 생성
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // User email, password Input 변경 핸들러 함수
    const onChangeEmail = e => setEmail(e.target.value);
    const onChangePassword = e => setPassword(e.target.value);

    // 잘못된 로그인 시도시 실행할 함수
    const badRequestLogin = err => {
        alert('존재하지 않는 이메일 혹은 잘못된 패스워드입니다.');
        console.log(err);
    };

    // Login 요청 함수
    const requestLogin = e => {
        axios
            // 로그인 POST 요청
            .post(process.env.REACT_APP_SERVER_URL + '/admins/login', {
                email: email,
                password: password,
            })
            // 요청 성공시
            .then(response => console.log(response))
            // 에러 발생시
            .catch(err => badRequestLogin(err));
    };

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

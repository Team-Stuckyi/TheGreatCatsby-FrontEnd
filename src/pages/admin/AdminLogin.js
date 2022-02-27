/**
 * @filename    : AdminLogin.js
 * @author      : 김우영 (https://github.com/0x000613)
 * @description : 어드민 로그인 페이지
 */

// Core Modules
import React, { useState } from 'react';
import styled from 'styled-components';
// Components
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import GlobalStyles from 'GlobalStyles';

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

const App = () => {
    // Cocument Style Reset
    <GlobalStyles />;
    // User email, password를 입력받기 위한 state 생성
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // User email, password Input 변경 핸들러 함수
    const onChangeEmail = e => setEmail(e.target.value);
    const onChangePassword = e => setPassword(e.target.value);

    // Login 요청 함수
    const requestLogin = e => {
        console.log(email, password);
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

export default App;

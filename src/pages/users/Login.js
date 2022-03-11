/**
 * @filename    : Login.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 사용자 로그인 페이지
 */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Container from 'components/common/Container';
import Header from 'components/users/Header';
import Footer from 'components/users/Footer';
import Logo from 'components/common/Logo';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { login } from 'slices/users/LoginSlice';
import { appSlice } from 'slices/users/AppSlice';

const LoginWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImageBox = styled.div`
    margin: 60px 0;
`;


const InputWrapper = styled.div`
    width: 300px;
    margin-bottom: 50px;
`;

const EmailInp = styled.div`
    width: 300px;
    margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
    width: 300px;
    margin-bottom: 50px;
    margin: 0 auto;
`;


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const { rt, rtmsg, data, loading } = useSelector(state => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClick = (e) => {
        dispatch(login({
            email: email,
            password: password
        }))
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        if (rt === 200) {
            dispatch(appSlice.actions.changeLoginState({
                loginSuccess: true,
                email: data.email,
                name: data.name,  
                tel: data.tel,
                user_id: data.user_id
            }));
            navigate('/');
        } else if (rt !== null) {
            alert('로그인 실패');
        }
    }, [rt]);

    return (
    <>    
        <Header />
        <Container>
            <LoginWrapper>
                <ImageBox>
                    <Logo Imgtype='light' Imgwidth='400px'/>
                </ImageBox>
                <InputWrapper>
                    <EmailInp>
                        <Input type="email" Inptype='full' borderColor={'var(--gray400)'} placeholder="이메일을 입력하세요" onChange={onEmailChange} />
                    </EmailInp>
                    <Input type="password" Inptype='full' borderColor={'var(--gray400)'} placeholder="비밀번호를 입력하세요" onChange={onPasswordChange} />
                </InputWrapper>
                <ButtonWrapper>
                    <Button width='296px' size='12px' bgColor={'var(--primary)'} onClick={onClick} >로그인</Button>
                    <Button width='296px' size='12px' bgColor={'var(--white)'} fontColor={'var(--gray500)'}>회원가입</Button> 
                </ButtonWrapper>
            </LoginWrapper>  
        </Container>
        <Footer />
    </>
    );
};

export default Login;

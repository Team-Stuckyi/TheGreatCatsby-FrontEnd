/**
 * @filename    : Register.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 회원가입 페이지
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { postMember } from 'slices/users/JoinSlice';

import Container from 'components/common/Container';
import Header from 'components/users/Header';
import Footer from 'components/users/Footer';
import Loading from 'components/common/Loading';
import Logo from 'components/common/Logo';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

const JoinWrapper = styled.div`
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
    margin-bottom: 20px;
`;

const DataInp = styled.div`
    width: 300px;
    margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
    width: 300px;
    margin-bottom: 50px;
    margin: 0 auto;
`;

const AlertText = styled.p`
    font-size: 0.8rem;
    color: red;
    margin: 0 3px;
    opacity: ${props => props.opacity};
`;

const Register = () => {
    const [name, setName] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pwCompare, setPwCompare] = useState('');
    const [showNameText, setShowNameText] = useState('0');
    const [showEmailText, setShowEmailText] = useState('0');
    const [showPasswordText, setShowPasswordText] = useState('0');
    const [showCompareText, setShowCompareText] = useState('0');
    const [isLoaded, setIsLoaded] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { rt, loading } = useSelector(state => state.joinMember);

    const onNameChange = (e) => {
        setName(e.target.value);
        // 이름 입력창 정규표현식
        let regExp = /^[ㄱ-ㅎ가-힣]*$/;
        if(!regExp.test(e.target.value) || e.target.value.length > 8 && e.target.value.length > 0) {
            setShowNameText("1");
        } else {
            setShowNameText("0");
        }
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        // 이메일 입력창 정규표현식
        let regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(!regExp.test(e.target.value) && e.target.value.length > 0) {
            setShowEmailText("1");
        } else {
            setShowEmailText("0");
        }
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        // 비밀번호 입력창 정규표현식
        let regExp = /^[a-zA-Z0-9]*$/;
        if(!regExp.test(e.target.value) || (e.target.value.length < 8 || e.target.value.length > 16) && e.target.value.length > 0) {
            setShowPasswordText("1");
        } else {
            setShowPasswordText("0");
        }
    }

    const onCompareChange = (e) => {
        setPwCompare(e.target.value);
        // 비밀번호 입력값과 비교
        if(e.target.value != password && e.target.value.length > 0) {
            setShowCompareText("1");
        } else {
            setShowCompareText("0");
        }
    }

    const onSubmit = (e) => {
        dispatch(postMember({name: name, email: email, password: password}));
    }

    useEffect(() => {
        if(rt == 200) {
            navigate('/regsuccess');
        } else if (rt != null) {
            alert("회원가입 실패")
        }
    }, [rt]);

    useEffect(() => {
        if (loading) {
            setIsLoaded(true);
        } else {
            setIsLoaded(false);
        }
    }, [loading]);

    return (
        <>  {
            isLoaded? <Loading /> :
            <>
            <Header />
            <Container>
                <JoinWrapper>
                    <ImageBox>
                        <Logo Imgtype='light' Imgwidth='400px' />
                    </ImageBox>
                    <InputWrapper>
                        <DataInp>
                            이름 *
                            <Input type="name" Inptype='full' borderColor={'var(--gray400)'} placeholder="이름을 입력하세요" onChange={onNameChange}/>
                            <AlertText opacity={showNameText}>한글만 입력해 주세요. (8자 이내)</AlertText>
                        </DataInp>
                        <DataInp>
                            이메일 *
                            <Input type="email" Inptype='full' borderColor={'var(--gray400)'} placeholder="이메일을 입력하세요" onChange={onEmailChange}/>
                            <AlertText opacity={showEmailText}>이메일 형식으로 입력해 주세요.</AlertText>
                        </DataInp>
                        <DataInp>
                            비밀번호 *
                            <Input type="password" Inptype='full' borderColor={'var(--gray400)'} placeholder="비밀번호를 입력하세요" onChange={onPasswordChange}/>
                            <AlertText opacity={showPasswordText}>영문과 숫자 조합으로 입력해 주세요. (8~16자)</AlertText>
                        </DataInp>
                        <DataInp>
                            비밀번호 확인 *
                            <Input type="password" Inptype='full' borderColor={'var(--gray400)'} placeholder="비밀번호를 한번 더 입력하세요" onChange={onCompareChange}/>
                            <AlertText opacity={showCompareText}>입력하신 비밀번호와 일치하지 않습니다.</AlertText>
                        </DataInp>
                    </InputWrapper>
                    <ButtonWrapper>
                        <Button width='296px' size='12px' bgColor={'var(--primary)'} onClick={onSubmit} >회원가입</Button>
                    </ButtonWrapper>
                </JoinWrapper>
            </Container>
            <Footer />
            </>
            }  
        </>
    );
};

export default Register;
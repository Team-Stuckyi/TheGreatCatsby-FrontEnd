import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Logo from 'components/common/Logo';
import Header from 'components/users/Header';
import Footer from 'components/users/Footer';

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
`;

const Container = styled.div`
    width: 500px;
    margin: 200px auto 0 auto;
`;

const TextBox = styled.p`
    font-size: 18px;
    width: 260px;
    text-align: center;
    padding: 30px;
    margin: 0 auto;
`;

const NotFound = () => {
    const navigate = useNavigate();

    const onClickGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Header />
            <Wrapper>
                <Container>
                    <Logo Imgtype="light" />

                    <TextBox>페이지를 찾을 수 없습니다.</TextBox>

                    <Button
                        onClick={onClickGoBack}
                        width="50%"
                        bgColor="var(--white)"
                        fontColor="var(--primary)"
                        border="1px solid var(--primary)"
                    >
                        이전 페이지로 돌아가기
                    </Button>
                    <Link to="/">
                        <Button width="50%">홈으로</Button>
                    </Link>
                </Container>
            </Wrapper>
            <Footer />
        </>
    );
};

export default NotFound;

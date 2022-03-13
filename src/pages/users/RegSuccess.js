/**
 * @filename    : RegSuccess.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 회원가입 완료 페이지
 */

import React from 'react';

import Container from 'components/common/Container';
import Header from 'components/users/Header'
import Success from 'components/users/Success';
import Footer from 'components/users/Footer';

const RegSuccess = () => {
    return (
        <>
            <Header />
            <Container>
                <Success />
            </Container>
            <Footer /> 
        </>

    );
};

export default RegSuccess;
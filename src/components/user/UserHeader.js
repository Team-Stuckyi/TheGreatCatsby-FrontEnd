/**
 * @filename    : UserHeader.js
 * @author      : 전찬민 (https://github.com/cksals3753)
 * @description : 사용자 페이지 헤더
 */

import React from 'react';
import Logo from '../common/Logo';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Login from '../../img/login.png';

const Container = styled.div`
width: 100%;
height: 100px;
justify-content: center;
align-items: center;
position: fixed;
box-shadow: 0 12px 10px -5px var(--gray300);
margin: auto;
left: 0;
top: 0;
`;

const TitleBar = styled.div`
width: 1200px;
height: 100px;
margin: auto;
margin-top: 5px;
`;

const LogoBox = styled.div`
float: left;
`;

const LoginBox = styled.div`
float: right;
margin-top: 10px;
`;

const Img = styled.img`
width: 35px;
float: right;
margin-right: 3px;
`;

const P = styled.p`
color: var(--black);
`;

const UserHeader = () => {
    return (
        <Container>
            <TitleBar>
                <LogoBox>
                    <Link to={'/'}>
                        <Logo Imgtype="light" Imgwidth="220px" />
                    </Link>
                </LogoBox>
                <LoginBox>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Img src={Login} />
                        <P>Login</P>
                    </Link>
                </LoginBox>
            </TitleBar>
        </Container>
    )

}

export default UserHeader;
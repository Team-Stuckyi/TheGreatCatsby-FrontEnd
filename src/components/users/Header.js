/**
 * @filename    : Header.js
 * @author      : 전찬민 (https://github.com/cksals3753)
 * @description : 사용자 페이지 헤더
 */

 import React from 'react';
 import Logo from 'components/common/Logo';
 import { Link } from 'react-router-dom'
 import styled from 'styled-components';
 import Login from 'img/login.png';
 
 const HeaderContainer = styled.div`
 width: 100%;
 height: 100px;
 justify-content: center;
 align-items: center;
 box-shadow: 0 12px 10px -5px var(--gray300);
 background-color: var(--white);
 margin-bottom: 50px;
 `;
 
 const TitleBar = styled.div`
 width: 1200px;
 margin: auto;
 `;
 
 const LogoBox = styled.div`
 float: left;
 `;
 
 const LoginBox = styled.div`
 float: right;
 margin-top: 15px;
 `;
 
 const Img = styled.img`
 width: 35px;
 float: right;
 margin-right: 3px;
 `;
 
 const P = styled.p`
 color: var(--black);
 `;
 
 
 const Header = () => {
     return (
         <HeaderContainer>
             <TitleBar>
                 <LogoBox>
                     <Link to="/">
                         <Logo Imgtype="light" Imgwidth="220px" />
                     </Link>
                 </LogoBox>
                 <LoginBox>
                     <Link to="/members/login">
                         <Img src={Login} />
                         <P>Login</P>
                     </Link>
                 </LoginBox>
             </TitleBar>
         </HeaderContainer>
     )
 
 }
 
 export default Header;
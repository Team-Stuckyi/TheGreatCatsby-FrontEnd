/**
 * @filename    : AdminHeader.js
 * @author      : 이병민 (https://github.com/Byeongminlee)
 * @description : 관리자 페이지 헤더
 */

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adminlogin } from 'slices/admin/adminLoginSlice';
import { adminAppSlice } from 'slices/admin/adminAppSlice';
import styled from 'styled-components';
import Logo from 'components/common/Logo';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 60px;
    padding: 10px;
    line-height: 40px;
    margin-bottom: 60px;
    background-color: var(--gray200);
`;
const Container = styled.div`
    max-width: 1200px;
    min-width: 630px;
    margin: 0 auto;

    @media screen and (max-width: 630px) {
        min-width: 40%;
    }
`;
const LogoBox = styled.div`
    float: left;
`;

const MenuContainer = styled.div`
    width: 520px;
    float: left;

    @media screen and (max-width: 700px) {
        width: 430px;
    }

    @media screen and (max-width: 600px) {
        width: 350px;
    }
`;

const Menu = styled.h2`
    display: inline-block;
    margin-right: 30px;
    cursor: pointer;

    @media screen and (max-width: 700px) {
        font-size: 15px;
        margin-right: 10px;
        margin-left: ${props => {
            if (props.first === 'first') return '10px';
        }};
    }

    @media screen and (max-width: 600px) {
        font-size: 14px;
        margin-right: 10px;
        letter-spacing: -1.5px;
        margin-left: ${props => {
            if (props.first === 'first') return '5px';
        }};
    }

    margin-left: ${props => {
        if (props.first === 'first') return '10px';
    }};

    margin-right: ${props => {
        if (props.last === 'last') return '0';
    }};

    &:hover {
        font-family: 'InfinitySansR-Bold';
        color: var(--primary);
    }
`;

const LogOut = styled.div`
    display: inline-block;
    cursor: pointer;
    float: right;
    margin-right: 20px;

    @media screen and (max-width: 585px) {
        font-size: 15px;
        margin-right: 5px;
    }

    &:hover {
        font-family: 'InfinitySansR-Bold';
        color: var(--primary);
    }
    &:after {
        clear: both;
    }
`;

const Box = styled.div`
    height: 120px;
`;

const AdminHeader = ({ setIsAdminLogin, isAdminLogin }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // 로그아웃시 로그인 페이지로 이동
        if (!isAdminLogin) {
            navigate('/admin/login');
        }
    }, [isAdminLogin]);

    const onClickLogOut = async () => {
        // 로그인시 값초기화
        await dispatch(
            adminAppSlice.actions.changeLoginState({
                loginSuccess: false,
                email: null,
                name: null,
                tel: null,
                user_id: null,
            }),
        );
        await dispatch(
            adminlogin({
                email: null,
                password: null,
            }),
        );
        // 로그인 값 false로 변경
        setIsAdminLogin(false);
    };

    return (
        <>
            <Wrapper>
                <Container>
                    <LogoBox>
                        <Link to={'/admin/login'}>
                            <Logo Imgwidth="50px" />
                        </Link>
                    </LogoBox>
                    <MenuContainer>
                        <Link to="/admin/manageadmin">
                            <Menu first="first">관리자 회원관리</Menu>
                        </Link>
                        <Link to="/admin/managemember">
                            <Menu>일반 회원관리</Menu>
                        </Link>
                        <Link to="/admin/manageprod">
                            <Menu>상품 관리</Menu>
                        </Link>
                        <Link to="/admin/managereview">
                            <Menu>리뷰 관리</Menu>
                        </Link>
                        <Link to="/admin/manageorder">
                            <Menu last="last">주문 관리</Menu>
                        </Link>
                    </MenuContainer>
                    <LogOut last="last" onClick={onClickLogOut}>
                        로그아웃
                    </LogOut>
                </Container>
            </Wrapper>
            <Box />
        </>
    );
};

export default AdminHeader;

<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
/**
 * @filename    : Alert.js
 * @author      : 전찬민 (https://github.com/cksals3753)
 * @description : 관리자 페이지 Alert 컴포넌트
 */

import React from 'react';
>>>>>>> fd7229b1c20332507d8ab3c8dc38d1c3a3aca2d9
import styled from 'styled-components';
import Button from 'components/common/Button';

const AlertDiv = styled.div`
    position: fixed;
    z-index: 2000;
    top: 30%;
    left: calc(50% - 200px);
`;

const AlertContainer = styled.div`
    z-index: 2000;
    position: relative;
    width: 400px;
    height: 200px;
    background-color: var(--white);
    border-radius: 5px;
    box-shadow: 5px 5px 15px var(--gray400);
`;

const AlertText = styled.div`
    width: 300px;
    height: 80px;
    position: absolute;
    top: 75px;
    left: 50px;
    text-align: center;
`;

const BgBlack = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    width: 100%;
    height: 100%;
    background-color: var(--gray600);
    opacity: 0.1;
`;

const ButtonBox = styled.div`
    position: absolute;
    top: 150px;
    left: 50px;
`;

const Alert = ({ text, onClickConfirm, onClickCancel }) => {
    return (
        <AlertDiv>
            <BgBlack />
            <AlertContainer>
                <AlertText>{text}</AlertText>
                <ButtonBox>
                    {!onClickCancel ? (
                        <Button size="md" width="300px" bgColor="var(--blue300)" onClick={onClickConfirm}>
                            확인
                        </Button>
                    ) : (
                        <>
                            <Button size="md" width="150px" bgColor="var(--blue300)" onClick={onClickConfirm}>
                                확인
                            </Button>
                            <Button size="md" width="150px" onClick={onClickCancel}>
                                취소
                            </Button>
                        </>
                    )}
                </ButtonBox>
            </AlertContainer>
        </AlertDiv>
    );
};

export default Alert;

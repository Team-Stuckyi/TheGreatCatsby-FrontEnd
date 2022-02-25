/**
 * @filename    : PayAdress.js
 * @author      : 전찬민 (https://github.com/cksals3753)
 * @description : 주문사항 확인 컴포넌트
 */

import React from 'react';
import styled from 'styled-components';

// 전체 div
const Container = styled.div`
width: 100%;
padding: 5px;
font-family: InfinitySansR-Regular;
`;
// 배경 및 크기를 위한 div
const PayBox = styled.div`
width: 100%;
height: 180px;
background-color: var(--gray100);
margin-bottom: 30px;
`;
// 주문접수 TextBox
const TextBox = styled.div`
width: 1000px;
float: left;
height: 18px;
line-height: 20px;
margin-left: 40px;
margin-top: 20px;
`;
// 주문사항 Text
const PayText = styled.div`
font-size: 17px;
color: var(--gray400);
float: left;
width: 180px;
`;
// props로 받는 Text
const PaySub = styled.div`
font-size: 17px;
float: left;
`;

const PayAdress = ({ Receiver, Phone, Adress, PayMent }) => {
    return (
        <>
            <Container>
                <PayBox>
                    <TextBox>
                        <PayText>받는 사람</PayText>
                        <PaySub>{Receiver}</PaySub>
                    </TextBox>
                    <TextBox>
                        <PayText>휴대 전화</PayText>
                        <PaySub>{Phone}</PaySub>
                    </TextBox>
                    <TextBox>
                        <PayText>배송 주소</PayText>
                        <PaySub>{Adress}</PaySub>
                    </TextBox>
                    <TextBox>
                        <PayText>결제 방법</PayText>
                        <PaySub>{PayMent}</PaySub>
                    </TextBox>
                </PayBox>
            </Container>
        </>

    );
};

export default PayAdress;

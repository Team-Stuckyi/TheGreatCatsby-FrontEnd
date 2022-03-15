/**
 * @filename    : PayAdress.js
 * @author      : 전찬민 (https://github.com/cksals3753)
 * @description : 주문사항 확인 컴포넌트
 */

import React from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAdressMember } from 'slices/users/RecentMemberSlice.js';
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

const PayAdress = () => {

    /** RecentAdress의 값 받아오기 */
    let { oldaddrId } = useParams();

    const { rt2, rtmsg2, item2, loading2 } = useSelector(state => state.recentMember);
    const [recent, setRecent] = React.useState([]);

    const dispatch2 = useDispatch();

    React.useEffect(() => {
        dispatch2(getAdressMember(oldaddrId));
    }, [oldaddrId]);

    React.useEffect(() => {
        if (rt2 === 200) {
            setRecent(item2[0]);
        }
        console.log(item2);
    }, [item2])

    return (
        <>
            <Container>

                <PayBox>
                    <TextBox>
                        <PayText>받는 사람</PayText>
                        <PaySub>찬민</PaySub>
                    </TextBox>
                    <TextBox>
                        <PayText>휴대 전화</PayText>
                        <PaySub>{recent.tel}</PaySub>
                    </TextBox>
                    <TextBox>
                        <PayText>배송 주소</PayText>
                        <PaySub>{recent.addr1}</PaySub>
                    </TextBox>
                    <TextBox>
                        <PayText>결제 방법</PayText>
                        <PaySub>카카오</PaySub>
                    </TextBox>
                </PayBox>
            </Container>


        </>

    );
};

export default PayAdress;

import React from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAdressMember } from 'slices/users/RecentMemberSlice.js';

const Wrapper = styled.div`
width: 100%;
`;

const Container = styled.div`
width: 1100px;
height: 250px;
border-bottom: 1px solid var(--gray500);
border-top: 1px solid var(--gray500);
margin-bottom: 20px;
`;

// 주소 div
const Adress = styled.div`
width: 1200px;
`;
// 주소 text div
const AdressText = styled.div`
width: 1100px;
border-bottom: 1px solid var(--gray500);
height: 140px;
`;
// 주문접수 TextBox
const TextBox = styled.div`
width: 1000px;
float: left;
height: 18px;
line-height: 20px;
margin-left: 20px;
margin-top: 20px;
`;
// 주문사항 Text
const PayText = styled.div`
font-size: 17px;
color: var(--gray400);
float: left;
width: 180px;
font-family: InfinitySansR-Regular;
`;
// props로 받는 Text
const PaySub = styled.div`
font-size: 17px;
float: left;
font-family: InfinitySansR-Regular;
`;
// 배송 요청사항 div
const AdressTextsub = styled.div`
height: 80px;
width: 1100px;
`;
// 배송 요청사항 div
const AdressInfo = styled.div`
width: 1100px;
margin-left: 20px;
margin-top: 40px;
`;
// 배송 요청사항 text
const InfoText = styled.p`
font-size: 17px;
color: var(--gray400);
width: 180px;
float: left;
font-family: InfinitySansR-Regular;
`;
// Selector 박스 div
const AdressRequest = styled.div`
float: left;
`;
// select 박스
const Select = styled.select`
width: 378px;
height: 38px;
line-height: 38px;
text-indent: 5px;
color: var(--gray600);
margin-top: -20px;
font-family: InfinitySansR-Regular;
`;
const RecentAdress = ({ recent }) => {

    return (
        <>
            <Wrapper>
                <Container>
                    <Adress>
                        <AdressText>
                            <TextBox>
                                <PayText>받는 사람</PayText>
                                <PaySub>전찬민</PaySub>
                            </TextBox>
                            <TextBox>
                                <PayText>휴대 전화</PayText>
                                <PaySub>{recent.tel}</PaySub>
                            </TextBox>
                            <TextBox>
                                <PayText>배송 주소</PayText>
                                <PaySub>{recent.addr1}</PaySub>
                            </TextBox>
                        </AdressText>
                        <AdressTextsub>
                            <AdressInfo>
                                <InfoText>배송 요청사항</InfoText>
                            </AdressInfo>
                            <AdressRequest>
                                <Select>
                                    <option value="0">배송 요청 사항을 선택하세요.</option>
                                    <option value="1">부재 시 연락 부탁드려요.</option>
                                    <option value="1">문 앞으로 배송 부탁드려요.</option>
                                    <option value="1">배송 전 연락 부탁드려요.</option>
                                </Select>
                            </AdressRequest>
                        </AdressTextsub>
                    </Adress>
                </Container>
            </Wrapper>
        </>
    )
}

export default RecentAdress;
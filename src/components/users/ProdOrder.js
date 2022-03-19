/**
 * @filename    : ProdOrder.js
 * @author      : 전찬민 (https://github.com/cksals3753)
 * @description : 상품 컴포넌트
 */

import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
width: 100%;
`;

const Container = styled.div`
width: 100%;

`;
// Order text 
const OrderText = styled.p`
font-family: InfinitySansR-Bold;
font-size: 18px;
`;
// 발송일 text
const PayContainer = styled.div`
background-color: var(--gray200);
height: 70px;
width: 100%;
border-top: 2px solid var(--gray500);
`;

// 발송일 Text
const Delivery = styled.p`
color: var(--primary);
margin: 0 auto;
height: 65px;
line-height: 70px;
text-indent: 20px;
`;
// 상품 div
const ProdContainer = styled.div`
width: 1200px;
height: 220px;
`;
// 상품 div position속성
const ProdSub = styled.div`
width: 1100px;
height: 150px;
position: absolute;
`;
// 이미지 div
const ImgBox = styled.div`
width: 200px;
line-height: 70px;
position: relative;
float: left;
margin: 40px 0 0 40px;
`;
// 텍스트 div
const TextBox = styled.div`
width: 900px;
position: relative;
font-family: InfinitySansR-Regular;
margin-top: 66px;
`;
// 상품명 text
const TitleText = styled.p`
`;
// 상품가격 text
const PriceText = styled.p`
font-family: InfinitySansR-Bold;
text-align: right;
margin-right: -100px;
`;
// 상품 수량 text
const NumberText = styled.p`
color: var(--gray500);
`;

const ProdOrder = ({ orderItem }) => {

    return (
        <>
            <Wrapper>
                <Container>
                    <OrderText>주문상품</OrderText>
                    <PayContainer>
                        <Delivery>발송일 : 오늘</Delivery>
                    </PayContainer>
                    <ProdContainer>
                        <ProdSub>
                            <ImgBox>
                                <img src={orderItem.thumbnail_photo} width={'130px'} />
                            </ImgBox>
                            <TextBox>
                                <TitleText>{orderItem.name}</TitleText>
                                <PriceText>{orderItem.price}원</PriceText>
                                <NumberText>수량 1개</NumberText>
                            </TextBox>
                        </ProdSub>
                    </ProdContainer>
                </Container>
            </Wrapper>
        </>
    )
}

export default ProdOrder;
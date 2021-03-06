/**
 * @filename    : ProdBill.js
 * @author      : 이병민 (https://github.com/Byeongminlee)
 * @description : 결제 금액 영수증 컴포넌트 (총 상품금액, 배송비, 총 결제 금액)
 */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 5px;
    border-top: 2px solid var(--gray500);
`;

const PriceBox = styled.div`
    border-bottom: 1px solid var(--gray200);
`;

const PriceTitle = styled.span`
    display: inline-block;
    padding: 10px;
    width: 180px;
    height: 55px;
    line-height: 35px;
    background-color: var(--gray100);
    text-indent: 20px;
`;

const PriceSub = styled.span`
    display: inline-block;
    width: 150px;
    text-align: center;

    font-family: ${props => {
        if (props.last === 'last') return 'InfinitySansR-Bold';
    }};
`;

/*
 * @param   {string} proPrice 총 상품 금액
 * @param   {string} delivery 배송비
 * @param   {string} payPrice 총 결제 금액(만약 총 결제 금액을 props로 받지 못할 시 '총 상품 금액 + 배송비'를 계산하여 출력)
 */

// 3자리단위 콤마찍기 함수 구현
function setCommas(number) {
    var formNumber = "" + number;
    return formNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const ProdBill = ({ proPrice, delivery, payPrice }) => {
    if (!payPrice) {
        payPrice = parseInt(proPrice) + parseInt(delivery);
    }

    return (
        <>
            <Container>
                <PriceBox>
                    <PriceTitle>총 상품 금액</PriceTitle>
                    <PriceSub>{setCommas(proPrice)}원</PriceSub>
                </PriceBox>
                <PriceBox>
                    <PriceTitle>배송비</PriceTitle>
                    <PriceSub>{setCommas(delivery)}원</PriceSub>
                </PriceBox>
                <PriceBox>
                    <PriceTitle>총 결제 금액</PriceTitle>
                    <PriceSub last="last">{setCommas(payPrice)}원</PriceSub>
                </PriceBox>
            </Container>
        </>
    );
};

export default ProdBill;

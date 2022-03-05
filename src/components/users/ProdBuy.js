/**
 * @filename    : Search.js
 * @author      : 김우영 (https://github.com/0x000613)
 * @description : 검색 컴포넌트
 */

// Cores
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Button from 'components/common/Button';
import Stars from 'components/common/Stars';

// Not Found Image
import NotFoundImage from 'img/common/ImageNotFound.png';

const ProdContainer = styled('div')`
    position: relative;
`;

const ProdThumbnailWrapper = styled('div')`
    display: inline-block;
    padding-right: 20px;
    width: 580px;
`;

const ProdPurchaseContainer = styled('div')`
    position: absolute;
    display: inline-block;
    width: 550px;
    height: 580px;
    border: 1px solid var(--gray300);
    padding: 0 24px;

    > button {
        margin-top: 20px;
    }
`;

const ProdTitle = styled('h2')`
    margin-top: 100px;
    font-size: 1.5rem;
    line-height: 2rem;
`;

const ReviewContainer = styled('div')`
    height: 30px;
    position: relative;
`;

const ReviewCount = styled('span')`
    display: inline-block;
    position: absolute;
    top: 7px;
    left: 125px;
    color: var(--blue200);
`;

const ProdPriceContainer = styled('div')`
    margin-top: 30px;
`;

// 상품 판매가 스타일
const ProdSellPriceContainer = styled('div')`
    position: relative;
`;

const ProdSellPriceText = styled('span')`
    position: absolute;
    right: 10px;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: bold;
`;

// 상품 배송비 스타일
const ProdShippingContainer = styled('div')`
    position: relative;
    margin-top: 20px;
`;

const ProdShippingPriceText = styled('div')`
    position: absolute;
    right: 10px;
    top: 0;
    font-weight: bold;
`;

// 상품 구매 수량 컨테이너
const ProdAmountContainer = styled('div')`
    width: 100%;
    margin-top: 30px;
    height: 120px;
    background-color: var(--gray200);
`;

const ProdAmountCategoryContainer = styled('div')`
    position: relative;

    // ProdAmountCategory Selector
    > span:first-child {
        left: 10px;
    }
    > span:last-child {
        right: 10px;
    }
`;

const ProdAmountCategory = styled('span')`
    color: var(--gray600);
    display: inline-block;
    padding-top: 10px;
    position: absolute;
    font-weight: bold;
`;

// 상품 수량 선택 버튼 컨테이너
const ProdAmountSelectContainer = styled('div')`
    position: relative;
    top: 60px;
    left: 10px;

    // Button Style 지정
    > button:first-child {
        font-size: 1.875rem;
        line-height: 2.25rem;
        width: 45px;
        height: 45px;
        border-radius: 0;
        border: 1px solid var(--gray500);
        color: black;
        padding: 1px 6px;
        margin: 0;
    }

    > button:last-child {
        font-size: 1.875rem;
        line-height: 2.25rem;
        width: 45px;
        height: 45px;
        border-radius: 0;
        border: 1px solid var(--gray500);
        color: black;
        padding: 1px 6px;
        margin: 0;
    }
`;

const ProdAmountText = styled('div')`
    display: inline-block;
    width: 78px;
    text-align: center;
    vertical-align: top;
    padding-top: 11px;
    padding-bottom: 11px;
    background-color: white;
    border: 1px solid var(--gray500);
    border-left: none;
    border-right: none;
`;

const TotalPriceText = styled('span')`
    position: absolute;
    right: 36px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 25px;
`;

const ProdBuy = ({
    prodThumbnailImage = NotFoundImage,
    prodName = '상품명',
    starCount = 4,
    reviewCount = '1,000',
    prodSellPrice = '6,500',
    prodShippingPrice = '3,000',
}) => {
    // 상품 구매 개수를 관리할 State
    const [prodCount, setProdCount] = useState(1);
    return (
        <ProdContainer>
            <ProdThumbnailWrapper>
                <img style={{ display: 'inline-block', width: '580px', height: '580px' }} src={prodThumbnailImage} alt="상품 이미지" />
            </ProdThumbnailWrapper>
            <ProdPurchaseContainer>
                <ProdTitle>{prodName}</ProdTitle>
                {/* 리뷰 컨테이너 */}
                <ReviewContainer>
                    <Stars starSize={'22px'} starCount={starCount} />
                    <ReviewCount>({reviewCount})</ReviewCount>
                </ReviewContainer>
                <hr style={{ border: '1px solid var(--gray300)', backgroundColor: 'var(--gray300)' }} />
                {/* 상품 가격 컨테이너 */}
                <ProdPriceContainer>
                    {/* 판매가 컨테이너 */}
                    <ProdSellPriceContainer>
                        <span style={{ fontWeight: 'bold' }}>판매가</span>
                        <ProdSellPriceText>{prodSellPrice}</ProdSellPriceText>
                    </ProdSellPriceContainer>
                    {/* 배송비 컨테이너 */}
                    <ProdShippingContainer>
                        <span style={{ fontWeight: 'bold' }}>배송비</span>
                        <ProdShippingPriceText>{prodShippingPrice}</ProdShippingPriceText>
                    </ProdShippingContainer>
                </ProdPriceContainer>
                {/* 상품 구매 수량 컨테이너 */}
                <ProdAmountContainer>
                    {/* 상품 구매 수량 및 총 상품 금액 카테고리 표기 */}
                    <ProdAmountCategoryContainer>
                        <ProdAmountCategory>수량</ProdAmountCategory>
                        <ProdAmountCategory>총 상품 금액</ProdAmountCategory>
                    </ProdAmountCategoryContainer>
                    {/* 상품 수량 선택 버튼 컨테이너 */}
                    <ProdAmountSelectContainer>
                        <Button
                            bgColor="var(--graybutton)"
                            onClick={() => {
                                // prodCount가 1이하이면 값을 1로 고정
                                setProdCount(prodCount > 1 ? prodCount - 1 : 1);
                            }}
                        >
                            -
                        </Button>
                        <ProdAmountText>{prodCount}</ProdAmountText>
                        <Button
                            bgColor="var(--graybutton)"
                            onClick={() => {
                                setProdCount(prodCount + 1);
                            }}
                        >
                            +
                        </Button>
                    </ProdAmountSelectContainer>
                    <TotalPriceText>
                        {parseInt(prodSellPrice.replace(',', '')) * parseInt(prodCount) + parseInt(prodShippingPrice.replace(',', ''))}
                    </TotalPriceText>
                </ProdAmountContainer>
                <Button>바로 구매</Button>
            </ProdPurchaseContainer>
        </ProdContainer>
    );
};

export default ProdBuy;

/**
 * @filename    : ProdReviewInfo.js
 * @author      : 이병민 (https://github.com/Byeongminlee)
 * @description : 리뷰 페이지에서 해당 리뷰의 상품 정보를 보여주는 컴포넌트
 */

import React from 'react';
import styled from 'styled-components';
import NoImg from 'img/noImg.png';
import Stars from 'components/common/Stars';

const ProdInfoContainer = styled.div`
    width: 100%;
    height: 400px;
    padding: 30px;
    border: 1px solid var(--gray300);
`;
const ProdInfo = styled.div`
    width: 700px;
    margin: 0 auto;
`;

const ProdInfoBox = styled.div`
    max-width: 400px;
    width: 50%;
    float: left;
    text-align: center;
    &:after {
        clear: both;
    }
`;

const ProdImgs = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 5px;
`;

const ProdTitle = styled.h2`
    text-align: center;
    font-size: 20px;
    padding: 20px;
    height: 70px;
`;

const ProdDetail = styled.div`
    text-align: left;
    padding: 80px;
`;

const RatingText = styled.h3`
    font-size: 25px;
    margin-bottom: 20px;
    padding-left: 3px;
`;

const RatingScoreText = styled.span`
    font-family: 'InfinitySans-Bold';
    font-size: 25px;
    padding-left: 5px;
`;

const ReviewCountText = styled.span`
    font-size: 14px;
    padding-left: 10px;
    display: inline-block;
    margin-bottom: 10px;
`;

const ProdReviewInfo = ({ ProdImg, starCount = 4.9, reviewCount = 24 }) => {
    return (
        <>
            <ProdInfoContainer>
                <ProdInfo>
                    <ProdInfoBox>
                        <ProdTitle>상품 제목 부분이다다다다다다다다.!!!</ProdTitle>
                        {!ProdImg || ProdImg === undefined ? <ProdImgs alt="상품" src={NoImg} /> : <ProdImgs alt="상품" src={ProdImg} />}
                    </ProdInfoBox>
                    <ProdInfoBox>
                        <ProdDetail>
                            <RatingText>평점</RatingText>
                            <RatingScoreText>{starCount}</RatingScoreText>
                            <ReviewCountText>({reviewCount})</ReviewCountText>
                            <Stars starCount={Math.floor(starCount)} starSize="40px"></Stars>
                        </ProdDetail>
                    </ProdInfoBox>
                </ProdInfo>
            </ProdInfoContainer>
        </>
    );
};

export default ProdReviewInfo;

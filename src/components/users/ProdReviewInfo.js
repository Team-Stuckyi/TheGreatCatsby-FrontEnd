/**
 * @filename    : ProdReviewInfo.js
 * @author      : 이병민 (https://github.com/Byeongminlee)
 * @description : 리뷰 페이지에서 해당 리뷰의 상품 정보를 보여주는 컴포넌트
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NoImg from 'img/noImg.png';
import Stars from 'components/common/Stars';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewProdInfo } from 'slices/users/ReviewProdInfoSlice';

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

const ProdReviewInfo = ({ prodId }) => {
    const { rt, rtmsg, item, loading } = useSelector(state => state.reviewProdInfo);
    const [prodItem, setProdItem] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewProdInfo(prodId));
    }, []);

    useEffect(() => {
        if (rt === 200) {
            setProdItem(item[0]);
        }
        console.log(prodItem);
    }, [item]);

    return (
        <>
            <ProdInfoContainer>
                {prodItem ? (
                    <ProdInfo>
                        <ProdInfoBox>
                            <ProdTitle>{prodItem.name}</ProdTitle>
                            {prodItem.thumbnail_photo ? (
                                <ProdImgs alt={prodItem.name} src={prodItem.thumbnail_photo} />
                            ) : (
                                <ProdImgs alt="이미지 준비중" src={NoImg} />
                            )}
                        </ProdInfoBox>
                        <ProdInfoBox>
                            <ProdDetail>
                                <RatingText>평점</RatingText>
                                <RatingScoreText>{prodItem.stars_avg.toFixed(1)}</RatingScoreText>
                                <ReviewCountText>({prodItem.review_count})</ReviewCountText>
                                <Stars starCount={Math.floor(prodItem.stars_avg)} starSize="40px"></Stars>
                            </ProdDetail>
                        </ProdInfoBox>
                    </ProdInfo>
                ) : (
                    <ProdInfo>
                        <ProdInfoBox>
                            <ProdTitle>준비중</ProdTitle>
                            <ProdImgs alt="이미지 준비중" src={NoImg} />
                        </ProdInfoBox>
                        <ProdInfoBox>
                            <ProdDetail>
                                <RatingText>평점</RatingText>
                                <RatingScoreText>0.0</RatingScoreText>
                                <ReviewCountText>(0)</ReviewCountText>
                                <Stars starCount={Math.floor(5)} starSize="40px"></Stars>
                            </ProdDetail>
                        </ProdInfoBox>
                    </ProdInfo>
                )}
            </ProdInfoContainer>
        </>
    );
};

export default ProdReviewInfo;

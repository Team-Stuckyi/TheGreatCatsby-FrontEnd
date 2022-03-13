/**
 * @filename    : ProdReview.js
 * @author      : 김우영 (https://github.com/0x000613)
 * @description : 구매 후기 (리뷰) 출력 컴포넌트
 */

// Core Modules
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Stars from '../common/Stars';
import ReviewList from '../common/ReviewList';

// 구매후기, 구매후기 더보기
const ReviewContainer = styled('div')`
    margin-top: 50px;
    position: relative;
`;

const ReviewTitle = styled('h2')`
    font-size: 1.125rem;
    line-height: 1.75rem;
    display: inline-block;
    margin-bottom: 5px;
`;

const ReviewPlus = styled('span')`
    display: inline-block;
    position: absolute;
    color: var(--black) !important;
    top: 5px;
    left: 70px;
    width: 23px;
    height: 23px;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: bold;
`;

const StarContainer = styled('div')`
    height: auto;
    width: 1138px;
    padding: 30px;
    border: 1px solid var(--gray300);
    border-top: 2px solid var(--gray600);
`;

const StarBox = styled('div')`
    position: relative;
    margin-bottom: 20px;
`;

const StarAvgText = styled('span')`
    position: absolute;
    display: inline-block;
    top: 0;
    left: 135px;
    font-weight: bold;
    font-size: 1.125rem;
`;

const ReviewCountText = styled('span')`
    position: absolute;
    display: inline-block;
    top: 0;
    left: 182px;
`;

const ProdReview = ({ review_data, stars_avg = '4.8', review_count = '(1,842)', stars = 4, star_size = '24px', prod_id }) => {
    return (
        <ReviewContainer>
            <ReviewTitle>구매후기</ReviewTitle>
            <Link to={`/product/${prod_id}/review`}>
                <ReviewPlus>+</ReviewPlus>
            </Link>
            <StarContainer>
                <StarBox>
                    <Stars starCount={stars} starSize={star_size} />
                    <StarAvgText>{stars_avg}</StarAvgText>
                    <ReviewCountText>{review_count}</ReviewCountText>
                </StarBox>
                <ReviewList reviewData={review_data} />
            </StarContainer>
        </ReviewContainer>
    );
};

export default ProdReview;

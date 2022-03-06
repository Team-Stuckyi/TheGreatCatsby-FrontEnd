/**
 * @filename    : Review.js
 * @author      : 이병민 (https://github.com/Byeongminlee)
 * @description : 리뷰 목록 페이지
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'components/common/Container';
import Footer from 'components/users/Footer';
import Header from 'components/users/Header';
import ProdReviewInfo from 'components/users/ProdReviewInfo';
import ReviewList from 'components/common/ReviewList';
import Pagination from 'components/common/Pagination';
import ReviewWrite from 'components/users/ReviewWrite';
import { getReviewList } from 'slices/users/ReviewListSlice';

const PaginationContainer = styled.div`
    text-align: center;
    width: 1200px;
    margin: 50px auto;
`;

const Review = () => {
    let { prodId } = useParams();
    const [reviewData, setReviewData] = useState([]);
    const { rt, rtmsg, item, loading } = useSelector(state => state.reviewDataList);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [reviewDataFilter, setReviewDataFilter] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewList(prodId));
    }, []);

    useEffect(() => {
        if (rt === 200) {
            setReviewData(item);
        }
    }, [item]);

    useEffect(() => {
        setTotal(reviewData.length);
        setReviewDataFilter(reviewData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
    }, [reviewData, page]);

    return (
        <>
            <Header />
            <Container>
                <ProdReviewInfo prodId={prodId} />
                <ReviewWrite prodId={prodId} />
                <ReviewList reviewData={reviewDataFilter} />
                <PaginationContainer>
                    <Pagination total={total} limit={limit} page={page} setPage={setPage} />
                </PaginationContainer>
            </Container>
            <Footer />
        </>
    );
};

export default Review;

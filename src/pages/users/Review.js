import React, { useEffect, useState } from 'react';
import { getReviewProdList } from 'slices/users/ReviewProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Container from 'components/common/Container';
import Footer from 'components/users/Footer';
import Header from 'components/users/Header';
import ProdReviewInfo from 'components/users/ProdReviewInfo';
import ReviewList from 'components/common/ReviewList';
import Pagination from 'components/common/Pagination';
import ReviewWrite from 'components/users/ReviewWrite';

const PaginationContainer = styled.div`
    text-align: center;
    width: 1200px;
    margin: 50px auto;
`;

const Review = () => {
    useEffect(() => console.clear(), []);

    const { rt, rtmsg, item, loading } = useSelector(state => state.reviewprod);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewProdList());
    }, []);

    console.log('value', item);

    const [test, setTest] = useState([30, 10, 1, 1]);
    return (
        <>
            <Header />
            <Container>
                <ProdReviewInfo />
                <ReviewWrite />
                <ReviewList />
                <PaginationContainer>
                    <Pagination total={test[0]} limit={test[1]} page={test[2]} setpage={test[3]} />
                </PaginationContainer>
            </Container>
            <Footer />
        </>
    );
};

export default Review;

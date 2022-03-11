import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getReviewProdInfo } from 'slices/users/ReviewProdInfoSlice';
import { getReviewList } from 'slices/users/ReviewListSlice';

import Header from 'components/users/Header';
import Footer from 'components/users/Footer';

import ProdBuy from 'components/users/ProdBuy';
import ProdInfo from 'components/users/ProdInfo';
import ProdImg from 'components/users/ProdImg';
import ProdReview from 'components/users/ProdReview';

const ProdListContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

// 3자리단위 콤마찍기 함수 구현
function setCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const ProdList = () => {
    let { prod_id } = useParams();
    const dispatch = useDispatch();

    // ReviewData
    const [reviewData, setReviewData] = useState([]);

    // ProdInfo
    const [prodInfoData, setProdInfoData] = useState([]);

    // console.log(useSelector(state => state.reviewDataList));
    // const reviewList = useSelector(state => state.reviewDataList);

    const reviewList = useSelector(state => state.reviewDataList);
    const reviewProdInfo = useSelector(state => state.reviewProdInfo);

    useEffect(() => {
        dispatch(getReviewList(prod_id));
        dispatch(getReviewProdInfo(prod_id));
    }, [prod_id, dispatch]);

    useEffect(() => {
        // Set State
        setReviewData(reviewList.item);
    }, [reviewList]);

    useEffect(() => {
        // Set State
        setProdInfoData(reviewProdInfo.item);
    }, [reviewProdInfo]);

    console.log(reviewData[0]);
    if (reviewData[0] && prodInfoData[0])
        return (
            <>
                <Header />
                <ProdListContainer>
                    <ProdBuy
                        prodName={prodInfoData[0].name}
                        prodSellPrice={setCommas(prodInfoData[0].price)}
                        prodThumbnailImage={prodInfoData[0].thumbnail_photo}
                    />
                    <ProdInfo prod_characteristic={prodInfoData[0].prod_feature} prod_explain={prodInfoData[0].prod_info} />
                    <ProdImg prodInfoImageURL={prodInfoData[0].info_photo} />
                    <ProdReview review_data={[reviewData[0], reviewData[1]]} prod_id={prod_id} />
                </ProdListContainer>
                <Footer />
            </>
        );
    // Loading
    else return <></>;
};

export default ProdList;

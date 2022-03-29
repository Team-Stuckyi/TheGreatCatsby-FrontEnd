import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getReviewProdInfo } from 'slices/users/ReviewProdInfoSlice';
import { getReviewList } from 'slices/users/ReviewListSlice';

import Header from 'components/users/Header';
import Footer from 'components/users/Footer';
import Loading from 'components/common/Loading';

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

    const reviewList = useSelector(state => state.reviewDataList);
    const reviewProdInfo = useSelector(state => state.reviewProdInfo);

    useEffect(() => {
        dispatch(getReviewList(prod_id));
        dispatch(getReviewProdInfo(prod_id));
    }, [prod_id, dispatch]);

    useEffect(() => {
        // Set State
        setReviewData(reviewList.item);
    }, [reviewList, prod_id]);

    useEffect(() => {
        // Set State
        setProdInfoData(reviewProdInfo.item);
    }, [reviewProdInfo]);

    if (reviewProdInfo.loading) return <Loading />;

    if (prodInfoData) console.log(prodInfoData[0]);

    if (prodInfoData[0])
        return (
            <>
                <Header />
                <ProdListContainer>
                    <ProdBuy
                        prodName={prodInfoData[0].name}
                        prodSellPrice={setCommas(prodInfoData[0].price)}
                        prodThumbnailImage={prodInfoData[0].thumbnail_photo}
                        reviewCount={prodInfoData[0].review_count.toLocaleString()}
                        starCount={prodInfoData[0].stars_avg}
                    />
                    <ProdInfo prod_characteristic={prodInfoData[0].prod_feature} prod_explain={prodInfoData[0].prod_info} />
                    <ProdImg prodInfoImageURL={prodInfoData[0].info_photo} />
                    {/* 리뷰 데이터가 존재 할 경우 리뷰 리스트 출력 */}
                    {reviewData[0] && (
                        <ProdReview
                            review_data={[reviewData[0], reviewData[1]]}
                            isProdDataNull={false}
                            prod_id={prod_id}
                            stars={prodInfoData[0].stars_avg}
                            review_count={'(' + prodInfoData[0].review_count.toLocaleString() + ')'}
                        />
                    )}
                    {/* 리뷰 데이터가 존재하지 않을 경우 없다고 출력 */}
                    {!reviewData[0] && <ProdReview isProdDataNull={true} prod_id={prod_id} />}
                </ProdListContainer>
                <Footer />
            </>
        );
    // Loading
    else return <></>;
};

export default ProdList;

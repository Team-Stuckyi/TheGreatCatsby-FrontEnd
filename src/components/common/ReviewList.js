/**
 * @filename    : ReviewList.js
 * @author      : 이슬기 (https://github.com/abcabcp)
 * @description : 서버에서 연동한 reviews를 화면에 출력하는 공통 컴포넌트
 */

import ReviewCard from 'components/common/ReviewCard';

const ReviewList = ({ reviewData }) => {
    return <>{reviewData ? reviewData.map(item => <ReviewCard key={item.review_id} ReviewObj={item} />) : <></>}</>;
};

export default ReviewList;

/**
 * @filename    : ReviewList.js
 * @author      : 이슬기 (https://github.com/abcabcp)
 * @description : 서버에서 연동한 reviews를 화면에 출력하는 공통 컴포넌트 
 */

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ReviewCard from "./ReviewCard";

const ReviewList = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('address');
                setReview(response.data.item);
            } catch (err) {
                console.log(err);
                alert("연동 실패");
            }
        })();
    }, []);

    return (
        <div>
            {review.map((item) => (
                <ReviewCard key={item.id} ReviewObj={item} />
            ))}
        </div>
    )
}

export default ReviewList;
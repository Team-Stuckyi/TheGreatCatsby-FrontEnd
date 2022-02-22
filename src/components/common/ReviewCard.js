import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styled, { css } from "styled-components";

const ReviewContainer = styled.div`
        display: flex;

        ${(props) => props.infoContainer && css`
            flex-direction: column;
            margin-left: 30px;
        `}

        ${(props) => props.container && css`
            padding-bottom: 20px;
            margin-top: 25px;
            border-bottom: 1px solid #c4c4c4;
        `}

        ${(props) => props.info && css`
            flex-direction: row;
        `}
        ${(props) => props.wrap && `
            display: inline-block;
            width: 118px;
            height: 118px;
            overflow: hidden;
        `}
`;

const ReviewUl = styled.ul`
            display: flex;
            flex-direction: row;
`;

const ReviewLi = styled.li`
    border-right: 1px solid #c4c4c4;
    color: #a3a3a3;
    padding: 0 7px 0 7px;
    height: 20px;
    font-size: 0.875rem;
    line-height: 1.25rem;

    &:last-child {
        border-right: none;
    }
`

const ReviewContents = styled.p`
    padding: 5px 0 5px 0;   
    ${(props) => props.name && css`
        color: #a3a3a3;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding-bottom: 15px;
    `}
`;

//상품 페이지나 기타 등등에서 ProdId를 받아와야 한다.

const ReviewCard = ( { ProdId } ) => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://121.160.207.51/reviews/look');
                setReview(response.data);
            } catch (err) {
                console.log(err);
                alert("연동 실패");
            }
        })();
    }, []);

    const result = review.item;
    //만약 프롭스로 받은 ProdId와 서버에서 받은 ProdId가 같을 때,,,?
    // => 여기서 setReview에 들어있는 prod_id와 비교가 가능해야 하는데 prod_id가 테이블에 없기에 비교가 힘듬.
    /**
     * const [prodId, setProdId] = useState("")
     * const prodId = axios.get("~~~~~~")
     * 
     * if(prodID === ProdId){
     *  리턴 값으로 띄워주는 코드
     * }
     */

    return (
        <div>
            {result?.map((item, index) => {
                return (
                    <ReviewContainer className="review-card" container={true} key={index}>
                        <ReviewContainer wrap={true}>
                            <img src={item.review_photo} style={{width: "118px"}}alt="리뷰이미지" />
                        </ReviewContainer>
                        <ReviewContainer infoContainer={true}>
                            <ReviewContainer info={true}>
                                <div className="review-info-star">
                                    {item.stars}
                                </div>
                                <ReviewUl>
                                    <ReviewLi>구매인증됨</ReviewLi>
                                    <ReviewLi>{item.write_date}</ReviewLi>
                                </ReviewUl>
                            </ReviewContainer>
                            <ReviewContents name={true} className="anonymous"> {item.name.substring(0,1)}*{item.name.substring(item.name.length-1)} </ReviewContents>
                            <ReviewContents className="text-base">{item.review_text}</ReviewContents>
                        </ReviewContainer>
                    </ReviewContainer>
                )
            })}
        </div>
    );
}

export default ReviewCard;

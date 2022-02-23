/**
 * @filename    : ReviewCard.js
 * @author      : 이슬기 (https://github.com/abcabcp)
 * @description : 상위 컴포넌트인 ReviewList에 들어갈 항목을 정의한 스타일 컴포넌트
 */

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

/**
 * @param ReviewObj 상위 컴포넌트인 Reviewlist에서 전달된 props
 */

const ReviewCard = ( { ReviewObj } ) => { 
    return (
        <ReviewContainer className="review-card" container={true}>
            {/* 리뷰 이미지 */}
            <ReviewContainer wrap="{true}">
                <img src={ReviewObj.review_photo} style={{width: "118px"}}alt="리뷰이미지" />
            </ReviewContainer>
            <ReviewContainer infoContainer={true}>
                <ReviewContainer info={true}>
                    {/* 평점 */}
                    <div className="review-info-star">
                        {ReviewObj.stars}
                    </div>
                    <ReviewUl>
                        <ReviewLi>구매인증됨</ReviewLi>
                        {/* 작성 일자 */}
                        <ReviewLi>{ReviewObj.write_date}</ReviewLi>
                    </ReviewUl>
                </ReviewContainer>
                {/* 작성자 */}
                <ReviewContents name="{true}" className="anonymous"> {ReviewObj.name.substring(0,1)}*{ReviewObj.name.substring(ReviewObj.name.length-1)} </ReviewContents>
                {/* 리뷰 작성글 */}
                <ReviewContents className="text-base">{ReviewObj.review_text}</ReviewContents>
            </ReviewContainer>
        </ReviewContainer>
    );
}

export default ReviewCard;
// Core
import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * @param   {string} width 가로 길이 (기본 100%)
 * @param   {string} bgColor 버튼 배경 색 (기본 #f76b8a)
 * @param   {string} fontColor  텍스트 색 (기본 #fff)
 * @param   {string} border 버튼 선 (기본 none)
 * @param   {string} size 버튼 높이 (기본 lg:12px, md:8px, sm:4px)
 * @param   {string} hover 버튼 hover (기본 밝기 95%), off를 전달하여 hover 사용 없애기, hover의 밝기는 props값으로 조절 가능
 */

// Component
import Button from 'components/common/Button';

// Resource
import NotFoundImage from 'img/common/ImageNotFound.png';

const ImageContainer = styled.div`
    margin-top: 40px;
    text-align: center;
`;

const InfoImage = styled.div`
    height: 100%;
    max-height: ${props => {
        if (props.isHidden) return '700px';
        else if (!props.isHidden) return '100%';
    }};
    overflow: hidden;
`;

const ProdImg = ({ prodInfoImageURL = NotFoundImage }) => {
    // 상품 정보 더보기 버튼 State
    const [viewMore, setViewMore] = useState(true);
    // 상품 정보 더보기 State를 변경할 함수
    const onClickViewMore = () => setViewMore(viewMore ? false : true);

    return (
        <ImageContainer>
            <InfoImage isHidden={viewMore}>
                <div className="content">
                    <img src={prodInfoImageURL} alt="상품 상세정보 이미지" />
                </div>
            </InfoImage>
            <Button
                width="50%"
                bgColor="var(--white)"
                fontColor="var(--primary)"
                border="var(--primary) 2px solid"
                style={{ position: 'relative', marginTop: '25px' }}
                onClick={onClickViewMore}
            >
                상품정보 더보기
            </Button>
        </ImageContainer>
    );
};

export default ProdImg;

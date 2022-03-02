/**
 * @filename    : ProdCard.js
 * @author      : 이슬기 (https://github.com/abcabcp)
 * @description : 상위 컴포넌트인 ListBar에게 전달받은 상품 정보를 토대로 상품 카드를 출력하는 컴포넌트
 */

import styled from 'styled-components';
import Stars from 'components/common/Stars';

const CardListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 250px);
`;

const Card = styled.div`
    padding-bottom: 50px;
    position: relative;
    height: 340px;
`;

const Img = styled.img`
    width: 200px;
    border-radius: 15px;
`;

const Info = styled.div`
    width: 200px;
    padding: 0px 7px;
`;

const Price = styled.p`
    font-family: InfinitySansR-CondBold;
    font-size: 17px;
    line-height: 23px;
    position: absolute;
    right: 4px;
    top: 0;
`;

const Flex = styled.div`
    width: 200px;
    position: absolute;
    top: 260px;
`;

const ProdCard = ({ content, page }) => {
    const offset = (page - 1) * 20;
    return (
        <>
            <CardListContainer>
                {content?.slice(offset, offset + 20).map((content, i) => {
                    return (
                        <Card key={i}>
                            <Img src={content.thumbnail_photo} alt="썸네일 이미지" />
                            <Info>
                                <p style={{ fontSize: '14px' }}>{content.name}</p>
                                <Flex>
                                    <Stars starCount={Math.round(content.stars_avg)} starSize={17} />
                                    <Price>{content.price.toLocaleString()}원</Price>
                                </Flex>
                            </Info>
                        </Card>
                    );
                })}
            </CardListContainer>
        </>
    );
};

export default ProdCard;

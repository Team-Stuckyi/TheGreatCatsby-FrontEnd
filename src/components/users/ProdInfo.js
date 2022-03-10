/**
 * @filename    : ProdInfo.js
 * @author      : 김우영 (https://github.com/0x000613)
 * @description : 상품정보 출력 컴포넌트
 */

/* 사용 예시
    <ProdInfo
        prod_explain="츄통령 바삭츄 동결건조 닭가슴살은 닭가슴살 100%를 사용하여 만든 동결건조 간식입니다. 동결 과정을 거쳐 원물의 영양소 및 풍미를 유지하고 있으며, 동결 후 2단계 진공 건조를 통해 보존성, 안전성, 신선함을 잡았습니다."
        // * prod_characteristic 인자값으로는 상품 특징이 하나이더라도 반드시 배열로 값을 할당해야합니다. *
        prod_characteristic={[
            '닭가슴살 100%를 사용하여 만든 동결건조 간식',
            '저지방 고단백으로 풍부한 영양 공급 가능',
            '필수 아미노산, 타우린, 비타민A, B 함유',
        ]}
    />
*/

import styled from 'styled-components';

const ProdDetailInfo = styled.div`
    margin-top: 30px;
`;

const ProdTitle = styled.h2`
    margin-bottom: 5px;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: bold;
`;

const ProdInfoBox = styled.div`
    height: auto;
    width: 1138px;
    padding: 30px;
    border: 1px solid var(--gray300);
    border-top: 2px solid var(--gray600);
`;

const ProdSubtitle = styled.span`
    font-weight: bold;
`;

const ProdExplainBox = styled.div`
    padding-bottom: 20px;
`;

const ProdInfo = ({ prod_explain = '상품 설명이 비어있습니다.', prod_characteristic = '상품 특징이 비어있습니다.' }) => {
    return (
        <ProdDetailInfo>
            <ProdTitle>상품정보</ProdTitle>
            <ProdInfoBox>
                <ProdSubtitle>설명</ProdSubtitle>
                <ProdExplainBox>{prod_explain}</ProdExplainBox>
                <ProdSubtitle>특징</ProdSubtitle>
                {/*
                    상품 특징이 배열일 경우에만 화면에 렌더링
                    (배열을 순회하며 한줄씩 <p> 태그에 넣어 렌더링)
                */}
                <div>
                    {typeof prod_characteristic === 'object'
                        ? // prod_characteristic의 자료형이 object(배열)일 경우
                          prod_characteristic.map((content, key) => <p key={key}>- {content} </p>)
                        : // prod_characteristic의 자료형이 object(배열)이 아닐 경우
                          '상품 특징이 비어있습니다.'}
                </div>
            </ProdInfoBox>
        </ProdDetailInfo>
    );
};

export default ProdInfo;

import React from 'react';
import styled from 'styled-components';

import SuccessImg from 'img/user/regsuccess/regsuccess.jpg';
import Button from 'components/common/Button';


const RegSuccessWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RegSuccessImage = styled.div`
    margin: 30px 0 30px 0;

    img {
        width: 600px;
    }
`;

const RegSuccessText = styled.div`
    p {
        font-size: 1.5rem;
        line-height: 2rem;
    }
`;

const HomeButton = styled.div`
    margin-top: 50px;

    a {
        font-size: 1rem;
    }
`;

const Success = () => {
    return (
        <RegSuccessWrapper>
            <RegSuccessImage>
                <img src={SuccessImg} alt="회원가입 환영 이미지" />
            </RegSuccessImage>
            <RegSuccessText>
                <p>위대한 캣츠비에 오신것을 환영합니다!!</p>
            </RegSuccessText>
            <HomeButton>
                <Button width='400px' size='12px' bgColor={'var(--primary)'}>
                    <a href="pages/users/main">홈으로</a>
                </Button>
            </HomeButton>
        </RegSuccessWrapper>
    );
};

export default Success;
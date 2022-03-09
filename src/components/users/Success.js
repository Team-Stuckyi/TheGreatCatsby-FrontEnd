import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
    margin: 100px 0 30px 0;

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
    font-size: 1rem;
`;

const Success = () => {

    const navigate = useNavigate();
    
    const ClickHome = (e) => {
        navigate('/');
    }

    return (
        <RegSuccessWrapper>
            <RegSuccessImage>
                <img src={SuccessImg} alt="회원가입 환영 이미지" />
            </RegSuccessImage>
            <RegSuccessText>
                <p>위대한 캣츠비에 오신것을 환영합니다!!</p>
            </RegSuccessText>
            <HomeButton>
                <Button width='400px' size='12px' bgColor={'var(--primary)'} onClick={ClickHome}>
                        홈으로
                </Button>
            </HomeButton>
        </RegSuccessWrapper>
    );
};

export default Success;
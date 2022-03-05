import React from 'react';
import styled from 'styled-components';
import loadingImg from 'img/common/Loading.gif';
import { keyframes } from 'styled-components';

const Containers = styled.div`
    margin: 250px auto;
`;

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const LoadingImged = styled.img`
    border-radius: 100%;
    width: 140px;
    height: 140px;
`;
const LoadingCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border: 10px solid #fff;
    border-radius: 10em;
    border-top: 10px solid var(--primary);

    animation-name: spinCircle;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    @keyframes spinCircle {
        from {
            transform: translate(-50%, -50%) rotate(0);
        }
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`;

const fadein = keyframes`
    0%   { opacity: 0; }
    100% { opacity: 1; }
`;

const LoadingText = styled.span`
    letter-spacing: 4px;
    padding: 10px 0;
    animation: ${fadein} 1.5s ease-in alternate infinite;
`;

const Loading = () => {
    return (
        <Containers>
            <LoadingContainer>
                <LoadingCircle />
                <LoadingImged src={loadingImg} alt="로딩 이미지" />
            </LoadingContainer>
            <LoadingContainer>
                <LoadingText>로 딩 중 . . .</LoadingText>
            </LoadingContainer>
            <LoadingContainer>
                <p>잠시만 기다려 주세요.</p>
            </LoadingContainer>
        </Containers>
    );
};

export default Loading;

import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';

const AlertDiv = styled.div`
position: fixed;
z-index: 2000;
top: 30%;
left: calc(50% - 200px);
`;

const AlertContainer = styled.div`
position: relative;
width: 400px;
height: 200px;
background-color: var(--white);
border-radius: 5px;
box-shadow: 5px 5px 15px var(--gray400);
`;

const AlertText = styled.div`
width: 300px;
height: 80px;
position: absolute;
top: 75px;
left: 50px;
text-align: center;
`;

const BgBlack = styled.div`
position: fixed;
top: 0;
z-index: 1500;
width: 100%;
height: 100%;
background-color: var(--gray600);
opacity: 0.1;
`;

const Alert = ({ text }) => {
    return (
        <AlertDiv>
            <AlertContainer>
                <AlertText >
                    {text}
                </AlertText>
                <Button width='300px'>확인</Button>
            </AlertContainer>
            <BgBlack />
        </AlertDiv>
    )
};

export default Alert

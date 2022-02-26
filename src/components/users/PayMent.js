import React from 'react';
import styled from 'styled-components';
import Toss from 'img/toss-logo.png';
import Kakao from 'img/kakaopay-logo.png';

const Wrapper = styled.div`
width: 100%;
height: 300px;
`;
const Container = styled.div`
width: 1200px;
`;
const TextBox = styled.div`
width: 1100px;
height: 50px;
margin-top: 20px;
    p {
        font-family: InfinitySansR-Bold;
        font-size: 18px;
    }
`;
const RadioBox = styled.div`
width: 1100px;
margin-bottom: 30px;
    input {
        margin-right: 20px;
    }
`;

const PayMent = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <TextBox>
                        <p>결제방법</p>
                    </TextBox>
                    <RadioBox>
                        <input type="radio" />
                        <img src={Toss} width="80px" />
                    </RadioBox>
                    <RadioBox>
                        <input type="radio" />
                        <img src={Kakao} width="80px" />
                    </RadioBox>
                </Container>
            </Wrapper>
        </>
    )
}

export default PayMent;
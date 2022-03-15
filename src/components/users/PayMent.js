import React, { useState } from 'react';
import styled from 'styled-components';
import Toss from 'img/toss-logo.png';
import Kakao from 'img/kakaopay-logo.png';

const Wrapper = styled.div`
width: 100%;
height: 300px;
`;
const Container = styled.div`
width: 1200px;
margin-left: 4px;
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



const PayMent = ({ marvel, setMarvel }) => {

    // radio버튼 활성 & 비활성

    const handleClickRadiobutton = e => {
        var check = e.target.value;
        setMarvel(check)
    }
    console.log(marvel);
    return (
        <>
            <Wrapper>
                <Container>
                    <TextBox>
                        <p>결제방법</p>
                    </TextBox>
                    <form>
                        <RadioBox>
                            <input type="radio" value="Toss" checked={marvel === 'Toss'} onChange={handleClickRadiobutton}
                            />
                            <img src={Toss} width="80px" alt="토스" />
                        </RadioBox>
                        <RadioBox>
                            <input type="radio" value="Kakao" checked={marvel === 'Kakao'} onChange={handleClickRadiobutton}
                            />
                            <img src={Kakao} width="80px" alt="카카오" />
                        </RadioBox>
                    </form>
                </Container>
            </Wrapper>
        </>
    )
}

export default PayMent;
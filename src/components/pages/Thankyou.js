import React from 'react';
import Header from 'components/users/Header.js';
import Footer from 'components/users/Footer.js';
import PayAdress from 'components/users/PayAdress.js';
import ProdBill from 'components/common/ProdBill.js';
import Button from 'components/common/Button.js';
import styled from 'styled-components';

// 전체 div
const Wrapper = styled.div`
width: 100%;
height: 600px;
width: 1200px;
margin: 0 auto;
`;
// border를 위한 div
const Container = styled.div`
border: 1px solid var(--gray200);
width: 1200px;
margin-top: 80px;
padding-bottom: 40px;
`;
// Text를 감싸는 div
const Adress = styled.div`
height: 60px;
width: 1150px;
margin: 0 auto;
`;
// 주문결제 Text
const AdressTitle = styled.p`
font-size: 18px;
font-family: InfinitySansR-Bold;
margin-top: 20px;
`;
// float처리를 위한 div
const AdressSubtitle = styled.div`
float: right;
margin-top: -20px;
`;
// 주문결제 Text
const AdressSub = styled.p`
font-size: 14px;
float: left;
`;
// 결제완료 Text
const AdressSubtext = styled.p`
color: var(--primary);
float: right;
`;
// 주문접수 완료 Text
const AdressSuccess = styled.p`
font-size: 18px;
font-family: InfinitySansR-Bold;
text-align: center;
margin-bottom: 25px;
`;
const AdressCenter = styled.div`
width: 1100px;
margin: 0 auto;
`;
// 버튼 div
const ButtonBox = styled.div`
width: 420px;
height: 50px;
margin: 0 auto;
`;
// 버튼 Text
const ButtonText = styled.p`
font-size: 18px;
font-family: 'InfinitySansR-Regular';
`;
const ThankYou = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Container>
                    <Adress>
                        <AdressTitle>주문결제</AdressTitle>
                        <AdressSubtitle>
                            <AdressSub>01) 주문결제 &gt; &nbsp;
                                <AdressSubtext>02) 결제완료</AdressSubtext>
                            </AdressSub>
                        </AdressSubtitle>
                    </Adress>
                    <AdressSuccess>주문접수가 완료되었습니다.</AdressSuccess>
                    <AdressCenter>
                        <PayAdress
                            Receiver={'전찬민'}
                            Phone={'010 - 6601 - 37'}
                            Adress={'경기도 시흥시'}
                            PayMent={'카카오 페이 입금'}
                        />
                        <ProdBill proPrice={21000} delivery={3000} payPrice={24000} />
                    </AdressCenter>
                </Container>
            </Wrapper>
            <ButtonBox>
                <Button size={'lg'} width={'420px'}><ButtonText>쇼핑 계속하기</ButtonText></Button>
            </ButtonBox>
            <Footer />
        </>

    )
}

export default ThankYou;
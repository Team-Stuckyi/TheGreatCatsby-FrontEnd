import React from 'react';
import styled from 'styled-components';
import Input from 'components/common/Input.js';
import Button from 'components/common/Button.js';

const Wrapper = styled.div`
width: 100%;
`;

const Container = styled.div`
width: 1100px;
height: 350px;
border-bottom: 1px solid var(--gray500);
border-top: 1px solid var(--gray500);
margin-bottom: 20px;
`;

// 주소 div
const Adress = styled.div`
width: 1200px;
`;
// 주소 text div
const AdressText = styled.div`
width: 1100px;
height: 240px;
`;
// 주문접수 TextBox
const TextBox = styled.div`
width: 1100px;
float: left;
height: 30px;
margin-left: 20px;
margin-top: 20px;
`;
// 주문사항 Text
const PayText = styled.div`
font-size: 17px;
color: var(--gray400);
float: left;
width: 180px;
font-family: InfinitySansR-Regular;
`;
// Inpit div
const InputBox = styled.div`
width: 370px;
float: left;
`;
// Input과 Button이 같이있는 div
const InputButtonBox = styled.div`
width: 345px;
float: left;
position: relative;
margin-bottom: 10px;
`;
// Button div
const ButtonBox = styled.div`
width: 70px;
float: right;
margin-right: 5px;
margin-top: -4px;
`;
// 밑 2개 Input div
const InputsubBox = styled.div`
width: 370px;
margin-top: 10px;
margin-left: 180px;
`;
// 배송 요청사항 div
const AdressTextsub = styled.div`
width: 1100px;
height: 40px;
margin-top: 40px;
border-top: 1px solid var(--gray500);
`;
// 배송 요청사항 div
const AdressInfo = styled.div`
width: 1100px;
margin-left: 20px;
margin-top: 20px;
`;
// 배송 요청사항 text
const InfoText = styled.p`
font-size: 17px;
color: var(--gray400);
width: 180px;
float: left;
font-family: InfinitySansR-Regular;
`;
// Selector 박스 div
const AdressRequest = styled.div`
float: left;
`;
// select 박스
const Select = styled.select`
width: 378px;
height: 38px;
line-height: 38px;
text-indent: 5px;
color: var(--gray600);
margin-top: -20px;
font-family: InfinitySansR-Regular;
`;
const NewAdress = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <Adress>
                        <AdressText>
                            <TextBox>
                                <PayText>받는 사람</PayText>
                                <InputBox>
                                    <Input Inptype={'full'} Radius={'0px'} borderColor={'black'} placeholder={'받으시는 분의 성함을 입력하세요.'} />
                                </InputBox>
                            </TextBox>
                            <TextBox>
                                <PayText>휴대 전화</PayText>
                                <InputBox>
                                    <Input Inptype={'full'} Radius={'0px'} borderColor={'black'} placeholder={'휴대전화 번호를 입력하세요.'} />
                                </InputBox>
                            </TextBox>
                            <TextBox>
                                <PayText>배송 주소</PayText>
                                <InputButtonBox>
                                    <Input Inptype={'full'} Radius={'0px'} InpWidth='265px' borderColor={'black'} placeholder={'우편번호를 입력하세요.'} />
                                    <ButtonBox>
                                        <Button size={'lg'} width={'95px'}>우편번호</Button>
                                    </ButtonBox>
                                </InputButtonBox>
                                <InputsubBox>
                                    <Input Inptype={'full'} Radius={'0px'} borderColor={'black'} placeholder={'주소를 입력하세요.'} />
                                </InputsubBox>
                                <InputsubBox>
                                    <Input Inptype={'full'} Radius={'0px'} borderColor={'black'} placeholder={'상세주소를 입력하세요.'} />
                                </InputsubBox>
                            </TextBox>
                        </AdressText>
                        <AdressTextsub>
                            <AdressInfo>
                                <InfoText>배송 요청사항</InfoText>
                            </AdressInfo>
                            <AdressRequest>
                                <Select>
                                    <option value="0" selected>배송 요청 사항을 선택하세요.</option>
                                    <option value="1">부재 시 연락 부탁드려요.</option>
                                    <option value="1">문 앞으로 배송 부탁드려요.</option>
                                    <option value="1">배송 전 연락 부탁드려요.</option>
                                </Select>
                            </AdressRequest>
                        </AdressTextsub>
                    </Adress>
                </Container>
            </Wrapper>
        </>
    );
}

export default NewAdress;
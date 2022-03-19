/**
 * @filename    : NewAdress.js
 * @author      : 전찬민 (https://github.com/cksals3753)
 * @description : 신규배송지 컴포넌트
 */

import React from 'react';
import styled from 'styled-components';
import Input from 'components/common/Input.js';
import Button from 'components/common/Button.js';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { putAdressMember } from 'slices/users/NewMemberSlice.js';
import { getAdressMember } from 'slices/users/NewMemberSlice.js';

import DaumPostcode from 'react-daum-postcode';

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
height: 70px;
`;
// Button div
const ButtonBox = styled.div`
width: 70px;
float: right;
margin-right: 5px;
margin-top: -40px;
    >Button {
        height: 39px;
    }
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
width: 364px;
height: 38px;
line-height: 38px;
text-indent: 5px;
color: var(--gray600);
margin-top: -20px;
font-family: InfinitySansR-Regular;
`;
// 우편번호 저장 div
const AddressBox = styled.div`
width: 260px;
height: 70px;
border: 1px solid var(--black);
// 우편번호 text
    >p {
        font-size: 14px;
        padding: 10px;
        color: var(--gray500);
    }
`;
const NewAdress = ({ onaddress, setOnAddress, name, setName, phone, setPhone, addrr1, setAddrr1, addrr2, setAddrr2 }) => {

    let { addrId } = useParams();
    const { rt, rtmsg, item, loading } = useSelector(state => state.AdressMember);
    const [newAddress, setNewAdress] = React.useState([]);
    const dispatch = useDispatch();

    const onChangeAddress = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === 'rcname') {
            setName(value);
        } else if (name === 'rctel') {
            setPhone(value);
        } else if (name === 'rcaddr1') {
            setAddrr1(value);
        } else if (name === 'rcaddr2') {
            setAddrr2(value);
        }
        console.log(value);
    };

    React.useEffect(() => {
        dispatch(putAdressMember(addrId));
    }, [addrId]);

    React.useEffect(() => {
        dispatch(getAdressMember(addrId));
    }, [addrId]);

    React.useEffect(() => {
        setNewAdress(item);
    }, [item]);

    /** 우편번호 */
    const [addressDetail, setAddressDetail] = React.useState(''); // 상세주소

    const [isOpenPost, setIsOpenPost] = React.useState(false); // 팝업창
    // 팝업창 Open
    const onChangeOpenPost = () => {
        setIsOpenPost(!isOpenPost);
    };
    // 우편번호 상태값 저장
    const onCompletePost = (data) => {
        let extraAddr = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            if (extraAddr !== '') {
                setOnAddress(data.address + ` (${extraAddr})` + `(${data.zonecode})`);
            }
        }
        setAddressDetail(data.onaddress);
        setIsOpenPost(false);
        console.log(onaddress);
        console.log(data.zonecode);
    };

    React.useEffect(() => {
        console.log(onaddress);
    }, [onaddress]);
    // 팝업창 CSS
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "10%",
        width: "600px",
        height: "600px",
        padding: "7px",
        fontFamily: 'InfinitySansR-Regular',
        border: '1px solid black'
    };
    return (
        <>
            <Wrapper>
                <Container>
                    <Adress>
                        <AdressText>
                            <TextBox>
                                <PayText>받는 사람</PayText>
                                <InputBox>
                                    <Input Inptype={'full'} Radius={'0px'} borderColor={'black'} placeholder={'받으시는 분의 성함을 입력하세요.'} onChange={onChangeAddress} value={name} name='rcname' />
                                </InputBox>
                            </TextBox>
                            <TextBox>
                                <PayText>휴대 전화</PayText>
                                <InputBox>
                                    <Input Inptype={'full'} Radius={'0px'} borderColor={'black'} placeholder={'휴대전화 번호를 입력하세요.'} onChange={onChangeAddress} value={phone} name='rctel' />
                                </InputBox>
                            </TextBox>
                            <TextBox>
                                <PayText>배송 주소</PayText>
                                <InputButtonBox>
                                    <AddressBox>
                                        <p onChange={onChangeAddress} value={addrr1} name='rcaddr1' >{onaddress}</p>
                                    </AddressBox>
                                    <ButtonBox>
                                        <Button size={'lg'} width={'95px'} onClick={onChangeOpenPost} >우편번호</Button>
                                    </ButtonBox>
                                </InputButtonBox>
                                <InputsubBox>
                                    <Input Inptype={'full'} Radius={'0px'} borderColor={'black'} placeholder={'상세주소를 입력하세요.'} onChange={onChangeAddress} value={addrr2} name='rcaddr2' />
                                </InputsubBox>

                            </TextBox>
                        </AdressText>
                        <AdressTextsub>
                            <AdressInfo>
                                <InfoText>배송 요청사항</InfoText>
                            </AdressInfo>
                            <AdressRequest>
                                <Select>
                                    <option value="0">배송 요청 사항을 선택하세요.</option>
                                    <option value="1">부재 시 연락 부탁드려요.</option>
                                    <option value="1">문 앞으로 배송 부탁드려요.</option>
                                    <option value="1">배송 전 연락 부탁드려요.</option>
                                </Select>
                            </AdressRequest>
                        </AdressTextsub>
                        <div>
                            {isOpenPost ? (
                                <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />
                            ) : null}
                        </div>
                    </Adress>
                </Container>
            </Wrapper>
        </>
    );
}

export default NewAdress;
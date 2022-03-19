/**
 * @filename    : Showmethemoney.js
 * @author      : 전찬민 (https://github.com/cksals3753)
 * @description : 결제 페이지
 */

import React from 'react';
// 사용자 페이지 모듈
import Header from 'components/users/Header.js';
import Footer from 'components/users/Footer.js';
import ProdOrder from 'components/users/ProdOrder.js';
import NewAdress from 'components/users/NewAdress.js';
import RecentAdress from 'components/users/RecentAdress.js';
import PayMent from 'components/users/PayMent.js';
// 공통 컴포넌트 모듈
import ProdBill from 'components/common/ProdBill.js';
import Button from 'components/common/Button.js';

import styled from 'styled-components';
import axios from 'axios';
import { ServerUrl } from 'key';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getReviewProdInfo } from 'slices/users/ShowProdSlice.js';
import { getAdressMember } from 'slices/users/RecentMemberSlice.js';
import { postOrder } from 'slices/users/ShowOrderSlice.js';

// 전체 div
const Wrapper = styled.div`
height: 1000px;
width: 1200px;
margin: 0 auto;
margin-bottom: 350px;
`;

const Delivery = styled.p`
font-family: InfinitySansR-Bold;
font-size: 18px;
`;
// border를 위한 div
const Container = styled.div`
border: 1px solid var(--gray200);
width: 1200px;
margin-top: 80px;
padding-bottom: 40px;
`;
// 최근 배송지 Text
const DeliveryBox = styled.div`
width: 1100px;
height: 45px;
border-top: 1px solid var(--gray500);
margin-top: -2px;
    .btn {
        color: var(--black);
        background: var(--white);
        font-size: 14px;
        margin-left: 1px;
        border-radius: 0px;
    }
    .btn:first-child {
        margin-right: -2px;
    }
    // button 클릭시 배경 및 글자 색 변화
    .btn.active {
        color: var(--primary);
        background: var(--gray200);
        border-radius: 0px;
    }
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
// 주문완료 Text
const AdressSubtext = styled.p`
color: var(--primary);
float: left;
`;
const CenterBox = styled.div`
width: 1100px;
margin: 0 auto;
`;
// 버튼 div
const ButtonBox = styled.div`
width: 420px;
height: 50px;
margin: 0 auto;
text-align: center;
margin-bottom: 30px;
`;
// 결제하기 버튼 text
const ButtonText = styled.p`
font-family: 'InfinitySansR-Regular';
font-size: 14px;
padding-bottom: 20px;
`;
// 버튼 Text
const ButtonsubText = styled.p`
font-size: 18px;
font-family: 'InfinitySansR-Regular';
`;


const Showmethemoney = () => {

    /** 상품조회를 위해 값 받아오기 */
    let { prodId } = useParams();

    const { rt, rtmsg, item, loading } = useSelector(state => state.reviewProdInfo);
    const [orderItem, setOrderItem] = React.useState([]);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getReviewProdInfo(prodId));
    }, [prodId]);

    React.useEffect(() => {
        if (rt === 200) {
            setOrderItem(item[0]);
        }

    }, [item])

    /** RecentAdress의 값 받아오기 */
    const { rt2, rtmsg2, item2, loading2 } = useSelector(state => state.recentMember);
    const [recent, setRecent] = React.useState([]);

    const dispatch2 = useDispatch();

    React.useEffect(() => {
        dispatch2(getAdressMember(prodId));
    }, [prodId]);

    React.useEffect(() => {
        if (rt2 === 200) {
            setRecent(item2[0]);
        }
        console.log(item2);
    }, [item2])

    // 버튼 클릭시 컴포넌트 변화에 대한 useState
    const [view, setView] = React.useState(true)
    // PayMent에 보내는 useState
    const [marvel, setMarvel] = React.useState([]);

    const [ment, setMent] = React.useState([]);

    React.useEffect(() => {
        setMent(marvel);
    }, [ment]);
    console.log(marvel);
    // NewAdress에 보낼 useState
    const [save, setSave] = React.useState([]);

    const [onaddress, setOnAddress] = React.useState([]);

    React.useEffect(() => {
        setSave(onaddress);
    }, [save]);

    // 페이지 이동을 위한 navigate 추가
    const navigate = useNavigate()

    // NewAdress에 보낼 state
    const [name, setName] = React.useState()
    const [phone, setPhone] = React.useState()
    const [addrr1, setAddrr1] = React.useState()
    const [addrr2, setAddrr2] = React.useState()

    // 값 저장을 위한 onChange 함수
    const AddressPut = async () => {
        const formData = new FormData()
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('addrr1', addrr1);
        formData.append('addrr2', addrr2);

        dispatch(getAdressMember(formData));
    };

    /** 아임포트 결제 창  */
    React.useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }
    }, []);

    const onClickpayment = () => {
        const { IMP } = window;
        IMP.init('imp20942408');
        const data = {
            pg: `${marvel === 'Toss' ? 'tosspay' : 'kakaopay'}`,   // PG사
            pay_method: 'trans',  // 결제수단
            merchant_uid: `mid_${new Date().getTime()}`,
            name: `${orderItem.name}`,   // 상품명
            amount: `${orderItem.price + 3000}`,   // 상품가격 + 배송비
            custom_data: {
                name: '부가정보',
                desc: '세부 부가정보'
            },
            buyer_name: '전찬민',    // 구매자 이름
            buyer_tel: `${setView() === true ? recent.tel : phone}`,   // 구매자 번호
            buyer_email: '12@gmail.com',   // 구매자 이메일
            buyer_addr: `${setView() === true ? item2.addr1 : addrr1}`,    // 구매자 주소
            buyer_postalcode: '04042',    // 구매자 우편번호
            m_redirect_url: `/thankyou/${prodId}`
        };
        IMP.request_pay(data, callback);
        console.log(data);
    }

    const callback = (response) => {
        const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;
        if (success) {
            axios({
                url: 'thankyou',
                method: "post",
                headers: { "Content-type": "application/json" },
                data: {
                    imp_uid: response.imp_uid,
                    merchant_uid: response.merchant_uid,
                    pay_method: response.pay_method,
                    paid_amount: response.paid_amount,
                }
            }).then((data) => {
                switch (data.status) {
                    // case: "vbankIssued":
                    // break;
                    // case "success":
                    // break;
                }
            })
                .finally(() => {
                    navigate(`/thankyou/${prodId}`)
                })

            alert('결제 성공');
            console.log('성공');

        } else {
            alert(`결제 실패 : ${error_msg}`);
            console.log('실패');
        }
    }

    return (
        <>
            <Header />
            <Wrapper>
                <Container>
                    <Adress>
                        <AdressTitle>주문결제</AdressTitle>
                        <AdressSubtitle>
                            <AdressSub>
                                <AdressSubtext>01) 주문결제 &gt; &nbsp;</AdressSubtext>
                                02) 결제완료
                            </AdressSub>
                        </AdressSubtitle>
                    </Adress>
                    <CenterBox>
                        <Delivery>배송정보</Delivery>
                        <DeliveryBox>
                            <Button onClick={() => { setView(true) }} width={'118px'} className={`btn ${view === true ? 'active' : ''}`}>최근 배송지
                            </Button>
                            <Button onClick={() => { setView(false) }} width={'118px'} className={`btn ${view === false ? 'active' : ''}`}>신규 배송지
                            </Button>
                        </DeliveryBox>
                        <div>
                            {view ? <RecentAdress recent={recent} /> : <NewAdress
                                setOnAddress={setOnAddress} onaddress={onaddress} name={name} setName={setName} phone={phone} setPhone={setPhone} addrr1={addrr1} setAddrr1={setAddrr1} addrr2={addrr2} setAddrr2={setAddrr2}
                            />}
                        </div>
                        <ProdOrder orderItem={orderItem} />
                        <ProdBill proPrice={orderItem.price} delivery={3000} />
                        <PayMent setMarvel={setMarvel} marvel={marvel} />
                    </CenterBox>
                    <ButtonBox>
                        <ButtonText>위 주문을 확인하였으며 결제에 동의합니다.</ButtonText>
                        <Button size={'lg'} width={'420px'} onClick={() => {
                            onClickpayment()
                            AddressPut()
                        }} >
                            <ButtonsubText>결제하기</ButtonsubText>
                        </Button>

                    </ButtonBox>
                </Container>
            </Wrapper>
            <Footer />
        </>
    );
};

export default Showmethemoney;
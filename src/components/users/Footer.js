/**
 * @filename    : Footer.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 모든 사용자 페이지의 공통 footer 컴포넌트
 */

import React from 'react';
import styled from 'styled-components';

import InfoImage1 from 'img/footer/info-image1.png';
import InfoImage2 from 'img/footer/info-image2.png';
import InfoImage3 from 'img/footer/info-image3.png';
import InfoImage4 from 'img/footer/info-image4.png';
import SupportImage from 'img/footer/support.png';
import AwardImage1 from 'img/footer/award-image1.png';
import AwardImage2 from 'img/footer/award-image2.png';
import AwardImage3 from 'img/footer/award-image3.png';
import AwardImage4 from 'img/footer/award-image4.png';
import AwardImage5 from 'img/footer/award-image5.png';
import AwardImage6 from 'img/footer/award-image6.png';

const Body = styled.div`
    overflow-x: hidden;
`;

const FooterWrap = styled.footer`
    width: 100%;
    height: 300px;
    margin-top: 150px;
`;

const FooterTopContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: var(--primary);
`;

const FooterTop = styled.div`
    width: 1200px;
    height: 85px;
    background-color: var(--primary);
    display: block;
    margin: 0 auto;
`;

const FooterTopList = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    img {
        width: 300px;
    }
`;

const FooterBottomContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: var(--gray100);
`;

const FooterBottom = styled.div`
    height: 400px;
    background-color: var(--gray100);
    width: 1200px;
    margin: 0 auto;

    &.phone {
        display: inline;
        position: relative;
        bottom: 7px;
        left: 10px;          
    }

    &.opperation-time {
        display: block;
    }

`; 

const BottomInner = styled.div`
    width: 98%;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    justify-content: space-around;
`;

const FooterLeft = styled.div`
    &.phone {
        display: inline;
        position: relative;
        bottom: 7px;
        left: 10px;   
    }
`;

const FooterRight = styled.div`
    color: var(--gray400);
    ul {
        display: flex;
        flex-direction: column; 
    }
    li {
        display: flex;
        justify-content: flex-end;
    }
`;

const FooterAwards = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border-top: 2px solid var(--gray300);
        margin-bottom: 50px;
    }
    li {
        margin-top: 50px;
    }
    img {
        height: 50px;
        width: 100%;
    }
`;

const Copyright = styled.div`
    background-color: var(--gray300);
    padding: 15px 0 15px 0;
    text-align: center;

    p {
        display: inline;
    }
    a {
        color: var(--blue200);
        display: inline;
    }
    &.stuckyi {
        color: var(--primary);
        display: inline;
    }
`;




const Footer = () => {
    return (
        <Body>
            <FooterWrap>
                <FooterTopContainer>
                    <FooterTop>
                        <FooterTopList>
                            <ul>
                                <li><img src={InfoImage1} alt="위대한 캣츠비가 추구하는 일곱가지 가치" /></li>
                                <li><img src={InfoImage2} alt="신선한 사료와 간식 유통기한 책임제" /></li>
                                <li><img src={InfoImage3} alt="냐옹님 기다리시지 않게 주문시 총알 배송"/></li>
                                <li><img src={InfoImage4} alt="제품에 문제가 있나요? 불량 제품 환불 보장"/></li>
                            </ul>
                        </FooterTopList>
                    </FooterTop>
                </FooterTopContainer>
                    <FooterBottomContainer>
                        <FooterBottom>
                            <BottomInner>
                                <FooterLeft>
                                        <img src={SupportImage} alt="고객상담" />
                                        <p className="phone text-xl bold">1234-1234</p>
                                        <p className="text-sm opperation-time">운영 시간: 평일 10:00 ~ 18:00 / 주말, 공휴일 휴무</p>
                                </FooterLeft>
                                <FooterRight>
                                    <ul>
                                        <li className="bold text-2xl">
                                        위대한 캣츠비
                                        </li>
                                        <li className="text-sm">
                                        (주)팀스투키 대표이사:이병민 사업자등록번호:115-138-138-123 통신판매업:제2013-서울강남-1234호
                                        </li>
                                        <li className="text-sm">
                                        개인정보보호책임자:전찬민 주소:서울시 강남대로 W타워
                                        </li>
                                        <li className="text-sm">
                                        팩스:201234 이메일:abcdefg@gmail.com
                                        </li>
                                    </ul>
                                </FooterRight>
                            </BottomInner>
                        <FooterAwards>
                            <ul>
                                <li>
                                <img src={AwardImage1} alt="개인정보 보호 우수 사이트" />
                                </li>
                                <li>
                                <img src={AwardImage2} alt="세스코"/>
                                </li>
                                <li>
                                <img src={AwardImage3} alt="공정 거래 위원회"/>
                                </li>
                                <li>
                                <img src={AwardImage4} alt="한국 소비자원"/>
                                </li>
                                <li>
                                <img src={AwardImage5} alt="코모도 SSL"/>
                                </li>
                                <li>
                                <img src={AwardImage6} alt="SGI 서울 보증"/>
                                </li>
                            </ul>
                        </FooterAwards>
                    </FooterBottom>
                        <div className="copyright-container">
                            <Copyright>
                                <p>
                                    copyright <p className="stuckyi bold">Team STUCKYI</p> clone coding by 고양이대통령 power by <a href="https://github.com/Team-Stuckyi">https://github.com/Team-Stuckyi</a>
                                </p>
                            </Copyright>
                        </div>   
                </FooterBottomContainer>
            </FooterWrap>
        </Body>
    );
};

export default Footer;
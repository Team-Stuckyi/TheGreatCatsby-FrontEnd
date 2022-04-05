# TheGreatCatsby-FrontEnd

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/> <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>

<br>

## 👋 소개

고양이 용품 쇼핑몰 웹사이트 '위대한 캣츠비' 프론트엔드 프로젝트 입니다.<br> 해당 프로젝트의 백엔드는 '[위대한 캣츠비 백엔드 저장소](https://github.com/Team-Stuckyi/TheGreatCatsby-BackEnd)'에서 확인하실 수 있고, 프로젝트를 하면서 진행된 커뮤니케이션 방식에 관해서는 '[Team-Stuckyi](https://github.com/Team-Stuckyi/Team-Stuckyi#1-discord)'에서 확인하실 수 있습니다. <br>

<table>
    <tr>
        <td><a href="https://github.com/Team-Stuckyi/TheGreatCatsby-FrontEnd">Front-End</a></td>
        <td>
            <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
            <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
            <img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white"/>
            <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td><a href="https://github.com/Team-Stuckyi/TheGreatCatsby-BackEnd">Back-End</a></td>
        <td>
            <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
            <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/>
        </td>
    </tr>
        <tr>
        <td><a href="https://github.com/Team-Stuckyi/TheGreatCatsby-Database">Database</a></td>
        <td>
            <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
        </td>
    </tr>
</table>

<br />

## 👥 멤버

| ![bm](./readmeImg/members/bm.jpeg) | ![wy](./readmeImg/members/wy.png) | ![hj](./readmeImg/members/hj.jpeg) | ![sg](./readmeImg/members/sg.png) | ![cm](./readmeImg/members/cm.jpeg) |
| --- | --- | --- | --- | --- |
| <div align="center">[이병민](https://github.com/ByeongminLee)</div> | <div align="center">[김우영](https://github.com/0x000613)</div> | <div align="center">[노희재](https://github.com/heejj1206)</div> | <div align="center">[이슬기](https://github.com/abcabcp)</div> | <div align="center">[전찬민](https://github.com/cksals3753)</div> |

<br />

## 🚀 설치 및 실행

1.  설치

    -   프로젝트 클론

        ```sh
        git clone https://github.com/Team-Stuckyi/TheGreatCatsby-FrontEnd.git
        ```

    -   모듈 설치

        ```sh
        yarn install
        ```

2.  환경 변수 설정 <code>.env</code> 파일에 다음과 같이 정의

    > <code>sample.env</code> 파일 참조

    ```sh
    REACT_APP_SERVER_URL = "[서버주소]"
    ```

3.  실행
    ```sh
    yarn start
    ```

<br />

## 🔍사용자 페이지

### 🏷️ 메인페이지

-   구현 화면

    | <div align="center">기본 화면</div> |
    | --- |
    | 로그인 페이지, 각 상품 상세 정보 페이지로 접근이 가능함. 페이지네이션(화면당 상품 20개)이 적용되어 있으며, 페이지 넘김 시 스크롤이 최상단으로 고정됨. <br/><br/><img src="./readmeImg/users/mainPage/main.gif"> |

    | <div align="center">카테고리별 필터링<br />(전체/사료/모래/장난감/캣타워)</div> | <div align="center">조건별 정렬 <br />(최근 등록순/가격낮은순/가격높은순/리뷰 많은순)</div> |
    | --- | --- |
    | <img src="./readmeImg/users/mainPage/category.gif" /> | <img src="./readmeImg/users/mainPage/ascdesc.gif" /> |

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div> |
    | ------------------------------ | ---------------------------------------- | ------------------------------- |
    | 서버 연동                      | MainProductSlice                         | GET : /products/main            |
    | 공통 컴포넌트                  | Loading                                  | 로딩 시 출력                    |
    | 공통 컴포넌트                  | Container                                | 1200px 고정                     |
    | 공통 컴포넌트                  | Header                                   | 사용자 페이지 Header            |
    | 공통 컴포넌트                  | Footer                                   | 사용자 페이지 Footer            |
    | 공통 컴포넌트                  | Pagination                               | 한 페이지당 상품 20개 출력      |
    | 하위 컴포넌트                  | Tabs                                     | 카테고리 별 필터링 후 출력      |
    | 하위 컴포넌트                  | ListBar                                  | 조건별 필터링 후 출력           |
    | 하위 컴포넌트                  | ProdCard                                 | 각 상품 카드 디테일             |

---

<br />

### 🏷️ 상품 정보 페이지

-   구현 화면

    | <div align="center">기본 화면</div>                         | <div align="center">상품 수량 선택 기능</div>            |
    | ----------------------------------------------------------- | -------------------------------------------------------- |
    | <img src="./readmeImg/users/prodListPage/ProdListPage.gif"> | <img src="./readmeImg/users/prodListPage/ProdCount.gif"> |

    | <div align="center">작성된 리뷰가 존재할 경우</div>         | <div align="center">작성된 리뷰가 존재하지 않을 경우</div>      |
    | ----------------------------------------------------------- | --------------------------------------------------------------- |
    | <img src="./readmeImg/users/prodListPage/ExistReviews.jpg"> | <img src="./readmeImg/users/prodListPage/NoneExistReviews.jpg"> |

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div>    |
    | ------------------------------ | ---------------------------------------- | ---------------------------------- |
    | 서버 연동                      | ReviewListSlice                          | GET : /review/:prod_id             |
    | 서버 연동                      | ReviewProdInfoSlice                      | GET : /products/:prod_id           |
    | 공통 컴포넌트                  | Loading                                  | 로딩 시 출력                       |
    | 공통 컴포넌트                  | Container                                | 1200px 고정                        |
    | 공통 컴포넌트                  | Header                                   | 사용자 페이지 Header               |
    | 공통 컴포넌트                  | Footer                                   | 사용자 페이지 Footer               |
    | 공통 컴포넌트                  | Button                                   | 버튼 UI                            |
    | 하위 컴포넌트                  | ProdImg                                  | 상품이미지를 가져오는 컴포넌트     |
    | 하위 컴포넌트                  | ProdInfo                                 | 상품정보를 가져오는 컴포넌트       |
    | 하위 컴포넌트                  | ProdReview                               | 상품리뷰를 가져오는 컴포넌트       |
    | 하위 컴포넌트                  | ProdBuy                                  | 상품 구매(수량 선택등) UI 컴포넌트 |

    ***

<br />

### 🏷️ 리뷰 페이지

-   구현 화면

    | <div align="center">기본 화면</div>                 | <div align="center">리뷰 작성</div>                     |
    | --------------------------------------------------- | ------------------------------------------------------- |
    | <img src="./readmeImg/users/reviewPage/review.gif"> | <img src="./readmeImg/users/reviewPage/reviewPost.gif"> |

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div> |
    | ------------------------------ | ---------------------------------------- | ------------------------------- |
    | 서버 연동                      | ReviewListSlice                          | GET : /review/:prod_id          |
    | 서버 연동                      | ReviewProdInfoSlice                      | GET : /products/:prod_id        |
    | 공통 컴포넌트                  | Loading                                  | 로딩 시 출력                    |
    | 공통 컴포넌트                  | Container                                | 1200px 고정                     |
    | 공통 컴포넌트                  | Header                                   | 사용자 페이지 Header            |
    | 공통 컴포넌트                  | Footer                                   | 사용자 페이지 Footer            |
    | 공통 컴포넌트                  | Button                                   | 버튼 UI                         |
    | 하위 컴포넌트                  | ProdImg                                  | 상품이미지를 가져오는 컴포넌트  |
    | 하위 컴포넌트                  | ProdInfo                                 | 상품정보를 가져오는 컴포넌트    |
    | 하위 컴포넌트                  | ProdReview                               | 상품리뷰를 가져오는 컴포넌트    |
    | 하위 컴포넌트                  | ReviewWrite                              | 상품리뷰를 작성하는 컴포넌트    |

<br />

<br />

### 🏷️ 결제 페이지

-   구현 화면

    | <div align="center">최근배송지 화면</div>                   | <div align="center">신규배송지 화면</div>                      |
    | ----------------------------------------------------------- | -------------------------------------------------------------- |
    | <img src="./readmeImg/users/showmethemoneyPage/recent.png"> | <img src="./readmeImg/users/showmethemoneyPage/newadress.png"> |

<br />

-   결제 화면

    | <div align="center">토스결제</div>                        | <div align="center">카카오결제</div>                       |
    | --------------------------------------------------------- | ---------------------------------------------------------- |
    | <img src="./readmeImg/users/showmethemoneyPage/toss.png"> | <img src="./readmeImg/users/showmethemoneyPage/kakao.png"> |

<br />

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div> |
    | ------------------------------ | ---------------------------------------- | ------------------------------- |
    | 서버 연동                      | RecentMemberSlice                        | GET : /members/address/:user_id |
    | 서버 연동                      | ReviewProdInfoSlice                      | GET : /products/:prod_id        |
    | 서버 연동                      | NewMemberSlice                           | PUT : /members/newaddr/:user_id |
    | 서버 연동                      | ShowOrderSlice                           | POST : /orders/post             |
    | 공통 컴포넌트                  | Loading                                  | 로딩 시 출력                    |
    | 공통 컴포넌트                  | Container                                | 1200px 고정                     |
    | 공통 컴포넌트                  | Header                                   | 사용자 페이지 Header            |
    | 공통 컴포넌트                  | Footer                                   | 사용자 페이지 Footer            |
    | 공통 컴포넌트                  | Button                                   | 버튼 UI                         |
    | 공통 컴포넌트                  | ProdBill                                 | 결제 금액 영수증 컴포넌트       |
    | 하위 컴포넌트                  | ProdOrder                                | 상품정보를 가져오는 컴포넌트    |
    | 하위 컴포넌트                  | RecentAdress                             | 최근배송지를 가져오는 컴포넌트  |
    | 하위 컴포넌트                  | NewAdress                                | 신규배송지를 가져오는 컴포넌트  |
    | 하위 컴포넌트                  | PayMent                                  | 결제방법을 가져오는 컴포넌트    |

<br />

### 🏷️ 결제완료 페이지

-   구현 화면

    | <div align="center">기본 화면</div>                           |
    | ------------------------------------------------------------- |
    | <img src="./readmeImg/users/showmethemoneyPage/thankyou.png"> |

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div> |
    | ------------------------------ | ---------------------------------------- | ------------------------------- |
    | 서버 연동                      | RecentMemberSlice                        | GET : /members/address/:user_id |
    | 서버 연동                      | ReviewProdInfoSlice                      | GET : /products/:prod_id        |
    | 공통 컴포넌트                  | Loading                                  | 로딩 시 출력                    |
    | 공통 컴포넌트                  | Container                                | 1200px 고정                     |
    | 공통 컴포넌트                  | Header                                   | 사용자 페이지 Header            |
    | 공통 컴포넌트                  | Footer                                   | 사용자 페이지 Footer            |
    | 공통 컴포넌트                  | Button                                   | 버튼 UI                         |
    | 공통 컴포넌트                  | ProdBill                                 | 결제 금액 영수증 컴포넌트       |
    | 하위 컴포넌트                  | PayAdress                                | 주문사항을 가져오는 컴포넌트    |

***

<br />

### 🏷️ 회원가입 페이지

-   구현 화면
    | <div align="center">기본 화면</div> |
    ------------------------------------------------------- |
    |정규표현식으로 검사하여 형식이 맞지 않을 경우 경고 메세지가 하단에 표시되고, <br /> 형식과 맞을 경우 경고 메세지가 사라짐 <br />   <br /> <img src="./readmeImg/users/join/JoinAlert.gif"> |

    <br /> 

    | <div align="center">가입 완료</div> |
    ------------------------------------------------------- |
    |가입 완료 시 환영 페이지로 넘어가게 됨 <br /> <br /> <img src="./readmeImg/users/join/Join.gif"> |

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div>    |
    | ------------------------------ | ---------------------------------------- | ---------------------------------- |
    | 서버 연동                      | JoinSlice                          | POST : /members/join             |
    | 공통 컴포넌트                  | Container                                 | 1200px 고정                       |
    | 공통 컴포넌트                  | Loading                                | 로딩 시 출력                        |
    | 공통 컴포넌트                  | Header                                   | 사용자 페이지 Header               |
    | 공통 컴포넌트                  | Footer                                   | 사용자 페이지 Footer               |
    | 공통 컴포넌트                  | Logo                                   | 로고 UI                            |
    | 공통 컴포넌트                  | Input                                   | 인풋 UI                            |
    | 공통 컴포넌트                  | Button                                   | 버튼 UI                            |
                             

***
<br />

### 🏷️ 가입 완료 페이지
-   구현 화면
    | <div align="center">기본 화면</div> |
    ------------------------------------------------------- |
    | 홈으로 버튼 클릭 시 메인 화면으로 이동 <br />   <br /> <img src="./readmeImg/users/regSuccess/regSuccess.gif"> |

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div>    |
    | ------------------------------ | ---------------------------------------- | ---------------------------------- |
    | 공통 컴포넌트                  | Container                                 | 1200px 고정                       |
    | 공통 컴포넌트                  | Header                                   | 사용자 페이지 Header               |
    | 공통 컴포넌트                  | Footer                                   | 사용자 페이지 Footer               |
    | 하위 컴포넌트                  | Success                                   | 가입 완료 페이지 UI                            |

***
<br />

### 🏷️ 로그인 페이지
-   구현 화면
    | <div align="center">로그인 화면</div> |
    ------------------------------------------------------- |
    | 로그인 성공 시 메인 화면으로 자동 이동 <br />   <br /> <img src="./readmeImg/users/login/login.gif"> |
    
<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div>    |
    | ------------------------------ | ---------------------------------------- | ---------------------------------- |
    | 서버 연동                      | AppSlice                          | 로그인 된 회원 정보를 넘겨주기 위한 슬라이스             |
    | 서버 연동                      | LoginSlice                          | POST : /members/login             |
    | 공통 컴포넌트                  | Container                                 | 1200px 고정                       |
    | 공통 컴포넌트                  | Loading                                | 로딩 시 출력                        |
    | 공통 컴포넌트                  | Header                                   | 사용자 페이지 Header               |
    | 공통 컴포넌트                  | Footer                                   | 사용자 페이지 Footer               |
    | 공통 컴포넌트                  | Logo                                   | 로고 UI                            |
    | 공통 컴포넌트                  | Input                                   | 인풋 UI                            |
    | 공통 컴포넌트                  | Button                                   | 버튼 UI                            |

***
<br />

## 🔍관리자 페이지

### 🏷️ 관리자 로그인 페이지

-   구현 화면

    | <div align="center">기본 화면</div>                               |
    | ----------------------------------------------------------------- |
    | <img src="./readmeImg/admins/adminLogin/AdminLogin.gif?raw=true"> |

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div> |
    | ------------------------------ | ---------------------------------------- | ------------------------------- |
    | 서버 연동                      | adminLoginSlice, adminAppSlice           | POST : /admins/login            |
    | 공통 컴포넌트                  | Loading                                  | 로딩 시 출력                    |
    | 공통 컴포넌트                  | Container                                | 1200px 고정                     |
    | 공통 컴포넌트                  | Button                                   | 버튼                            |
    | 공통 컴포넌트                  | Input                                    | 입력폼                          |

---

<br />

### 🏷️ 관리자 회원 관리

-   구현 화면

    | <div align="center">회원 검색</div>                          | <div align="center">회원 탈퇴</div>                          |
    | ------------------------------------------------------------ | ------------------------------------------------------------ |
    | <img src="./readmeImg/admins/manageAdmin/adminSearch.gif" /> | <img src="./readmeImg/admins/manageAdmin/adminGetout.gif" /> |

    | <div align="center">회원 정보 수정</div>                   | <div align="center">수정된 값 없음</div>                      |
    | ---------------------------------------------------------- | ------------------------------------------------------------- |
    | <img src="./readmeImg/admins/manageAdmin/adminEdit.gif" /> | <img src="./readmeImg/admins/manageAdmin/adminWarning.gif" /> |

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div> |
    | --- | --- | --- |
    | 서버 연동 | AdminUserSlice | GET : /admins/all, <br />PUT : /admins/edit/:user_id, /admims/getout/user_id |
    | 공통 컴포넌트 | Loading | 로딩 시 출력 |
    | 공통 컴포넌트 | Container | 1200px 고정 |
    | 공통 컴포넌트 | Button | 버튼 |
    | 공통 컴포넌트 | Alert | 알림창 |
    | 공통 컴포넌트 | AdminHeader | 관리자 페이지 Header |
    | 공통 컴포넌트 | Title | 관리자 페이지 제목 |
    | 공통 컴포넌트 | Search | 관리자 페이지 검색 |
    | 공통 컴포넌트 | TableList | 관리자 페이지 테이블 |

---

<br />

### 🏷️ 일반 회원 관리

-   구현 화면

    | <div align="center">회원 검색</div>                            | <div align="center">회원 탈퇴</div>                            |
    | -------------------------------------------------------------- | -------------------------------------------------------------- |
    | <img src="./readmeImg/admins/manageMember/memberSearch.gif" /> | <img src="./readmeImg/admins/manageMember/memberGetout.gif" /> |

    | <div align="center">회원 정보 수정</div>                     | <div align="center">수정된 값 없음</div>                        |
    | ------------------------------------------------------------ | --------------------------------------------------------------- |
    | <img src="./readmeImg/admins/manageMember/memberEdit.gif" /> | <img src="./readmeImg/admins/manageMember/memberWarning.gif" /> |

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div> |
    | --- | --- | --- |
    | 서버 연동 | MemberSlice | GET : /members/all, <br />PUT : /members/edit/:user_id, /members/getout/user_id |
    | 공통 컴포넌트 | Loading | 로딩 시 출력 |
    | 공통 컴포넌트 | Container | 1200px 고정 |
    | 공통 컴포넌트 | Button | 버튼 |
    | 공통 컴포넌트 | Alert | 알림창 |
    | 공통 컴포넌트 | AdminHeader | 관리자 페이지 Header |
    | 공통 컴포넌트 | Title | 관리자 페이지 제목 |
    | 공통 컴포넌트 | Search | 관리자 페이지 검색 |
    | 공통 컴포넌트 | TableList | 관리자 페이지 테이블 |
    | 공통 컴포넌트 | Pagination | 한 페이지당 10명 출력 |

---

<br />

### 🏷️ 리뷰 관리

-   구현 화면

    | <div align="center">리뷰 검색</div>                            | <div align="center">리뷰 삭제</div>                            |
    | -------------------------------------------------------------- | -------------------------------------------------------------- |
    | <img src="./readmeImg/admins/manageReview/reviewSearch.gif" /> | <img src="./readmeImg/admins/manageReview/reviewDelete.gif" /> |

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div> |
    | ------------------------------ | ---------------------------------------- | ------------------------------- |
    | 서버 연동                      | AdminReviewListSlice                     | GET : /review/admin <br />             |
    | 서버 연동                      | ManageReview                             | DELETE : /reviews/del/:reviewId |
    | 공통 컴포넌트                  | Loading                                  | 로딩 시 출력                    |
    | 공통 컴포넌트                  | Container                                | 1200px 고정                     |
    | 공통 컴포넌트                  | Button                                   | 버튼                            |
    | 공통 컴포넌트                  | Alert                                    | 알림창                          |
    | 공통 컴포넌트                  | AdminHeader                              | 관리자 페이지 Header            |
    | 공통 컴포넌트                  | Title                                    | 관리자 페이지 제목              |
    | 공통 컴포넌트                  | Search                                   | 관리자 페이지 검색              |
    | 공통 컴포넌트                  | TableList                                | 관리자 페이지 테이블            |
    | 공통 컴포넌트                  | Pagination                               | 한 페이지당 10개 리뷰 출력      |

***

<br />

### 🏷️ 주문 관리

-   구현 화면

    | <div align="center">주문 검색<div> |
    --------------------------------- |
    | <img src="./readmeImg/admins/manageOrder/OrderSearch.gif" /> |
    <br />

    | <div align="center">주문 수정<div> |
    --------------------------------- |
    | <img src="./readmeImg/admins/manageOrder/ManageOrder.gif" /> |

<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div> |
    | ------------------------------ | ---------------------------------------- | ------------------------------- |
    | 서버 연동                      | ManageOrderSlice                     | GET : /orders/all <br /> PUT : /orders/:order_id <br /> 페이지네이션 계산            |
    | 공통 컴포넌트                  | Loading                                  | 로딩 시 출력                    |
    | 공통 컴포넌트                  | Container                                | 1200px 고정                     |
    | 공통 컴포넌트                  | AdminHeader                              | 관리자 페이지 Header            |
    | 공통 컴포넌트                  | Title                                    | 관리자 페이지 제목              |
    | 공통 컴포넌트                  | Search                                   | 관리자 페이지 검색              |
    | 공통 컴포넌트                  | TableListWithoutPagination                                | 관리자 페이지 테이블 UI            |
    | 공통 컴포넌트                  | Pagination                               | 페이지네이션 UI      |

***

<br />

### 🏷️ 상품 관리

-   구현 화면

    | <div align="center">상품 검색<div> |
    --------------------------------- |
    | <img src="./readmeImg/admins/manageProd/prodSearch.gif" /> |
    <br />

    | <div align="center">상품 수정<div> |
    --------------------------------- |
    | <img src="./readmeImg/admins/manageProd/manageProd.gif" /> |
    <br />

    | <div align="center">상품 추가<div> |
    --------------------------------- |
    | + 버튼 클릭 시 모달창 켜짐 <img src="./readmeImg/admins/manageProd/openAddProd.gif" />
    <br /> 모든 입력 사항을 기입하고 상품 등록 버튼을 누르면 alert 창 출력 후 페이지가 새로고침 됨 <br /> (업로드 가능한 파일 용량은 10MB로 제한) <img src="./readmeImg/admins/manageProd/AddProd.gif" />
    <br /> 마지막 항목으로 데이터가 추가된 모습 <img src="./readmeImg/admins/manageProd/AddProdSuc.gif" /> |
<br />

-   구성 요소

    | <div align="center">구분</div> | <div align="center">파일명 (\*.js)</div> | <div align="center">설 명</div> |
    | ------------------------------ | ---------------------------------------- | ------------------------------- |
    | 서버 연동                      | ManageProdSlice                     | GET : /products/all <br /> PUT : /products/:prod_id <br /> 페이지네이션 계산            |
    | 서버 연동                      | AddProdSlice                     | POST : /products  |
    | 공통 컴포넌트                  | Loading                                  | 로딩 시 출력                    |
    | 공통 컴포넌트                  | Container                                | 1200px 고정                     |
    | 공통 컴포넌트                  | AdminHeader                              | 관리자 페이지 Header            |
    | 공통 컴포넌트                  | Title                                    | 관리자 페이지 제목              |
    | 공통 컴포넌트                  | Search                                   | 관리자 페이지 검색              |
    | 공통 컴포넌트                  | TableListWithoutPagination                                | 관리자 페이지 테이블 UI            |
    | 공통 컴포넌트                  | Pagination                               | 페이지네이션 UI      |
    | 하위 컴포넌트                  | AddProd                               | 상품 추가 모달창      |

***

<br />

## ⚙️ 파일 구조

```
├── README.md
├── src
│   ├── components
│   │     ├── admin
│   │     │    ├── AddProd.js
│   │     │    ├── AdminHeader.js
│   │     │    ├── Search.js
│   │     │    ├── TableList.js
│   │     │    └── TableListWithoutPagination.js
│   │     ├── users
│   │     │    ├── Header.js
│   │     │    ├── Footer.js
│   │     │    ├── ListBar.js
│   │     │    ├── NewAdress.js
│   │     │    ├── PayAdress.js
│   │     │    ├── PayMent.js
│   │     │    ├── ProdBuy.js
│   │     │    ├── ProdCard.js
│   │     │    ├── ProdImg.js
│   │     │    ├── ProdInfo.js
│   │     │    ├── ProdOrder.js
│   │     │    ├── ProdReview.js
│   │     │    ├── ProdReviewInfo.js
│   │     │    ├── RecentAdress.js
│   │     │    ├── ReviewWrite.js
│   │     │    ├── Success.js
│   │     │    └── Tabs.js
│   │     └── common
│   │          ├── Alert.js
│   │          ├── Button.js
│   │          ├── Container.js
│   │          ├── Input.js
│   │          ├── Loading.js
│   │          ├── Logo.js
│   │          ├── Meta.js
│   │          ├── Pagination.js
│   │          ├── ProdBill.js
│   │          ├── ReviewCard.js
│   │          ├── ReviewList.js
│   │          ├── Stars.js
│   │          └── Title.js
│   ├── pages
│   │     ├── admin
│   │     │    ├── AdminLogin.js
│   │     │    ├── ManageAdmin.js
│   │     │    ├── ManageMember.js
│   │     │    ├── ManageOrder.js
│   │     │    ├── ManageProd.js
│   │     │    └── ManageReview.js
│   │     ├── users
│   │     │    ├── Login.js
│   │     │    ├── Main.js
│   │     │    ├── ProdList.js
│   │     │    ├── Register.js
│   │     │    ├── RegSuccess.js
│   │     │    ├── Review.js
│   │     │    ├── Showmethemoney.js
│   │     │    └── Thankyou.js
│   │     └── common
│   │          └── NotFound.js
│   ├── slices
│   │     ├── admin
│   │     │    ├── AddProdSlice.js
│   │     │    ├── adminAppSlice.js
│   │     │    ├── adminLoginSlice.js
│   │     │    ├── AdminReviewListSlice.js
│   │     │    ├── AdminUserSlice.js
│   │     │    ├── ManageOrderSlice.js
│   │     │    ├── ManageProdSlice.js
│   │     │    └── MemberSlice.js
│   │     ├── users
│   │     │    ├── AppSlice.js
│   │     │    ├── JoinSlice.js
│   │     │    ├── LoginSlice.js
│   │     │    ├── MainProductSlice.js
│   │     │    ├── NewMemberSlice.js
│   │     │    ├── RecentMemberSlice.js
│   │     │    ├── ReviewListSlice.js
│   │     │    ├── ReviewProdInfoSlice.js
│   │     │    ├── ReviewWriteSlice.js
│   │     └────└── ShowOrderSlice.js
│   ├── css
│   │     ├── color.module.scss
│   │     └── font.module.scss
│   ├── fonts
│   ├── img
│   ├── App.js
│   ├── index.js
│   ├── key.js
│   ├── store.js
│   └── GlobalStyles.js
├── package-lock.json
├── package.json
└── .prettierrc.js

```

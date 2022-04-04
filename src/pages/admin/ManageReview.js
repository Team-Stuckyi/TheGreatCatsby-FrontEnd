import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ServerUrl } from 'key';
import { getAdminReviewList } from 'slices/admin/AdminReviewListSlice';
import axios from 'axios';
import AdminHeader from 'components/admin/AdminHeader';
import Container from 'components/common/Container';
import Search from 'components/admin/Search';
import Title from 'components/common/Title';
import TableList from 'components/admin/TableList';
import Button from 'components/common/Button';
import Alert from 'components/common/Alert';
import Loading from 'components/common/Loading';

const ManageReview = ({ isAdminLogin, setIsAdminLogin }) => {
    // redux 데이터 가져오기
    const { rt, rtmsg, item, loading } = useSelector(state => state.adminReviewList);
    const dispatch = useDispatch();

    /** =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
    /** @state */
    /** 받아온 데이터 컬럼 길이를 저장하는 state */
    // 버튼에 각 데이터의 id값(유일값)을 주기 위해 반복문안에 사용
    // 그래서 테이블 구성시 데이터 컬럼의 길이에서 더해서 버튼의 생성될 수 있도록 사용 (데이터 길이가 끝난 것을 확인할때 사용)
    // === 데이터의 key값의 개수를 구해서 저장함
    const [objLen, setObjLen] = useState();

    /** 원본 데이터를 저장하기 위한 state */
    const [originData, setOriginData] = useState();

    /** 검색시 필터링된 데이터를 저장할때 사용*/
    const [filterData, setFilterData] = useState([]);

    /** 검색된 데이터 필터링해서 저장할 state */
    const [searchData, setSearchData] = useState();

    /** 검색어를 저장할 State */
    const [searchQuery, setSearchQuery] = useState();

    /** 검색 카테고리를 저장할 state */
    // 초기값으로 select의 최소 값을 지정해 주어야한다.
    const [selectQuery, setSelectQuery] = useState('상품명');

    /** 페이지네이션구성을 위한 옵션값들 */
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    /** 검색했을떄, 검색하지 않았을때의, pagination을 사용하기 위해 사용 */
    // 검색하지 않았을시 (0, 기본값)
    // 검색했을시 (1)
    const [pageOption, setPageOption] = useState();

    /** Alert창 키고 끄기 */
    // false:끔(기본값), true:킴
    const [onAlert, setAlert] = useState(false);

    /** 버튼 클릭시 Alert에서 데이터 ID값을 사용하기 위한 state*/
    // 버튼 클릭시 나오는 Alert 컴포넌트에서에서 클릭한 id를 사용할 수 있도록 저장
    const [dataId, setDataId] = useState();

    /** 성공적으로 삭제 요청이 되엇을 경우 재랜더링을 위한 state */
    // useEffect로 값이 바뀌었을 경우 재랜더링시킴
    const [reqData, setReqData] = useState(0);

    /**  Input값을 변경할때 사용하는 state */
    // 수정 이벤트를 사용시에만 사용
    //const [changed, setChanged] = useState();

    /** =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
    /** @useEffect */
    /** 페이지 접속시 데이터 요청 */
    useEffect(() => {
        dispatch(getAdminReviewList());
    }, []);

    /** 데이터가 들어오고 나서 테이블 구성을 위해 실행 */
    useEffect(() => {
        // 데이터가 들어왔을 시 실행
        if (rt === 200) {
            // 데이터의 key값의 개수를 구함
            setObjLen(Object.keys(item[0]).length - 1);
            // 데이터를 원본데이터 state에 저장
            setOriginData(item);
        }
    }, [item]);

    /** 페이지네이션 적용 - 검색전 */
    useEffect(() => {
        if (originData) {
            setTotal(item.length);
            setPageOption(0);
            setFilterData(originData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
        }
    }, [originData]);

    /** 페이지네이션 적용 - 검색할경우 */
    useEffect(() => {
        if (searchData) {
            setPageOption(1);
            setTotal(searchData.length);
            setFilterData(searchData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
        }
    }, [searchData]);

    /** 페이지네이션 이동시 */
    useEffect(() => {
        if (pageOption === 0) {
            // 원본데이터(검색어가 없을시)에서의 페이지네이션
            setFilterData(originData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
        } else if (pageOption === 1) {
            // 검색한 데이터에서의 페이지네이션
            setFilterData(searchData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
        }
    }, [page]);

    /** 값이 바뀌었을시 데이터 재요청 */
    // Ajax를 사용시 값이 바뀌게 되면 데이터를 재요청하기 위해서 사용
    // 검색어가 다시 원본데이터가 오기 때문에 page번호도 초기화 한다.
    useEffect(() => {
        dispatch(getAdminReviewList());
        setPage(1);
    }, [reqData]);

    /** =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
    /** @tableOption 테이블 구성을 위한 옵션값 목록 */
    /** 1. 컬럼명 옵션 */
    const columns = ['no', '상품명', '작성자', '리뷰 내용', '평점', '작성날짜'];
    /** 2. 컬럼의 길이를 지정하는 옵션 */
    // 관리 tab의 부분의 길이는 따로 지정하지 않는다.
    const columnsWidth = ['50px', '300px', '200px', '390px', '70px', '120px'];

    /** 3. 관리 부분 생성 옵션*/
    // index 0,1는 필수값, 버튼은 최대 2개를 생성가능하면 최소 1개의 버튼은 생성해야한다.
    // index0 : 컬럼명, index1 : 컬럼 개수
    // index2 : 버튼명, index3 : 버튼 색
    // index4: 버튼명, index5 : 버튼 색
    // 기본적으로 버튼명과, 색은 : 수정 var(--blue300), 삭제 var(--primary) 사용 권장
    const columnSpecial = ['관리', '1', '삭제', 'var(--primary)'];
    // 버튼 2개 사용시 예시 ex)
    //const columnSpecial = ['관리', '2', '수정', 'var(--blue300)', '삭제', 'var(--primary)'];

    /** =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
    /** @Event 이벤트 처리 */

    /** 테이블 이벤트 (필요의 경우만 사용) */
    /** 1. Input값을 변경할때 사용하는 이벤트 */
    // const onChange = e => {
    //     setChanged(e.target.value);
    //     //input값 수정할시 사용
    // };

    /** 2. 첫번째 버튼 클릭 이벤트 */
    const onClick1 = e => {
        setAlert(true);
        setDataId(e.target.dataset.id);
    };

    /** 3. 두번째 버튼 클릭 이벤트 */
    // const onClick2 = e => {
    //     setAlert(true);
    //     setDataId(e.target.dataset.id);
    // };

    /** 선택한 Select를 저장하는 이벤트 */
    const onChangeSelect = e => {
        setSelectQuery(e.target.value);
    };

    /** 검색어를 저장하는 이벤트 */
    const onQueryChange = e => {
        setSearchQuery(e.target.value);
    };

    /** 검색 클릭 이벤트 */
    // 컬럼명과 Select의 이름이 일치할 경우만 사용가능
    const onSubmit = e => {
        e.preventDefault();

        // 값이 있을 경우만 실행 시키기
        if (searchQuery && selectQuery) {
            for (let i = 0; i < columns.length; i++) {
                if (columns[i] === selectQuery) {
                    setSearchData(
                        originData.filter(filters => {
                            // 숫자가 있어서 앞에 String넣어줘야함
                            return String(Object.values(filters)[i]).includes(searchQuery);
                        }),
                    );
                    // 검색 데이터를 보여주기 때문에 페이지 번호 1번으로 초기화
                    setPage(1);
                }
            }
        }
    };

    /** 검색 데이터 초기화 이벤트 */
    const onDataReset = () => {
        setTotal(item.length);
        setPage(1);
        setPageOption(0);
        setFilterData(originData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
    };

    /** Alert컴포넌트 확인 버튼 클릭 이벤트 */
    const onClickConfirm = () => {
        if (dataId) {
            (async () => {
                try {
                    await axios.delete(ServerUrl + `/reviews/del/${dataId}`);
                    // 값을 바꾸어주어서 useEfect 실행
                    setReqData(reqData + 1);
                } catch (err) {
                    console.log(err);
                }
            })();
        }
        // 알럿창 끄기
        setAlert(false);
    };

    /** Alert컴포넌트 취소 버튼 클릭시 */
    const onClickCancel = () => {
        setAlert(false);
    };

    return (
        <>
            <AdminHeader setIsAdminLogin={setIsAdminLogin} isAdminLogin={isAdminLogin} />
            <Container>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <Title content="리뷰 관리" />
                        <div style={{ float: 'right', marginTop: '45px', marginRight: '610px' }}>
                            <Button
                                onClick={onDataReset}
                                width="100px"
                                bgColor="var(--white)"
                                border="1px solid var(--primary)"
                                fontColor="var(--primary)"
                                size="11px"
                            >
                                초기화
                            </Button>
                        </div>
                        <Search
                            categoryName={'전체리뷰'}
                            categoryCount={item.length}
                            unit={'개'}
                            selectBoxItems={['상품명', '작성자', '평점', '작성날짜']}
                            onChange={onChangeSelect}
                            onQueryChange={onQueryChange}
                            onSubmit={onSubmit}
                            onDataReset={onDataReset}
                        />

                        {onAlert ? <Alert text="삭제하시겠습니까?" onClickConfirm={onClickConfirm} onClickCancel={onClickCancel} /> : <></>}

                        <TableList
                            columns={columns}
                            data={filterData}
                            columnsWidth={columnsWidth}
                            columnSpecial={columnSpecial}
                            objLen={objLen}
                            onClick1={onClick1}
                            total={total}
                            limit={limit}
                            page={page}
                            setPage={setPage}
                        />
                    </>
                )}
            </Container>
        </>
    );
};

export default ManageReview;

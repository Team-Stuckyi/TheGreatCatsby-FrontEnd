import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminUserList } from 'slices/admin/AdminUserSlice';
import { delAdminUserList } from 'slices/admin/AdminUserSlice';
import { editAdminUserList } from 'slices/admin/AdminUserSlice';
import AdminHeader from 'components/admin/AdminHeader';
import Search from 'components/admin/Search';
import Container from 'components/common/Container';
import Title from 'components/common/Title';
import TableList from 'components/admin/TableList';
import Button from 'components/common/Button';
import Alert from 'components/common/Alert';
import Loading from 'components/common/Loading';

const ManageAdmin = ({ isAdminLogin, setIsAdminLogin }) => {
    // * 데이터 연동 -------------------- * //
    useEffect(() => console.clear(), []);
    const { rt, rtmsg, item, loading } = useSelector(state => state.adminuser);
    const dispatch = useDispatch();
    //회원 수정, 탈퇴에 따라 화면을 리렌더링 하기 위한 환경변수
    const [success, setSucess] = useState(false);

    useEffect(() => {
        dispatch(getAdminUserList());
    }, [success]);

    // * 테이블 데이터 출력 및 페이지네이션 -------------------- * //
    //원본 데이터를 저장할 상태변수
    const [originData, setOriginData] = useState();
    //데이터 key값을 구하여 저장하는 상태변수
    const [objLen, setObjLen] = useState();

    useEffect(() => {
        if (rt === 200) {
            setObjLen(Object.keys(item[0]).length - 1);
            setOriginData(item);
        }
    }, [item]);

    //테이블 width 설정
    const columnsWidth = ['50px', '270px', '160px', '220px', '110px', '180px'];
    //테이블 컬럼명
    const columns = ['no', '아이디', '이름', '연락처', '상태', '가입일자'];
    //테이블 관리 파트
    const columnSpecial = ['관리', '2', '수정', 'var(--blue300)', '탈퇴', 'var(--primary)'];

    //페이지네이션
    const [filterData, setFilterData] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [pageOption, setPageOption] = useState();

    //검색 전
    useEffect(() => {
        if (originData) {
            setTotal(item.length);
            setFilterData(originData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
        }
    }, [originData, page]);

    //페이지 이동 시
    useEffect(() => {
        if (pageOption === 0) {
            setFilterData(originData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
        }
    }, [page]);

    // * 검색 기능 -------------------- * //
    //검색 필드 : 아이디, 이름, 상태 (기본값 아이디)
    const [selectQuery, setSelectQuery] = useState('아이디');
    const [searchQuery, setSearchQuery] = useState();
    const onQueryChange = e => {
        setSearchQuery(e.target.value);
    };
    const onChangeSelect = e => {
        setSelectQuery(e.target.value);
    };
    const [searchData, setSearchData] = useState();
    const onSubmit = e => {
        e.preventDefault();
        if (searchQuery && selectQuery) {
            for (let i = 0; i < columns.length; i++) {
                if (columns[i] === selectQuery) {
                    setSearchData(
                        originData.filter(filters => {
                            return String(Object.values(filters)[i]).includes(searchQuery);
                        }),
                    );
                    setPage(1);
                }
            }
        }
    };

    //검색 후 페이지네이션
    useEffect(() => {
        if (searchData) {
            setPageOption(1);
            setTotal(searchData.length);
            setFilterData(searchData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
        }
    }, [searchData]);

    useEffect(() => {
        if (pageOption === 1) {
            setFilterData(searchData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
        }
    }, [page]);

    // 데이터 초기화
    const onDataReset = () => {
        setTotal(item.length);
        setPage(1);
        setPageOption(0);
        setFilterData(originData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
    };

    // * 관리자 회원 정보 수정 및 탈퇴 -------------------- * //
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [delAlert, setDelAlert] = useState(false);
    const [editAlert, setEditAlert] = useState(false);
    const [warning, setWarning] = useState(false);
    const [userId, setUserId] = useState();

    //input 값 변경
    const onValueChange = e => {
        if (e.target.id === '1') {
            setEmail(e.target.value);
        }
        if (e.target.id === '2') {
            setName(e.target.value);
        }
    };

    //버튼을 클릭할 경우 Alert 창을 여는 함수
    const onOpenAlert = e => {
        setSucess(false);
        setUserId(e.target.dataset.id);
        if (e.target.innerText === '수정') {
            setEditAlert(true);
            onEditConfirm(e);
        } else if (e.target.innerText === '탈퇴') {
            setDelAlert(true);
            onDelConfirm(e);
        }
    };

    //수정 => 확인 시
    // 1. 아이디와 이름을 수정했을 경우 승인된다.
    // 2. 수정한 값이 없을 경우 경고창이 뜬다.
    //수정 => 취소 시 알럿창 꺼짐
    const onEditConfirm = e => {
        if (e.target.innerText === '확인') {
            if (userId && email && name) {
                dispatch(
                    editAdminUserList({
                        user_id: userId,
                        name: name,
                        email: email,
                    }),
                );
                setEditAlert(false);
                setSucess(true);
            } else if (!userId || !email || !name) {
                setWarning(true);
            }
        } else if (e.target.innerText === '취소') {
            onClickCancel();
        }
    };

    //탈퇴 => 확인 시 status 값 'N' 변경
    //탈퇴 => 취소 시 알럿창 꺼짐
    const onDelConfirm = e => {
        if (e.target.innerText === '확인') {
            dispatch(delAdminUserList(userId));
            setDelAlert(false);
            setSucess(true);
        } else if (e.target.innerText === '취소') {
            onClickCancel();
        }
    };

    // 알럿창 취소
    const onClickCancel = () => {
        setEditAlert(false);
        setDelAlert(false);
        setWarning(false);
    };

    return (
        <>
            <AdminHeader setIsAdminLogin={setIsAdminLogin} isAdminLogin={isAdminLogin} />
            <Container>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <Title content={'관리자 회원관리'}></Title>
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
                            categoryName={'전체회원'}
                            categoryCount={item.length}
                            unit={'명'}
                            selectBoxItems={['아이디', '이름', '상태']}
                            onChange={onChangeSelect}
                            onSubmit={onSubmit}
                            onQueryChange={onQueryChange}
                            onDataReset={onDataReset}
                        />
                        {delAlert && <Alert text={'탈퇴시키겠습니까?'} onClickConfirm={onDelConfirm} onClickCancel={onClickCancel} />}
                        {editAlert && <Alert text={'수정하시겠습니까?'} onClickConfirm={onEditConfirm} onClickCancel={onClickCancel} />}
                        {warning && <Alert text={'수정한 값이 없습니다.'} onClickConfirm={onClickCancel} />}
                        <TableList
                            columns={columns}
                            data={filterData}
                            columnsWidth={columnsWidth}
                            columnSpecial={columnSpecial}
                            objLen={objLen}
                            onChange={onValueChange}
                            onClick1={onOpenAlert}
                            onClick2={onOpenAlert}
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

export default ManageAdmin;

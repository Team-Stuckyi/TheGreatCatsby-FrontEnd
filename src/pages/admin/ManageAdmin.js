import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminUserList } from 'slices/admin/AdminUserSlice';
import { delAdminUserList } from 'slices/admin/AdminUserSlice';
import { editAdminUserList } from 'slices/admin/AdminUserSlice';
import AdminHeader from 'components/admin/AdminHeader';
import Search from 'components/common/Search';
import Container from 'components/common/Container';
import Title from 'components/common/Title';
import TableList from 'components/common/TableList';
import Button from 'components/common/Button';
import Alert from 'components/common/Alert';

const ManageAdmin = () => {
    // ------------------ 데이터 연동 ------------------ //

    useEffect(() => console.clear(), []);
    const { rt, rtmsg, item, loading } = useSelector(state => state.adminuser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdminUserList());
    }, []);

    // ------------------ 테이블 ------------------ //

    const [objLen, setObjLen] = useState();
    const [originData, setOriginData] = useState();

    useEffect(() => {
        if (rt === 200) {
            setObjLen(Object.keys(item[0]).length - 1);
            setOriginData(item);
        }
    }, [item]);

    //테이블 컬럼
    const columns = ['no', '아이디', '이름', '연락처', '상태', '가입일자'];
    //테이블 수정 삭제 버튼
    const columnSpecial = ['관리', '2', '수정', 'var(--blue300)', '탈퇴', 'var(--primary)'];

    const columnsWidth = ['50px', '270px', '160px', '220px', '110px', '180px'];

    //페이지네이션
    const [filterData, setFilterData] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [pageOption, setPageOption] = useState();

    useEffect(() => {
        if (originData) {
            setTotal(item.length);
            setFilterData(originData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
        }
    }, [originData, page]);

    useEffect(() => {
        if (pageOption === 0) {
            setFilterData(originData.filter((number, index) => index >= page * limit - 10 && index < page * limit));
        }
    }, [page]);

    // ------------------ search ------------------ //

    const [searchQuery, setSearchQuery] = useState();
    const onQueryChange = e => {
        setSearchQuery(e.target.value);
    };
    const [selectQuery, setSelectQuery] = useState('아이디');
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

    // ------------------ 수정, 탈퇴 ------------------ //
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [delAlert, setDelAlert] = useState(false);
    const [editAlert, setEditAlert] = useState(false);
    const [warning, setWarning] = useState(false);

    //input 값 변경
    const onChange = e => {
        if (e.target.id === '1') {
            setEmail(e.target.value);
        }
        if (e.target.id === '2') {
            setName(e.target.value);
        }
    };

    //수정 버튼
    const onClick1 = e => {
        setEditAlert(true);
        console.log(e.target.value);
        let num = e.target.dataset.id;
        if (!name || !email) {
            setWarning(true);
        }
        dispatch(
            editAdminUserList({
                user_id: num,
                name: name,
                email: email,
            }),
        );
    };

    //탈퇴 버튼
    const onClick2 = e => {
        setDelAlert(true);
        console.log(e.target);
        let num = e.target.dataset.id;
        dispatch(delAdminUserList(num));
    };

    //Alert
    const onClickConfirm = e => {
        if (e.target.value === 'btn1' && name && email) {
            onClick1();
        } else if (e.target.value === 'btn2') {
            onClick2();
        }
        // 알럿창 끄기
        setEditAlert(false);
        setDelAlert(false);
        setWarning(false);
    };

    /** Alert컴포넌트 취소 버튼 클릭시 */
    const onClickCancel = () => {
        setEditAlert(false);
        setDelAlert(false);
        setWarning(false);
    };

    return (
        <>
            <AdminHeader />
            <Container>
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
                {delAlert && <Alert text={'탈퇴시키겠습니까?'} onClickConfirm={onClickConfirm} onClickCancel={onClickCancel} />}
                {editAlert && <Alert text={'수정하시겠습니까?'} onClickConfirm={onClickConfirm} onClickCancel={onClickCancel} />}
                {warning && <Alert text={'수정한 값이 없습니다.'} onClickConfirm={onClickConfirm} onClickCancel={onClickCancel} />}
                <TableList
                    columns={columns}
                    data={filterData}
                    columnsWidth={columnsWidth}
                    columnSpecial={columnSpecial}
                    objLen={objLen}
                    onChange={onChange}
                    onClick1={onClick1}
                    onClick2={onClick2}
                    total={total}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </Container>
        </>
    );
};

export default ManageAdmin;

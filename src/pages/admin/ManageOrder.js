/**
 * @filename    : ManageOrder.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 주문 관리 페이지
 */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Container from 'components/common/Container';
import Loading from 'components/common/Loading';
import AdminHeader from 'components/admin/AdminHeader';
import Search from 'components/admin/Search';
import TableListWithoutPagination from 'components/admin/TableListWithoutPagination';
import Pagination from 'components/common/Pagination';
import Title from 'components/common/Title';

import { manageOrderSlice, getOrders, putOrders } from 'slices/admin/ManageOrderSlice';

const TitleContainer = styled.div`
    margin: 50px 0 50px 0;
`;

const Notice = styled.div`
    float: right;
    margin-top: 20px;
    p {
        color: var(--gray300);
        font-size: 0.875rem;
        line-height: 1.25rem;
    }
`;

const ManageOrder = ({ isAdminLogin, setIsAdminLogin }) => {
    const [page, setPage] = useState(1);
    const { rt, orders, actionType, totalCount, loading } = useSelector(state => state.manageOrder);
    const dispatch = useDispatch();

    const columns = ['주문 번호', '주문 상품', '주문 날짜', '이메일', '주문 금액', '주문 상태'];
    const selectBoxItems = ['주문 번호', '주문 상품', '주문 날짜', '이메일', '주문 금액', '주문 상태'];

    /** 검색어를 저장할 State */
    const [searchQuery, setSearchQuery] = useState('');

    /** 검색 카테고리를 저장할 state */
    const [selectQuery, setSelectQuery] = useState('order_id');

    const onChange = e => {
        const { id, name, value } = e.target;

        dispatch(
            manageOrderSlice.actions.changeOrders(
                orders.map((p, index) => {
                    return index == id
                        ? {
                              ...p,
                              [name]: value,
                          }
                        : p;
                }),
            ),
        );
    };

    const onChecked = e => {
        const { id, name, checked } = e.target;
        dispatch(
            manageOrderSlice.actions.changeOrders(
                orders.map((p, index) => {
                    return index == id
                        ? {
                              ...p,
                              [name]: checked,
                          }
                        : p;
                }),
            ),
        );
    };

    const onModifyButtonClick = e => {
        const { id } = e.target;
        const curOrder = orders[id];

        dispatch(putOrders(curOrder));
    };

    useEffect(() => {
        if (actionType === 'GET_ORDERS') {
            if (rt !== 200) {
                alert('주문 리스트 불러오기 실패');
            }
        } else if (actionType === 'PUT_ORDERS') {
            if (rt == 200) {
                alert('수정되었습니다');
                dispatch(getOrders());
            } else {
                alert('수정 실패');
            }
        } else {
            dispatch(getOrders({ page: page }));
        }
    }, [rt, actionType]);

    useEffect(() => {
        dispatch(getOrders(selectQuery === '' ? { page: page } : { page: page, searchKey: selectQuery, searchValue: searchQuery }));
    }, [page]);

    /** 선택한 Select를 저장하는 이벤트 */
    const onChangeSelect = e => {
        const value = e.target.value;

        if (value === '주문 번호') {
            setSelectQuery('order_id');
        } else if (value === '주문 상품') {
            setSelectQuery('name');
        } else if (value === '주문 날짜') {
            setSelectQuery('order_date');
        } else if (value === '이메일') {
            setSelectQuery('email');
        } else if (value === '주문 가격') {
            setSelectQuery('order_price');
        } else if (value === '주문 상태') {
            setSelectQuery('order_status');
        }
    };

    /** 검색어를 저장하는 이벤트 */
    const onQueryChange = e => {
        setSearchQuery(e.target.value);
    };

    /** 검색 클릭 이벤트 */
    // 컬럼명과 Select의 이름이 일치할 경우만 사용가능
    const onSubmit = e => {
        e.preventDefault();
        setPage(1);
        dispatch(getOrders({ page: page, searchKey: selectQuery, searchValue: searchQuery }));
    };

    return (
        <>
            <AdminHeader setIsAdminLogin={setIsAdminLogin} isAdminLogin={isAdminLogin} />
            <Container>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <TitleContainer>
                            <Title content={'주문 관리'} />
                        </TitleContainer>
                        <Search
                            selectBoxItems={selectBoxItems}
                            categoryName={'주문 번호'}
                            categoryCount={totalCount}
                            unit={'건'}
                            selectBoxItems={['주문 번호', '주문 상품', '주문 날짜', '이메일', '주문 금액', '주문 상태']}
                            onChange={onChangeSelect}
                            onQueryChange={onQueryChange}
                            onSubmit={onSubmit}
                        />
                        <Notice>
                            <p>*주문 상품명, 주문자 이메일은 현재페이지에서 수정이 불가합니다.</p>
                        </Notice>
                        <TableListWithoutPagination
                            columns={columns}
                            data={orders}
                            isModifiable={true}
                            isRemovable={false}
                            onChange={onChange}
                            onChecked={onChecked}
                            onModifyButtonClick={onModifyButtonClick}
                        />
                        <Pagination total={totalCount} limit={10} page={page} setPage={setPage} />
                    </>
                )}
            </Container>
        </>
    );
};

export default ManageOrder;

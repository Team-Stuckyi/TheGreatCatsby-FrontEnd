/**
 * @filename    : ManageOrder.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 상품 관리 페이지
 */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
 
import Container from 'components/common/Container';
//import AdminHeader from 'components/admin/AdminHeader';
import Search from 'components/common/Search';
import TableList from 'components/common/TableList';
import Pagination from 'components/common/Pagination';
import Title from 'components/common/Title';
 
import { manageOrderSlice, getOrders, putOrders } from 'slices/admin/ManageOrderSlice';
 
const TitleContainer = styled.div`
     margin: 50px 0 50px 0;
`;
 
const ManageOrder = () => {
 
    const [page, setPage] = useState(1);
    const { rt, orders, actionType, totalCount } = useSelector(state => state.manageOrder);
    const dispatch = useDispatch();

    const columns = ['주문 번호', '주문 상품', '주문 날짜', '이메일', '주문 금액', '주문 상태'];
    const selectBoxItems = ['주문 번호', '주문 상품', '주문 날짜', '이메일', '주문 금액', '주문 상태'];
 
    const onChange = (e) => {
        const { id, name, value } = e.target;

        dispatch(manageOrderSlice.actions.changeOrders(orders.map((p, index) => {
            return index == id ? {
                ...p,
                [name] : value
              } : p
        })));
    };

    const onChecked = (e) => {
        const { id, name, checked } = e.target;
        dispatch(manageOrderSlice.actions.changeOrders(orders.map((p, index) => {
            return index == id ? {
                ...p,
                [name] : checked
              } : p
        })));
        };

    const onModifyButtonClick = (e) => {
        const { id } = e.target;
        const curOrder = orders[id];
        console.log("curOrder " + curOrder);

        dispatch(putOrders(curOrder))
    }

    useEffect(() => {
        if(actionType === "GET_ORDERS") {
            if(rt !== 200) {
                alert("주문 리스트 불러오기 실패");
            }
        } else if(actionType === "PUT_ORDERS") {
            if(rt == 200) {
                alert("수정되었습니다");
                dispatch(getOrders());
            }
            else {
                alert("수정 실패");
            }
        } else {
            dispatch(getOrders({page: page}));
        }
        
        }, [rt, actionType]);

    useEffect(() => dispatch(getOrders({page: page})), [page]);
 
    return (
        <Container>
            {/* <AdminHeader /> */}
            <TitleContainer>
                <Title content={"주문 관리"} />
            </TitleContainer>
            <Search selectBoxItems={selectBoxItems} categoryName={"전체 주문"}/>
            <TableList columns={columns} data={orders}
            isModifiable={true} isRemovable={false} onChange={onChange} onChecked={onChecked}
            onModifyButtonClick={onModifyButtonClick} />
            <Pagination total={totalCount} limit={10} page={page} setPage={setPage}/>
        </Container>
        
    );
};
 
export default ManageOrder;
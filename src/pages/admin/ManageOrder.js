/**
 * @filename    : ManageProd.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 상품 관리 페이지
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
 
import Container from 'components/common/Container';
//import AdminHeader from 'components/admin/AdminHeader';
import Search from 'components/common/Search';
//import AddProd from 'components/admin/AddProd';
import TableList from 'components/common/TableList';
//import Pagination from 'components/common/Pagination';
import Title from 'components/common/Title';
 
import { manageOrderSlice, getOrders } from 'slices/admin/ManageOrderSlice';
 
const TitleContainer = styled.div`
     margin: 50px 0 50px 0;
`;
 
const ManageProd = () => {
 
    const { rt, orders } = useSelector(state => state.manageOrder);
    const dispatch = useDispatch();

    const columns = ['주문 번호', '주문 상품', '주문 날짜', '이메일', '주문 금액'];
    const selectBoxItems = ['주문 번호', '주문 상품', '주문 날짜', '이메일', '주문 금액'];
 
    const onChange = (e) => {
        const { id, name, value } = e.target;

        dispatch(manageOrderSlice.actions.changeOrders(orders.map((p, index) => {
            return index == id ? {
                ...p,
                [name] : value
              } : p
        })));
    };


    useEffect(() => {
        dispatch(getOrders())
            if(rt !== 200 && rt !== null) {
                alert("상품 리스트 불러오기 실패");
            }
        }, [rt]);
 
    return (
        <Container>
            {/* <AdminHeader /> */}
            <TitleContainer>
                <Title content={"주문 관리"} />
            </TitleContainer>
            <Search selectBoxItems={selectBoxItems} categoryName={"전체 주문"}/>
            <TableList columns={columns} data={orders}
            isModifiable={true} isRemovable={true} onChange={onChange} />
            {/* <Pagination /> */}
        </Container>
        
    );
};
 
export default ManageProd;
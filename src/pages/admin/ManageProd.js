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

import { manageProdSlice, getProducts } from 'slices/admin/ManageProdSlice';

const TitleContainer = styled.div`
    margin: 50px 0;
`;

const ManageProd = () => {

    const { rt, products } = useSelector(state => state.manageProd);
    const dispatch = useDispatch();

    const columns = ['상품 번호', '상품명', '재고', '판매'];
    const selectBoxItems = ['번호', '상품명', '재고', '판매'];

    const onChange = (e) => {
        const { id, name, value } = e.target;

        dispatch(manageProdSlice.actions.changeProducts(products.map((p, index) => {
            return index == id ? {
                ...p,
                [name] : value
              } : p
        })));
    };

    const onChecked = (e) => {
        const { id, name, checked } = e.target;
        dispatch(manageProdSlice.actions.changeProducts(products.map((p, index) => {
            return index == id ? {
                ...p,
                [name] : checked
              } : p
        })));
        };

    useEffect(() => {
        dispatch(getProducts())
            if(rt !== 200 && rt !== null) {
                alert("상품 리스트 불러오기 실패");
            }
        }, [rt]);

    return (
            <Container>
                {/* <AdminHeader /> */}
                <TitleContainer>
                    <Title content={"상품 관리"} />
                </TitleContainer>
                <Search selectBoxItems={selectBoxItems} categoryName={"전체 상품"}/>
                <TableList columns={columns} data={products}
                isModifiable={true} isRemovable={true} onChange={onChange} onChecked={onChecked} />
                {/* <Pagination /> */}
            </Container>
            
    );
};

export default ManageProd;
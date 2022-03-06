/**
 * @filename    : ManageProd.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 상품 관리 페이지
 */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

import Container from 'components/common/Container';
//import AdminHeader from 'components/admin/AdminHeader';
import Search from 'components/common/Search';
//import AddProd from 'components/admin/AddProd';
import TableList from 'components/common/TableList';
import Pagination from 'components/common/Pagination';
import Title from 'components/common/Title';

import { manageProdSlice, getProducts, putProducts } from 'slices/admin/ManageProdSlice';

const TitleContainer = styled.div`
    margin: 50px 0;
`;

const ManageProd = () => {

    const { rt, products, actionType, totalCount } = useSelector(state => state.manageProd);
    const [page, setPage] = useState(1);
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

    const onModifyButtonClick = (e) => {
        const { id } = e.target;
        const curProd = products[id];

        dispatch(putProducts(curProd))
    }


    useEffect(() => {
        if(actionType === "GET_PRODUCTS") {
            if(rt != 200) {
                alert("상품 리스트 불러오기 실패");
            }
        } else if(actionType === "PUT_PRODUCTS") {
            if(rt == 200) {
                alert("수정되었습니다");
                dispatch(getProducts({page: page}));
            }
            else{
                alert("수정 실패");
            }
        } else {
            dispatch(getProducts({page: page}));
        }
        
        }, [rt, actionType]);

        useEffect(() => {
            dispatch(getProducts({page: page}));
        }, [page])


    return (
            <Container>
                {/* <AdminHeader /> */}
                <TitleContainer>
                    <Title content={"상품 관리"} />
                </TitleContainer>
                <Search selectBoxItems={selectBoxItems} categoryName={"전체 상품"}/>
                <TableList columns={columns} data={products}
                isModifiable={true} isRemovable={false} onChange={onChange} onChecked={onChecked}
                onModifyButtonClick={onModifyButtonClick} />
                <Pagination total={totalCount} limit={10} page={page} setPage={setPage} />
            </Container>
            
    );
};

export default ManageProd;
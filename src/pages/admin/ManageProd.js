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
import AddProd from 'components/admin/AddProd';
import TableList from 'components/common/TableListWithoutPagination';
import Pagination from 'components/common/Pagination';
import Title from 'components/common/Title';

import { manageProdSlice, getProducts, putProducts } from 'slices/admin/ManageProdSlice';

const TitleContainer = styled.div`
    margin: 50px 0;
`;

const AddProdButton = styled.button`
    border: 1px solid var(--blue300);
    border-radius: 50%;
    padding: 10px 16px;
    background-color: var(--blue300);
    color: var(--white);
    font-size: 1.25rem;
    display: absolute;
    float: right;
    margin: -45px 40px 0 0;
    cursor: pointer;
`;

const ManageProd = () => {

    const { rt, products, actionType, totalCount } = useSelector(state => state.manageProd);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [addProdClose, setAddProdClose] = useState(true);
    
    /** 검색어를 저장할 State */
    const [searchQuery, setSearchQuery] = useState('');
    
    /** 검색 카테고리를 저장할 state */
    const [selectQuery, setSelectQuery] = useState('prod_id');

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

    const ClickAddProd = (e) => {
        setOpenModal(true);
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
        dispatch(getProducts( selectQuery === '' ? {page: page} : {page: page, searchKey: selectQuery, searchValue: searchQuery}));
    }, [page])

    useEffect(() => {
        if (openModal == false) {
            dispatch(getProducts({page: page}));
        }
    }, [openModal]);


        /** 선택한 Select를 저장하는 이벤트 */
        const onChangeSelect = e => {

            const value = e.target.value;

            if (value === '상품 번호') {
                setSelectQuery('prod_id');
            } else if (value === '상품명') {
                setSelectQuery('name');
            } else if (value === '재고') {
                setSelectQuery('stock');
            } else if (value === '판매') {
                setSelectQuery('status');
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
            dispatch(getProducts({page: page, searchKey: selectQuery, searchValue: searchQuery}));
        };
    

    return (
            <Container>
                {/* <AdminHeader /> */}
                <TitleContainer>
                    <Title content={"상품 관리"} />
                </TitleContainer>
                <Search selectBoxItems={selectBoxItems}
                        categoryName={"전체 상품"}
                        categoryCount={totalCount}
                        unit={'개'}
                        selectBoxItems={['상품 번호', '상품명', '재고', '판매']}
                        onChange={onChangeSelect}
                        onQueryChange={onQueryChange}
                        onSubmit={onSubmit}
                        />
                <AddProdButton onClick={ClickAddProd}>+</AddProdButton>
                {openModal && <AddProd closeModal={setOpenModal} />}
                <TableList columns={columns} data={products}
                isModifiable={true} isRemovable={false} onChange={onChange} onChecked={onChecked}
                onModifyButtonClick={onModifyButtonClick} />
                <Pagination total={totalCount} limit={10} page={page} setPage={setPage} />
            </Container>
            
    );
};

export default ManageProd;
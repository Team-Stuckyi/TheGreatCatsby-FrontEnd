/**
 * @filename    : ManageProd.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 상품 관리 페이지
 */

import {ServerUrl} from 'key';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Container from 'components/common/Container';
//import AdminHeader from 'components/admin/AdminHeader';
import Search from 'components/common/Search';
//import AddProd from 'components/admin/AddProd';
import TableList from 'components/common/TableList';
//import Pagination from 'components/common/Pagination';
import Title from 'components/common/Title';

const TitleContainer = styled.div`
    margin: 50px 0 50px 0;
`;

const ManageProd = () => {

    const [prod, setProd] = useState([]);
    const columns = ['상품 번호', '상품명', '재고', '판매'];
    const selectBoxItems = ['번호', '상품명', '재고', '판매'];

    const onChange = (e) => {
        const { id, name, value} = e.target;
            setProd(
            prod.map((p, index) => {
                return index == id ? {
                    ...p,
                    [name] : value
                  } : p
            })
        );
    };

    const onChecked = (e) => {
        const { id, name, checked } = e.target;
            setProd(
                prod.map((p, index) => {
                    return index == id? {
                        ...p,
                        [name] : checked
                    } : p
                })
            );
        };
    
    useEffect (() => {
        axios.get(ServerUrl + "/products/main")
        .then(response => setProd(response.data.item.map(i => {
            return {
                prod_id: i.prod_id,
                name: i.name,
                stock: i.stock,
                status: i.status === 'Y'
            }
        })))
        .catch(err => {
            console.log(err);
            alert("Error");
        })
    }, []);

    return (
            <Container>
                {/* <AdminHeader /> */}
                <TitleContainer>
                    <Title content={"상품 관리"} />
                </TitleContainer>
                <Search selectBoxItems={selectBoxItems} categoryName={"전체 상품"}/>
                <TableList columns={columns} data={prod} isModifiable={true} isRemovable={true} onChange={onChange} onChecked={onChecked} />
                {/* <Pagination /> */}
            </Container>
            
    );
};

export default ManageProd;
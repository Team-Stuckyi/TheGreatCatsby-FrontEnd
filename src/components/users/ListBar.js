import styled from 'styled-components';
import {useState, useEffect} from "react";
import ProdCard from 'components/users/ProdCard_test';
import CardListContainer from 'components/users/ProdCardList_test';
import Pagination from 'components/common/Pagination';


const ListContainer =  styled.div`
    height: 40px;
    border-top: 2px solid var(--gray200);
    border-bottom: 2px solid var(--gray200);
    padding: 5px;
    margin-bottom: 30px;
    position: relative;
`;

const Count = styled.h3`
    display: inline-block;
    font-size: 15px;
    text-indent: 10px;
`

const SelecContainer = styled.div`
    position: absolute;
    right: 9px;
    top: 4px;
`;

const Label = styled.label`
    font-size: 13px;
    color: var(--gray400);
    padding-right: 3px;
`
const Select = styled.select`
    border: none;
    text-align: center;
    font-size: 13px;
    &:focus {
        outline:none;
    }

`;

const ListBar = ({TabList}) => {
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const offset = (page -1) * limit;
    return (
        <>
        <ListContainer>
                <Count>{TabList.length} 개의 상품</Count>
                <SelecContainer>
                    <Label>정렬</Label>
                    <Select name="sorts">
                        <option value="0" selected>--기본--</option>
                        <option value="1">별점 높은순</option>
                        <option value="2">가격 낮은순</option>
                        <option value="3">가격 높은순</option>
                        <option value="4">후기 많은순</option>
                    </Select>
                </SelecContainer>
            </ListContainer>
            <CardListContainer>
            {TabList?.slice(offset, offset + limit).map((content, i) => {
                return <ProdCard key={i} content={content} />;
            })}
            </CardListContainer>
            <Pagination total={TabList.length} limit={limit} page={page} setPage={setPage} />
        </>
    )
}

export default ListBar;
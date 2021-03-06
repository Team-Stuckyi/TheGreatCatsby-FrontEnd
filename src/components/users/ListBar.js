/**
 * @filename    : ListBar.js
 * @author      : 이슬기 (https://github.com/abcabcp)
 * @description : 상위 컴포넌트인 Tabs에서 분류된 상품 정보를 받아온 후, 최근 등록순, 가격낮은순, 가격높은순, 리뷰많은순으로 정렬하며, 하위 컴포넌트인 ProdCard에게 전달하는 컴포넌트
 */

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProdCard from 'components/users/ProdCard';
import Pagination from 'components/common/Pagination';

const ListContainer = styled.div`
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
`;

const SelecContainer = styled.div`
    position: absolute;
    right: 9px;
    top: 4px;
`;

const Label = styled.label`
    font-size: 13px;
    color: var(--gray400);
    padding-right: 3px;
`;
const Select = styled.select`
    border: none;
    text-align: center;
    font-size: 13px;
    font-family: 'InfinitySansR-Regular';
    &:focus {
        outline: none;
    }
`;

const ListBar = ({ TabList }) => {
    //카테고리 별로 정렬된 항목을 조건에 따라 재정렬하여 담길 리스트
    const [sortList, setSortList] = useState();
    //선택된 조건 - 기본값 '선택하세요'
    const [selected, setSelected] = useState('선택 하세요');
    //페이지네이션 - 기본값 1페이지
    const [page, setPage] = useState(1);

    //페이지와 조건값이 변할 때마다 스크롤이 최상단으로 고정된다.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page, selected]);

    //카테고리가 바뀔 때마다 새로 렌더링된다.
    useEffect(() => {
        setSortList(TabList);
        setPage(1);
    }, [TabList]);

    //조건 값을 바꿔주는 함수
    const handleSelect = event => {
        setSelected(event.target.value);
    };

    /*
     * 오름차순으로 정렬해주는 함수
     * @param   {string} choice 선택된 조건값
     * @param   {index} field 조건에 따라 정렬될 값
     */
    const ascSortHandler = (choice, field) => {
        if (selected === choice) {
            setSortList(
                [...TabList].sort((a, b) => {
                    return b[field] > a[field] ? 1 : -1;
                }),
            );
        }
    };

    /*
     * 내림차순으로 정렬해주는 함수
     * @param   {string} choice 선택된 조건값
     * @param   {index} field 조건에 따라 정렬될 값
     */
    const dscSortHandler = (choice, field) => {
        if (selected === choice) {
            setSortList(
                [...TabList].sort((a, b) => {
                    return a[field] > b[field] ? 1 : -1;
                }),
            );
        }
    };

    //조건 값이 바뀔 떄마다 렌더링한다.
    useEffect(() => {
        if (selected === '최근 등록순') {
            ascSortHandler('최근 등록순', 'prod_id');
        } else if (selected === '별점 높은순') {
            ascSortHandler('별점 높은순', 'stars_avg');
        } else if (selected === '가격 낮은순') {
            dscSortHandler('가격 낮은순', 'price');
        } else if (selected === '가격 높은순') {
            ascSortHandler('가격 높은순', 'price');
        } else if (selected === '후기 많은순') {
            ascSortHandler('후기 많은순', 'review_count');
        }
    }, [selected]);

    return (
        <>
            <ListContainer>
                <Count>{TabList.length} 개의 상품</Count>
                <SelecContainer>
                    <Label>정렬</Label>
                    <Select onChange={event => handleSelect(event)}>
                        <option value="최근 등록순" key={1}>
                            최근 등록순
                        </option>
                        <option value="별점 높은순" key={2}>
                            별점 높은순
                        </option>
                        <option value="가격 낮은순" key={3}>
                            가격 낮은순
                        </option>
                        <option value="가격 높은순" key={4}>
                            가격 높은순
                        </option>
                        <option value="후기 많은순" key={5}>
                            후기 많은순
                        </option>
                    </Select>
                </SelecContainer>
            </ListContainer>
            {sortList && <ProdCard content={sortList} page={page} />}
            <Pagination total={TabList.length} limit={20} page={page} setPage={setPage} />
        </>
    );
};

export default ListBar;

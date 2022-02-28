import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ProdCard from 'components/users/ProdCard';

const CardListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 250px);
`;

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
    //새로 sort되어 담길 배열
    const [sortList, setSortList] = useState();
    const [selected, setSelected] = useState('선택 하세요');

    //기본 빈 배열에 받아온 props를 담아서 바뀔때마다 렌더링
    useEffect(() => {
        setSortList(TabList);
    }, [TabList]);

    //정렬 상태 => 기본값 "선택하세요"
    const handleSelect = event => {
        setSelected(event.target.value);
    };

    const ascSortHandler = (choice, field) => {
        if (selected === choice) {
            setSortList(
                [...TabList].sort((a, b) => {
                    return b[field] > a[field] ? 1 : -1;
                }),
            );
        }
    };

    const dscSortHandler = (choice, field) => {
        if (selected === choice) {
            setSortList(
                [...TabList].sort((a, b) => {
                    return a[field] > b[field] ? 1 : -1;
                }),
            );
        }
    };

    useEffect(() => {
        if (selected === '선택 하세요') {
            ascSortHandler('선택 하세요', 'prod_id');
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
                        <option value="선택 하세요" key={1}>
                            선택 하세요
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
            <CardListContainer>
                {sortList?.map((content, i) => {
                    return <ProdCard key={i} content={content} />;
                })}
            </CardListContainer>
        </>
    );
};

export default ListBar;

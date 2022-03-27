/**
 * @filename    : Tabs.js
 * @author      : 이슬기 (https://github.com/abcabcp)
 * @description : 메인 페이지에서 상품 정보를 받아온 후, 탭 선택 시 상품 카테고리 분류 후 하위 컴포넌트인 ListBar에게 전달하는 컴포넌트
 */

import { useState } from 'react';
import styled, { css } from 'styled-components';
import ListBar from 'components/users/ListBar';

const Tab = styled.button`
    display: inline-block;
    border-radius: 22px;
    font-family: 'InfinitySansR-Regular';
    background-color: #eeeeee;
    padding: 5px 18px;
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 20px;
    border: none;

    ${props =>
        props.focus &&
        css`
            background-color: #f76b8a;
            color: #fff;
        `}
    ${props =>
        props.focusOut &&
        css`
            background-color: #fff;
            color: #f76b8a;
        `}
`;

const Tabs = ({ Prod }) => {
    const tabTitle = ['전체', '사료', '간식', '모래', '캣타워'];
    const [list, setList] = useState(Prod);
    const [cateList, setCateList] = useState(Prod);
    //페이지 진입 시 탭
    const [focus, setFocus] = useState(0);

    const onClickTab = idx => {
        const value = tabTitle[`${idx}`];
        if (idx === 0) {
            return setCateList(Prod);
        }
        setCateList(
            list.filter(d => {
                return d.category === value;
            }),
        );
    };

    return (
        <div>
            {tabTitle.map((title, idx, ac) => {
                return (
                    <Tab
                        key={idx}
                        onClick={() => {
                            onClickTab(idx);
                            setFocus(idx);
                        }}
                        focus={focus === idx && true}
                    >
                        {title}
                    </Tab>
                );
            })}
            <ListBar TabList={cateList} />
        </div>
    );
};

export default Tabs;


import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import ListBar from "components/users/ListBar_test";

const Tab = styled.li`
    display: inline-block;
    border-radius: 22px;
    background-color: #eeeeee;
    padding: 2px 17px;
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 20px;

    ${props =>
        props.active &&
        css`
            background-color: #f76b8a;
            color: #fff;
        `}
`;

const Tabs = ({ Prod }) => {

    //페이지네이션
    const tabTitle = ["전체", "사료", "간식", "모래", "캣타워"];
    const [list, setList] = useState(Prod);
    const [cateList, setCateList] = useState(Prod);


    const onClickTab = (idx) => {
        const value = tabTitle[`${idx}`];
        if(idx ===0){
            return setCateList(Prod);
        }
        setCateList(list.filter((d) => {
            return d.category === value
        }))
        
    }
    console.log(cateList);

    return (
        <div>
            {tabTitle.map((title, idx) => {
                return (
                    <Tab
                    key={idx}
                    onClick={() => {
                        onClickTab(idx)}}
                    >{title}</Tab>
                )
            })}
            <ListBar TabList={cateList} />
        </div>
    )
};

export default Tabs;
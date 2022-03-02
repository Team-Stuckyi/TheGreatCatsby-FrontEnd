/**
 * @filename    : TableList.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 관리자 페이지 Table UI 컴포넌트
 */

import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';

const Table = styled.table`
    text-align: center;
    border: 1px solid black;
    width: 100%;
    border-collapse: collapse;
    margin-top: 50px;
`;

const Input = styled.input`
    text-align: center;
    width: 90%;
    border: none !important;
    font-size: 0.875rem;
    line-height: 1.25rem;
    
    &.checkBox {
    zoom: 1.5;
    vertical-align: middle;
    }
`;

const TableHeader = styled.th`
    border: 1px solid black;
    padding: 10px;
    background-color: #e1e1e1;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: bold;: ;
`;

const TableData = styled.td`
    border: 1px solid black;
    padding: 10px;
`;


/*
* @param   {string} columns             th에 들어갈 항목의 배열 (수정, 삭제 버튼이 들어갈 관리 th 는 고정해두었으므로 자동 생성)
* @param   {string} data                테이블 td 에 들어갈 데이터
* @param   {boolean} isModifiable       true 일 때 수정 버튼 생성
* @param   {boolean} isRemovable        true 일 때 삭제 버튼 생성
* @param   {string} removeButtonText    삭제 버튼에 들어갈 text (예시: 탈퇴)
* @param   {function} onModifyButtonClick 수정 버튼의 클릭이벤트
* @param   {function} onRemoveButtonClick 삭제 버튼의 클릭이벤트
*/


const TableList = ({ columns, data, isModifiable, isRemovable, removeButtonText, onModifyButtonClick, onRemoveButtonClick }) => {

    return (
        <div>
            <Table>
                <thead>
                    {columns.map(column => (
                        <TableHeader key={column}>{column}</TableHeader>
                    ))}
                    <TableHeader colSpan="2">관리</TableHeader>
                </thead>
                <tbody>
                    {data.map(cur => (
                        <tr key={cur}>
                            {Object.keys(cur).map((key, index) =>
                                index === 0 ? (
                                    <TableData>{cur[key]}</TableData>
                                ) : typeof cur[key] === 'boolean' ? (
                                    <TableData>
                                        <Input className="checkBox" type="checkbox" checked={cur[key]} />
                                    </TableData>
                                ) : (
                                    <TableData>
                                        <Input type="text" value={cur[key]} />
                                    </TableData>
                                ),
                            )}
                            {isModifiable ? (
                                <TableData>
                                    <Button size='8px' bgColor={'var(--blue300)'} onClick={onModifyButtonClick}>수정</Button>
                                </TableData>
                            ) : null}

                            {isRemovable ? (
                                <TableData>
                                    <Button size='8px' bgColor={'var(--primary)'} onClick={onRemoveButtonClick}>{removeButtonText}</Button>
                                </TableData>
                            ) : null}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TableList;

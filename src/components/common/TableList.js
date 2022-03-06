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
* @param   {string} removeButtonText    remove 버튼에 들어갈 text, 기본값은 "삭제"
* @param   {function} onModifyButtonClick 수정 버튼의 클릭이벤트
* @param   {function} onRemoveButtonClick 삭제 버튼의 클릭이벤트
* @param   {function} onChange          Input type="text" 태그의 수정을 위한 콜백함수
* @param   {function} onChecked         Input type="checkbox" 태그의 수정을 위한 콜백함수
*/


const TableList = ({ columns, data, isModifiable, isRemovable, onModifyButtonClick, onRemoveButtonClick, removeButtonText, onChange, onChecked }) => {

    return (
        <div>
            <Table>
                <thead>
                    {columns.map((column, index) => (
                        <TableHeader key={index}>{column}</TableHeader>
                    ))}
                    <TableHeader colSpan="2">관리</TableHeader>
                </thead>
                <tbody>
                    {data.map((cur, cIndex) => (
                        <tr key={cIndex}>
                            {Object.keys(cur).map((key, index) =>
                                index === 0 ? (
                                    <TableData>{cur[key]}</TableData>
                                ) : typeof cur[key] === 'boolean' ? (
                                    <TableData>
                                        <Input key={cIndex} id={cIndex} name={key} className="checkBox" type="checkbox" checked={cur[key]} onChange={onChecked} />
                                    </TableData>
                                ) : (
                                    <TableData>
                                        <Input type="text" key={cIndex} id={cIndex} name={key} value={cur[key]} onChange={onChange} />
                                    </TableData>
                                ),
                            )}
                            {isModifiable ? (
                                <TableData>
                                    <Button key={cIndex} id={cIndex} size='8px' bgColor={'var(--blue300)'} onClick={onModifyButtonClick}>수정</Button>
                                </TableData>
                            ) : null}

                            {isRemovable ? (
                                <TableData>
                                    <Button key={cIndex} id={cIndex} size='8px' bgColor={'var(--primary)'} onClick={onRemoveButtonClick}>{removeButtonText || "삭제"}</Button>
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

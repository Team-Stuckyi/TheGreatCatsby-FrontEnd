
/**
 * @filename    : TableList.js
 * @author      : 노희재 (heejj1206@naver.com)
 * @description : 관리자 페이지 Table UI 컴포넌트
 */

import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    text-align: center;
    border: 1px solid black;
    width: 100%;
    border-collapse: collapse;
`;

const Input = styled.input`
    text-align: center;
    border: none !important;
`;

const TableHeader = styled.th`
    border: 1px solid black;
    padding: 10px;
    background-color: #e1e1e1;
`;

const TableData = styled.td`
    border: 1px solid black;
    padding: 10px;
`;

const Button = styled.button`
    border: none;
    height: calc(100% - 50px);
    padding: 5px;
    border-radius: 5px;
    color: var(--white);
    background-color: var(--blue300);
    cursor: pointer;
    width: 100%;
`;

const ButtonDanger = styled(Button) `
    background-color: var(--primary);
`;



const TableList = ({columns, data}) => {
    return (
        <div>
            <Table>
                    <thead>
                            {columns.map((column, index) => (
                                <TableHeader key={column}>{column}</TableHeader>         
                            ))}
                            <TableHeader colSpan="2">관리</TableHeader>
                    </thead>
                    <tbody>
                        {data.map((cur) => (
                            <tr key={cur}>
                                {Object.keys(cur).map((key) => (
                                <TableData><Input value={cur[key]} /></TableData>
                                ))}

                                <TableData><Button>수정</Button></TableData>
                                <TableData><ButtonDanger>삭제</ButtonDanger></TableData>
                            </tr>
                        ))}
                    </tbody>
            </Table>
            
        </div>
        
    );
};

export default TableList;
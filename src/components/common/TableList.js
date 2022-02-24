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

const TableList = ({ columns, data, isModifiable, isRemovable }) => {
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
                                        <Input type="checkbox" checked={cur[key]} />
                                    </TableData>
                                ) : (
                                    <TableData>
                                        <Input value={cur[key]} />
                                    </TableData>
                                ),
                            )}
                            {isModifiable ? (
                                <TableData>
                                    <Button bgColor={'var(--blue300)'}>수정</Button>
                                </TableData>
                            ) : null}

                            {isRemovable ? (
                                <TableData>
                                    <Button bgColor={'var(--primary)'}>삭제</Button>
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

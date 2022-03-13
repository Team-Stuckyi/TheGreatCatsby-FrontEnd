import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Pagination from './Pagination';

const Table = styled.table`
    text-align: center;
    border: 1px solid var(--black);
    width: 100%;
    border-collapse: collapse;
    margin-top: 50px;
`;

const Th = styled.th`
    border: 1px solid var(--black);
    background-color: var(--gray200);
    padding: 10px;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: bold;: ;
    width : ${props => props.columnsWidth};
`;

const Td = styled.td`
    font-size: 13px;
    border: 1px solid var(--black);
    padding: 10px;
`;

const Input = styled.input`
    text-align: center;
    width: 95%;
    padding: 5px;
    border: none !important;
    font-size: 0.875rem;
    line-height: 1.25rem;
`;
/**
 * @columns 컬럼명 (필수)
 * @data 데이터 (필수)
 * @columnsWidth 각 컬럼 길이 (선택)
 * @columnSpecial 관리탭 옵션 (필수)
 * @objLen 컬럼의 길이 (필수)
 * @onChange - 값 수정시 사용될 이벤트 (선택)
 * @onClick1 - 첫번째 버튼 클릭이벤트 (필수)
 * @onClick2 - 두번째 버튼 클릭이벤트 (선택)
 * @total 페이지네이션 - 총 게시물수 (필수)
 * @limit 페이지네이션 - 한 페이지에 보여질 게시물 수 (필수)
 * @page 페이지네이션 - 시작 페이지 번호 (필수)
 * @setPage 페이지네이션 - 현재 페이지 번호 (필수)
 */

const TableList = ({
    columns,
    data,
    columnsWidth,
    columnSpecial,
    objLen,
    onChange,
    onClick1,
    onClick2,
    total,
    limit,
    page,
    setPage,
}) => {
    /** 테이블 Header구성 */
    const HeadPrint = columns.map((value, idx) => (
        <>
            <Th key={value} columnsWidth={columnsWidth[idx]}>
                {value}
            </Th>
            {columnSpecial[1] && columns.length === idx + 1 ? (
                <Th colSpan={columnSpecial[1]} key={columnSpecial[0]}>
                    {columnSpecial[0]}
                </Th>
            ) : (
                <></>
            )}
        </>
    ));

    /** 테이블 Body 구성 */
    const BodyPrint = data.map((dataValue, dataIdx) => (
        <tr key={dataIdx}>
            {Object.keys(dataValue).map((key, index) => (
                <>
                    {dataValue[key] ? (
                        <Td>
                            <Input id={index} key={dataValue[key]} type="text" defaultValue={dataValue[key]} onChange={onChange} />
                        </Td>
                    ) : (
                        <Td>
                            <Input id={index} key={dataValue[key]} type="text" defaultValue={dataValue[key]} onChange={onChange} />
                        </Td>
                    )}
                    {index === objLen ? (
                        <>
                            {columnSpecial[2] ? (
                                <Td>
                                    <Button
                                        key={`btn1` + key}
                                        data-id={Object.values(dataValue)[0]}
                                        size="sm"
                                        bgColor={columnSpecial[3]}
                                        onClick={onClick1}
                                    >
                                        {columnSpecial[2]}
                                    </Button>
                                </Td>
                            ) : null}
                            {columnSpecial[4] ? (
                                <Td>
                                    <Button
                                        key={`btn2` + key}
                                        data-id={Object.values(dataValue)[0]}
                                        size="sm"
                                        bgColor={columnSpecial[5]}
                                        onClick={onClick2}
                                    >
                                        {columnSpecial[4]}
                                    </Button>
                                </Td>
                            ) : null}
                        </>
                    ) : null}
                </>
            ))}
        </tr>
    ));

    return (
        <>
            <div style={{ height: '600px' }}>
                <Table>
                    <thead>
                        <tr>{HeadPrint}</tr>
                    </thead>
                    <tbody>{BodyPrint}</tbody>
                </Table>
            </div>
            <Pagination total={total} limit={limit} page={page} setPage={setPage} />
        </>
    );
};

export default TableList;
/**
 * @filename    : Pagination.js
 * @author      : 이슬기 (https://github.com/abcabcp)
 * @description : 페이지네이션 컴포넌트
 */

import styled, { css } from 'styled-components';

const Nav = styled.nav`
    text-align: center;
    margin: 15px 0;
`;

const PageButton = styled.button`
    border: none;
    background: none;
    margin: 0 13px 0 13px;
    width: 25px;
    height: 25px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;

    &[disabled] {
        color: var(--gray200);
        cursor: revert;
        transform: revert;
    }
    &[aria-current] {
        background: var(--gray100);
        font-weight: bold;
        cursor: revert;
        transform: revert;
    }
    ${props =>
        props.bold &&
        css`
            font-weight: bold;
        `}
    ${props =>
        props.hover &&
        css`
            :hover {
                background: var(--gray100);
            }
        `}
`;

/*
 * @param   {number} total 총 게시물 수
 * @param   {number} limit 한 페이지에 보여질 게시물 수
 * @param   {number} page  시작 페이지
 * @param   {number} setpage 현재 페이지
 */
const Pagination = ({ total, limit, page, setPage }) => {
    // 필요한 페이지 개수: 총 게시글 수 개수/한 페이지에 게시글 수
    const numPages = Math.ceil(total / limit);

    return (
        <Nav>
            {/*
             * 이전 버튼
             * 첫 페이지시 비활성화
             */}
            <PageButton onClick={() => setPage(page - 1)} disabled={page === 1} bold={true}>
                &lt;
            </PageButton>
            {Array(numPages)
                .fill()
                .map((v, i) => (
                    <PageButton key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? 'page' : null} hover={true}>
                        {i + 1}
                    </PageButton>
                ))}
            {/*
             * 다음버튼
             * 마지막 페이지 일 시 비활성화
             */}
            <PageButton onClick={() => setPage(page + 1)} disabled={page === numPages} bold={true}>
                &gt;
            </PageButton>
        </Nav>
    );
};

export default Pagination;

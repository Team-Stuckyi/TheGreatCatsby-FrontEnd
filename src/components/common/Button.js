/**
 * @filename    : Button.js
 * @author      : 이병민 (https://github.com/Byeongminlee)
 * @description : 버튼 컴포넌트
 */

import styled from 'styled-components';

/*
 * @param   {string} width 가로 길이 (기본 100%)
 * @param   {string} bgColor 버튼 배경 색 (기본 #f76b8a)
 * @param   {string} fontColor  텍스트 색 (기본 #fff)
 * @param   {string} border 버튼 선 (기본 none)
 * @param   {string} size 버튼 높이 (기본 lg:12px, md:8px, sm:4px)
 */

const Button = styled.button`
    font-family: 'InfinitySansR-Regular';
    border-radius: 5px;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
    margin: 2px;

    width: calc(${props => props.width || '100%'} - 4px);
    background-color: ${props => props.bgColor || '#f76b8a'};
    color: ${props => props.fontColor || '#fff'};
    border: ${props => props.border || 'none'};
    padding: ${props => {
            if (props.size === 'lg' || !props.size) return '12px';
            else if (props.size === 'md') return '8px';
            else if (props.size === 'sm') return '4px';
            else return props.size;
        }}
        4px;
`;

export default Button;

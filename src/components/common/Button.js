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
 * @param   {string} hover 버튼 hover (기본 밝기 95%), off를 전달하여 hover 사용 없애기, hover의 밝기는 props값으로 조절 가능
 */

const Button = styled.button`
    font-family: 'InfinitySansR-Regular';
    border-radius: 5px;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
    margin: 2px;

    width: calc(${props => props.width || '100%'} - 4px);
    background-color: ${props => props.bgColor || 'var(--primary)'};
    color: ${props => props.fontColor || 'var(--white)'};
    border: ${props => props.border || 'none'};
    padding: ${props => {
        if (props.size === 'lg' || !props.size) return '12px';
        else if (props.size === 'md') return '8px';
        else if (props.size === 'sm') return '4px';
        else return props.size;
    }}
        4px;
    &:hover {
    filter: ${props => {
        if (!props.hover) return 'brightness(95%)';
        else if (props.hover === 'off') return;
        else if (props.hover) return `brightness(${props.hover})`;
    }}
`;

export default Button;

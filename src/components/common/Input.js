/**
 * @filename    : InPut.js
 * @author      : 전찬민 (https://github.com/cksals3753)
 * @description : Input 컴포넌트
 */

import React from 'react';
import styled from 'styled-components';

const InputFull = styled.input`
font-family: 'InfinitySansR-Regular';
width: ${(props) => props.width || 'calc(100% - 8px)'};
height: ${(props) => props.height || '38px'};
padding: ${(props) => props.Padding || '10px'};
outline: ${(props) => props.Outline || 'none'};
border-radius: ${(props) => props.Radius || '5px'};
border: 1px solid ${(props) => props.borderColor || 'var(--primary)'};

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

const InputMiddle = styled.input`
font-family: 'InfinitySansR-Regular';
width: ${(props) => props.width || 'calc(75% - 8px)'};
height: ${(props) => props.height || '38px'};
padding: ${(props) => props.Padding || '10px'};
outline: ${(props) => props.Outline || 'none'};
border-radius: ${(props) => props.Radius || '5px'};
border: 1px solid ${(props) => props.borderColor || 'var(--primary)'};

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

const InputHalf = styled.input`
font-family: 'InfinitySansR-Regular';
width: ${(props) => props.width || 'calc(50% - 8px)'};
height: ${(props) => props.height || '38px'};
padding: ${(props) => props.Padding || '10px'};
outline: ${(props) => props.Outline || 'none'};
border-radius: ${(props) => props.Radius || '5px'};
border: 1px solid ${(props) => props.borderColor || 'var(--primary)'};

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

const InputSmall = styled.input`
font-family: 'InfinitySansR-Regular';
width: ${(props) => props.width || 'calc(35% - 8px)'};
height: ${(props) => props.height || '38px'};
padding: ${(props) => props.Padding || '10px'};
outline: ${(props) => props.Outline || 'none'};
border-radius: ${(props) => props.Radius || '5px'};
border: 1px solid ${(props) => props.borderColor || 'var(--primary)'};

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

/*
 * @param   {string} width 가로 길이
 * @param   {string} Inptype 각 type에 대한 크기조절 가능
 * @param   {string} InpColor 인풋 배경 색
 * @param   {string} fontColor  텍스트 색
 * @param   {string} borderColor 버튼 선 (기본 #f76b8a)
 * @param   {string} placeholder  Intputtext
 * @param   {string} Radius  박스 모서리 각도
 * @param   {string} type  input의 type
 * @param   {string} height  Input 세로길이
 * @param   {string} Padding  padding
 * @param   {string} Outline  테두리 선
 * @param   {string} value  Input 값
 * @param   {string} name  Input 이름
 */

const Input = ({
  Inptype,
  InpWidth,
  fontColor = 'var(--gray400)',
  InpColor = 'var(--white)',
  text = '입력',
  onChange,
  borderColor,
  placeholder,
  Radius,
  type,
  height,
  Padding,
  Outline,
  value,
  name,
  width
}) => {
  return (
    <>
      {Inptype === 'full' ?
        <InputFull
          type={type}
          InpWidth={InpWidth}
          fontColor={fontColor}
          InpColor={InpColor}
          onChange={onChange}
          placeholder={placeholder}
          borderColor={borderColor}
          text={text}
          Radius={Radius}
          Outline={Outline}
          height={height}
          Padding={Padding}
          value={value}
          name={name}
          width={width}
        />
        : (Inptype === 'middle' ?
          <InputMiddle
            type={type}
            InpWidth={InpWidth}
            fontColor={fontColor}
            InpColor={InpColor}
            onChange={onChange}
            placeholder={placeholder}
            borderColor={borderColor}
            text={text}
            Radius={Radius}
            Outline={Outline}
            height={height}
            Padding={Padding}
            value={value}
            name={name}
            width={width}
          />
          : (Inptype === 'half' ?
            <InputHalf
              type={type}
              InpWidth={InpWidth}
              fontColor={fontColor}
              InpColor={InpColor}
              onChange={onChange}
              placeholder={placeholder}
              borderColor={borderColor}
              text={text}
              Radius={Radius}
              Outline={Outline}
              height={height}
              Padding={Padding}
              value={value}
              name={name}
              width={width}
            />
            : <InputSmall
              type={type}
              InpWidth={InpWidth}
              fontColor={fontColor}
              InpColor={InpColor}
              onChange={onChange}
              placeholder={placeholder}
              borderColor={borderColor}
              text={text}
              Radius={Radius}
              Outline={Outline}
              height={height}
              Padding={Padding}
              value={value}
              name={name}
              width={width}
            />
          ))}
    </>
  );
};

export default Input;
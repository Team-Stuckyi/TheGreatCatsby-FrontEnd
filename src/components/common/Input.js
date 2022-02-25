/**
 * @filename    : InPut.js
 * @author      : 전찬민 (https://github.com/cksals3753)
 * @description : Input 컴포넌트
 */

import React from 'react';
import styled from 'styled-components';

const InputFull = styled.input`
width: calc(100% - 8px);
height: 38px;
border-radius: 5px;
border: 1px solid ${(props) => props.borderColor || 'var(--primary)'};

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

const InputMiddle = styled.input`
width: calc(75 % - 8px);
height: 38px;
border-radius: 5px;
border: 1px solid ${(props) => props.borderColor || 'var(--primary)'};

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

const InputHalf = styled.input`
width: calc(50 % - 8px);
height: 38px;
border-radius: 5px;
border: 1px solid ${(props) => props.borderColor || 'var(--primary)'};

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

const InputSmall = styled.input`
width: calc(35 % - 8px);
height: 38px;
border-radius: 5px;
border: 1px solid ${(props) => props.borderColor || 'var(--primary)'};

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

/*
 * @param   {string} Inpwidth 가로 길이
 * @param   {string} Inptype 각 type에 대한 크기조절 가능
 * @param   {string} InpColor 인풋 배경 색
 * @param   {string} fontColor  텍스트 색
 * @param   {string} borderColor 버튼 선 (기본 #f76b8a)
 */

const Input = ({
  Inptype = 'small',
  InpWidth = '100%',
  fontColor = 'var(--gray400)',
  InpColor = 'var(--white)',
  text = '입력',
  onChange,
  borderColor,
  placeholder,
  type,
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
            />
          ))}
    </>
  );
};

export default Input;
import React from 'react';
import styled from 'styled-components';

const InputFull = styled.input`
width: calc(100% - 8px);
height: 38px;
border-radius: 5px;
border: 1px solid var(--primary);

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

const InputMiddle = styled.input`
width: calc(75% - 8px);
height: 38px;
border-radius: 5px;
border: 1px solid var(--primary);

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

const InputHalf = styled.input`
width: calc(50% - 8px);
height: 38px;
border-radius: 5px;
border: 1px solid var(--primary);

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

const InputSmall = styled.input`
width: calc(35% - 8px);
height: 38px;
border-radius: 5px;
border: none;

max-width: ${(props) => props.InpWidth};
color: ${(props) => props.fontColor};
background-color: ${(props) => props.InpColor};
`;

const Input = ({
  Inptype = 'small',
  InpWidth = '100%',
  fontColor = 'var(--gray400)',
  InpColor = 'var(--white)',
  text = '입력',
  onChange,
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
              text={text}
            />
            : <InputSmall
              type={type}
              InpWidth={InpWidth}
              fontColor={fontColor}
              InpColor={InpColor}
              onChange={onChange}
              placeholder={placeholder}
              text={text}
            />
          ))}
    </>
  );
};

export default Input;
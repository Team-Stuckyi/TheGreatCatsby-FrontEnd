/**
 * @filename    : Logo.js
 * @author      : 전찬민 (https://github.com/cksals3753)
 * @description : Logo 컴포넌트
 */
import React from 'react';
import styled from 'styled-components';
import CenterLogo from 'img/TheGreatCatsby-Center-Pink-logo.png';
import LightLogo from 'img/TheGreatCatsby-light-logo.png';

/*
 * @param   {string} width 가로 길이 (기본 100%)
 */

const ImgCenter = styled.img`
height: 100%;
width: ${(props) => props.Imgwidth};
`;

const ImgLight = styled.img`
height: 100%;
width: ${(props) => props.Imgwidth};
`;

const Logo = ({
    Imgtype = 'center',
    Imgwidth = '100%',
    alt = '로고'
}) => {
    return (
        <>
            {Imgtype === 'light' ? (
                <ImgCenter alt={alt} Imgwidth={Imgwidth} src={CenterLogo} />
            ) : (
                <ImgLight alt={alt} Imgwidth={Imgwidth} src={LightLogo} />
            )}
        </>
    )
};

export default Logo;
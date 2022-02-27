/**
 * @filename    : ReviewWrite.js
 * @author      : 이병민 (https://github.com/Byeongminlee)
 * @description : 리뷰페이지에서 리뷰 등록(내용, 사진 ,평점)
 */

import React, { useState } from 'react';
import Button from 'components/common/Button';
import Container from 'components/common/Container';
import Input from 'components/common/Input';
import Stars from 'components/common/Stars';
import styled from 'styled-components';

const WriterBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const InputBox = styled.div`
    width: 900px;
    border: 1px solid var(--gray300);
    padding: 20px;
    border-radius: 5px;
    margin: 50px 0;
`;

const Box = styled.div`
    display: inline-block;
    text-align: center;
    padding: 20px 0;
    width: 200px;
    margin-top: 30px;
`;

const InputFileBox = styled.div`
    display: inline-block;
    text-align: center;
    padding: 20px 0;
    width: 250px;
    margin-top: 60px;
    margin: 10px 40px 0 10px;
`;

const InputFile = styled.label`
    border: 1px solid var(--primary);
    border-radius: 5px;
    color: var(--primary);
    cursor: pointer;
    padding: 10px;
`;

const InputFileName = styled.p`
    font-size: 12px;
    text-align: center;
    padding: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ReviewWrite = ({ starCount = 4.1 }) => {
    const [imgFileName, setImgFileName] = useState('');
    const handleInputFile = event => {
        const imgFile = event.target.files[0];

        setImgFileName(imgFile.name);
    };
    return (
        <Container>
            <WriterBox>
                <InputBox>
                    <Input Inptype="full" fontColor="var(--black);" borderColor={'var(--white)'} />
                </InputBox>
                <InputFileBox>
                    {imgFileName ? <InputFileName>{imgFileName}</InputFileName> : <InputFileName>이미지를 선택해주세요.</InputFileName>}
                    <InputFile for="input-file">사진 선택</InputFile>

                    <input type="file" id="input-file" style={{ display: 'none' }} onChange={handleInputFile} />
                </InputFileBox>
                <Box>
                    <Stars starCount={Math.floor(starCount)} starSize="40px" />
                    <Button size="lg">버튼</Button>
                </Box>
            </WriterBox>
        </Container>
    );
};

export default ReviewWrite;

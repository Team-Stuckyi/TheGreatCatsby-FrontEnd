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

// star 부분
const ClickStar = styled.span`
    font-size: 40px;
    color: ${props => (props.on ? 'var(--yellowstar)' : 'var(--gray100)')};
    cursor: pointer;
`;
// star 부분

const ReviewWrite = () => {
    const [imgFileName, setImgFileName] = useState('');
    const [starCount, setStarCount] = useState();
    const [clickStarValue, setClickStarValue] = useState([false, false, false, false, false]);

    const handleInputFile = event => {
        const imgFile = event.target.files[0];

        setImgFileName(imgFile.name);
    };

    const starHandler = e => {
        let data = [];
        let target = parseInt(e.target.dataset.count);
        setStarCount(target + 1);

        if (clickStarValue[0] === true && clickStarValue[1] === false && target === 0) {
            return setClickStarValue(() => [false, false, false, false, false]);
        }

        for (let i = 0; i < 5; i++) {
            if (i < starCount) {
                data.push(true);
            } else {
                data.push(false);
            }
        }

        setClickStarValue(() => data);
    };

    return (
        <Container>
            <WriterBox>
                <InputBox>
                    <Input Inptype="full" fontColor="var(--black);" borderColor={'var(--white)'} />
                </InputBox>
                <InputFileBox>
                    {imgFileName ? <InputFileName>{imgFileName}</InputFileName> : <InputFileName>이미지를 선택해주세요.</InputFileName>}
                    <InputFile htmlfor="input-file">사진 선택</InputFile>

                    <input type="file" id="input-file" style={{ display: 'none' }} onChange={handleInputFile} />
                </InputFileBox>
                <Box>
                    <div>
                        {clickStarValue.map((value, idx) => (
                            <ClickStar on={clickStarValue[idx]} data-count={idx} onClick={starHandler}>
                                ★
                            </ClickStar>
                        ))}
                    </div>
                    <Button size="lg">버튼</Button>
                </Box>
            </WriterBox>
        </Container>
    );
};

export default ReviewWrite;

import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Input from 'components/common/Input';


const ModalContainer = styled.div`
    border-radius: 5px;
    width: 600px;
    height: 800px;
    padding: 30px 50px 30px 50px;
    background-color: var(--gray100);
    position: fixed;
    top: 40px;
    left: calc(50% - 300px);
    z-index: 2000;
    box-shadow: 5px 5px 15px 5px var(--gray400);
    overflow-y: scroll;
`;

const ModalClose = styled.button`
    cursor: pointer;
    border: 0;
    margin-bottom: 10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    float: right;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.75rem;
    cursor: pointer;
`;

const Title = styled.h3`
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.75rem;
`;

const ModalFull = styled.div`
    padding: 5px;
    margin: 15px 0;   
`;

const ModalHalf = styled.div`
    padding: 5px;
    width: calc(50% - 0px);
    float: left;
    margin: 15px 0;
`;

const SubTitle = styled.h4`
    margin-bottom: 20px;
    &.lastSubTitle {
        margin-top: -15px;
    }
`;

const ModalTextarea = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    border-radius: 5px;
    padding-top: 10px;
    border-color: var(--gray500);
`;

const BackgroundBlack = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    width: 100%;
    height: 100%;
    background-color: var(--gray600);
    opacity: 0.3;
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
    max-width: 200px;
    font-size: 12px;
    text-align: center;
    padding: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const AddProd = ({ closeModal }) => {
    const [imgFileName, setImgFileName] = useState('');
    const [imgFile, setImgFile] = useState('');

    const ClickClose = (e) => {
        closeModal(false);
    }

    const handleInputFile = event => {
        // 파일이름 저장
        setImgFileName(event.target.files[0].name);
        // 파일 저장
        setImgFile(event.target.files[0]);

        console.log(imgFileName);
        console.log(imgFile);
    };
    return (
        <div>
        <ModalContainer>
            <ModalClose onClick={ClickClose}>X</ModalClose>

            <Title>상품 등록</Title>
            <ModalHalf>
                <SubTitle>상품명</SubTitle>
                <Input Inptype="full" borderColor="var(--gray500)" placeholder="상품명을 입력하세요" />
            </ModalHalf>
            <ModalHalf>
                <SubTitle>판매가</SubTitle>
                <Input Inptype="full" borderColor="var(--gray500)" placeholder="판매가를 입력하세요" />
            </ModalHalf>
            <ModalFull>
                <SubTitle>카테고리</SubTitle>
                <Input Inptype="full" InpWidth="232px" borderColor="var(--gray500)" placeholder="카테고리를 입력하세요" />
            </ModalFull>
            <ModalFull>
                <SubTitle>상품 특징</SubTitle>
                <ModalTextarea placeholder="상품 특징을 입력하세요"></ModalTextarea>
            </ModalFull>
            <ModalFull>
                <SubTitle>상품 설명</SubTitle>
                <ModalTextarea placeholder="상품 설명을 입력하세요"></ModalTextarea>
            </ModalFull>
            <ModalHalf>
                <SubTitle className="lastSubTitle">상품 썸네일 이미지</SubTitle>
                <Button dataAlert="modalimage" bgColor={"var(--gray300)"} fontColor={"var(--black)"}>
                    상품 썸네일이미지 선택
                </Button>
            </ModalHalf>
            <ModalHalf>
                <SubTitle className="lastSubTitle">상품 정보 이미지</SubTitle>
                <Button dataAlert="modalimage" bgColor={"var(--gray300)"} fontColor={"var(--black)"}>
                    상품 정보 이미지 선택
                </Button>
            </ModalHalf>
            <ModalFull>
                <Button id="modalSubmit" bgColor={"var(--blue300)"}>상품 등록</Button>
            </ModalFull>
            <InputFileBox>
                    {imgFileName ? <InputFileName>{imgFileName}</InputFileName> : <InputFileName>이미지를 선택해주세요.</InputFileName>}
                    <InputFile htmlFor="input-file">사진 선택</InputFile>
                    <input type="file" name="imgFile" id="input-file" style={{ display: 'none' }} onChange={handleInputFile} />
            </InputFileBox>
        </ModalContainer>
        <BackgroundBlack></BackgroundBlack>
    </div>
    );
};

export default AddProd;
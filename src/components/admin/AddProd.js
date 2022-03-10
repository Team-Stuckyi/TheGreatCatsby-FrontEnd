import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Input from 'components/common/Input';

import { useDispatch } from "react-redux";
import { postProduct } from 'slices/admin/AddProdSlice';


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
    width: 180px;
    margin-top: -30px;
    margin-bottom: 10px;
`;

const InputFile = styled.label`
    border: 1px solid var(--gray300);
    border-radius: 5px;
    background-color: var(--gray300);
    color: var(--black);
    cursor: pointer;
    padding: 10px 30px;
    font-size: 0.725rem;
    line-height: 0.85rem;

    &.infoBtn {
        margin-left: -10px;
    }
`;

const InputFileName = styled.p`
    max-width: 200px;
    font-size: 12px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--gray400);
    margin-bottom: 20px;
`;

const AddProd = ({ closeModal }) => {
    const [thumbImgFileName, setThumbImgFileName] = useState('');
    const [thumbImgFile, setThumbImgFile] = useState('');
    const [infoImgFileName, setInfoImgFileName] = useState('');
    const [infoImgFile, setInfoImgFile] = useState('');
    const [prodName, setProdName] = useState('');
    const [prodPrice, setProdPrice] = useState('');
    const [prodCategory, setCategory] = useState('');
    const [feature, setFeature] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');
    const dispatch = useDispatch();

    const ClickClose = (e) => {
        closeModal(false);
    }

    const handleThumbInputFile = (e) => {
        // 파일이름 저장
        setThumbImgFileName(e.target.files[0].name);
        // 파일 저장
        setThumbImgFile(e.target.files[0]);
    };

    const handleInfoInputFile = (e) => {
        // 파일이름 저장
        setInfoImgFileName(e.target.files[0].name);
        // 파일 저장
        setInfoImgFile(e.target.files[0]);
    };

    const onNameChange = (e) => {
        setProdName(e.target.value);
    }

    const onPriceChange = (e) => {
        setProdPrice(e.target.value);
    }

    const onCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const onFeatureChange = (e) => {
        setFeature(e.target.value);
    }

    const onDescChange = (e) => {
        setDescription(e.target.value);
    }

    const onStockChange = (e) => {
        setStock(e.target.value);
    }

    const onSubmit = (e) => {
        const formData = new FormData();
        formData.append('thumbImage', thumbImgFile);
        formData.append('infoImage', infoImgFile);
        formData.append('name', `${prodName}`);
        formData.append('price', `${prodPrice}`);
        formData.append('category', `${prodCategory}`);
        formData.append('prod_feature', `${feature}`);
        formData.append('prod_info', `${description}`);
        formData.append('stock', `${stock}`)

        dispatch(postProduct(formData));
    }

    return (
        <div>
        <ModalContainer>
            <ModalClose onClick={ClickClose}>X</ModalClose>

            <Title>상품 등록</Title>
            <ModalHalf>
                <SubTitle>상품명</SubTitle>
                <Input Inptype="full" borderColor="var(--gray500)" placeholder="상품명을 입력하세요" onChange={onNameChange}/>
            </ModalHalf>
            <ModalHalf>
                <SubTitle>판매가</SubTitle>
                <Input Inptype="full" borderColor="var(--gray500)" placeholder="판매가를 입력하세요" onChange={onPriceChange}/>
            </ModalHalf>
            <ModalHalf>
                <SubTitle>카테고리</SubTitle>
                <Input Inptype="full" InpWidth="232px" borderColor="var(--gray500)" placeholder="카테고리를 입력하세요" onChange={onCategoryChange}/>
            </ModalHalf>
            <ModalHalf>
                <SubTitle>재고 수량</SubTitle>
                <Input Inptype="full" InpWidth="232px" borderColor="var(--gray500)" placeholder="재고 수량을 입력하세요" onChange={onStockChange}/>
            </ModalHalf>
            <ModalFull>
                <SubTitle>상품 특징</SubTitle>
                <ModalTextarea placeholder="상품 특징을 입력하세요" onChange={onFeatureChange}></ModalTextarea>
            </ModalFull>
            <ModalFull>
                <SubTitle>상품 설명</SubTitle>
                <ModalTextarea placeholder="상품 설명을 입력하세요" onChange={onDescChange}></ModalTextarea>
            </ModalFull>
            <ModalHalf>
                <SubTitle className="lastSubTitle">상품 썸네일 이미지</SubTitle>
                <InputFileBox>
                    {thumbImgFileName ? <InputFileName className="thumbFile">{thumbImgFileName}</InputFileName> : <InputFileName></InputFileName>}
                    <InputFile htmlFor="thumb-file">상품 썸네일 이미지 선택</InputFile>
                    <input type="file" name="imgFile" id="thumb-file" style={{ display: 'none' }} onChange={handleThumbInputFile} />
                </InputFileBox>
            </ModalHalf>
            <ModalHalf>
                <SubTitle className="lastSubTitle">상품 정보 이미지</SubTitle>
                <InputFileBox>
                    {infoImgFileName ? <InputFileName>{infoImgFileName}</InputFileName> : <InputFileName></InputFileName>}
                    <InputFile htmlFor="info-file" className="infoBtn">상품 정보 이미지 선택</InputFile>
                    <input type="file" name="imgFile" id="info-file" style={{ display: 'none' }} onChange={handleInfoInputFile} />
                </InputFileBox>
            </ModalHalf>
            <ModalFull>
                <Button id="modalSubmit" bgColor={"var(--blue300)"} onClick={onSubmit}>상품 등록</Button>
            </ModalFull>
        </ModalContainer>
        <BackgroundBlack></BackgroundBlack>
    </div>
    );
};

export default AddProd;
import styled from 'styled-components';
import {useState, useEffect} from "react";

const ListContainer =  styled.div`
    height: 40px;
    border-top: 2px solid var(--gray200);
    border-bottom: 2px solid var(--gray200);
    padding: 5px;
    margin-bottom: 30px;
    position: relative;
`;

const Count = styled.h3`
    display: inline-block;
    font-size: 15px;
    text-indent: 10px;
`

const SelecContainer = styled.div`
    position: absolute;
    right: 9px;
    top: 4px;
`;

const Label = styled.label`
    font-size: 13px;
    color: var(--gray400);
    padding-right: 3px;
`
const Select = styled.select`
    border: none;
    text-align: center;
    font-size: 13px;
    &:focus {
        outline:none;
    }

`;

const ListBar = ({SortObj}) => {
    const [asc, setAsc] = useState([]);
    const [ready,setReady] = useState(true)

    //useEffect 로 정렬하고 map 다시해보는걸로
    useEffect(()=> {
        setTimeout(()=>{
            setAsc(SortObj.item);
            setReady(false) 
        },1000)
    },[]);

    console.log(asc);


    return(
        <ListContainer>
            <Count>7 개의 상품</Count>
            <SelecContainer>
                <Label>정렬</Label>
                <Select>
                    <option value="star" selected >별점 높은순</option>
                    <option value="lowPrice"> 가격 낮은순</option>
                    <option value="highPrice">가격 높은순</option>
                    <option value="review">후기 많은순</option>
                </Select>
            </SelecContainer>
        </ListContainer>
    )
}

export default ListBar;
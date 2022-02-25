import { useState, useEffect } from "react";
import styled, {css} from 'styled-components';
import ProdCard from 'components/users/ProdCard';
import ProdCardList from "components/users/ProdCardList";
import Pagination from 'components/common/Pagination';
import ListBar from 'components/users/ListBar';

const Tab = styled.li`
    display: inline-block;
    border-radius: 22px;
    background-color: #eeeeee;
    padding: 2px 17px;
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 20px;

    ${(props) => props.active && css`
        background-color: #f76b8a;
        color: #fff;
    `}
`

const CardListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 250px);
`;

// 여기 안에 가격정렬 선택함수 넣기
// 태그 정렬 -> 안에 가격정렬
// 태그 정렬할 때 -> 안에 가격정렬 초기화

const Tabs = ({ ProdObj }) => {

    //기존 카테고리를 저장하고 있을 상태
    const [state,setState] = useState([]);
    //카테고리에 따라 다른 꿀팁을 그때그때 저장관리할 상태
    const [cateState,setCateState] = useState([]);

    const [ready,setReady] = useState(true)

    useEffect(()=>{
        //1초 뒤에 실행되는 코드들이 담겨 있는 함수
        setTimeout(()=>{
            //데이터로 모두 초기화 준비
            let item = ProdObj.item;
            setState(item)
            setCateState(item)
            setReady(false) 
        },1000)
    },[]);

    const onSelect = (cate) => {
        if(cate === "전체"){
            //전체보기면 원래 데이터를 담고 있는 상태값으로 다시 초기화
            setCateState(state);

        }else{
            setCateState(state.filter((d)=>{
                return d.category === cate
            }))
        }
    }
    console.log(cateState);
    
    console.log(cateState.length)


    return (
        <>
        <div>
        <Tab onClick={()=> { onSelect("전체") }}>전체</Tab>
        <Tab onClick={()=> { onSelect("사료")}}>사료</Tab>
        <Tab onClick={()=> { onSelect("모래") }}>모래</Tab>
        <Tab onClick={()=> { onSelect("장난감")}}>장난감</Tab>
        <Tab onClick={()=> { onSelect("캣타워")}}>캣타워</Tab>
        </div>
        <ListBar SortObj={ProdObj}/>
        <CardListContainer>
            {/* 하나의 카드 영역을 나타내는 View */}
            {
            cateState.map((content,i)=>{
                return (
                <ProdCard key={i} content={content} />)
            })
            }   
        </CardListContainer>

        <Pagination total={cateState.length} page={1} limit={15} setPage={1}/>
        </>
    )
}

export default Tabs;
import {useEffect, useState} from "react";
import ProdCardList from "components/users/ProdCardList";
import Container from "components/common/Container";
import Header from "components/users/Header";
import Footer from 'components/users/Footer';
import {getMainProdList} from "slices/users/MainProductSlice";
import { useSelector, useDispatch} from "react-redux";
import Tabs from "components/users/Tabs";
import Pagination from 'components/common/Pagination';

const Main = () => {

    useEffect(() => console.clear(), []);
    const {rt, rtmsg, item, loading} = useSelector((state) => state.mainprod);
    const dispatch = useDispatch();
    if(loading) {
        return (<div>Loading ...</div>)
    }

    if(rt !== 200){
        return dispatch(getMainProdList());
    }
    console.log(item);

    return (
        <>
        <Header></Header>
        <Container>
        <Tabs ProdObj={item}/>
        </Container>
        <Footer></Footer>
        </>
    )
};

export default Main;
import { useEffect, useState } from 'react';
import Container from 'components/common/Container';
import Header from 'components/users/Header';
import Footer from 'components/users/Footer';
import { getMainProdList } from 'slices/users/MainProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from 'components/users/Tabs';

const Main = () => {
    useEffect(() => console.clear(), []);
    const [prod, setProd] = useState();
    const { rt, rtmsg, item, loading, prods } = useSelector(state => state.mainprod);
    const dispatch = useDispatch();
    console.log(item);
    useEffect(() => {
        if (rt === 200) {
            setProd(prods);
        }
    }, [rt]);

    if (loading) {
        return <div>Loading ...</div>;
    }

    if (rt !== 200) {
        return dispatch(getMainProdList());
    }

    return (
        <>
            <Header></Header>
            <Container>{prod ? <Tabs Prod={prod} /> : <div>환영합니다.</div>}</Container>
            <Footer></Footer>
        </>
    );
};

export default Main;

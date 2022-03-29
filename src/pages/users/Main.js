import { useEffect, useState } from 'react';
import { getMainProdList } from 'slices/users/MainProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'components/common/Container';
import Loading from 'components/common/Loading';
import Header from 'components/users/Header';
import Footer from 'components/users/Footer';
import Tabs from 'components/users/Tabs';

const Main = () => {
    useEffect(() => console.clear(), []);
    const [prod, setProd] = useState();
    const { rt, rtmsg, loading, prods } = useSelector(state => state.mainprod);
    const dispatch = useDispatch();

    //rt가 200이라면 prod 상태변수의 값을 서버에서 연동받은 값으로 변경한다.
    useEffect(() => {
        if (rt === 200) {
            setProd(prods);
        }
    }, [rt]);

    //아직 pending 상태라면 Loding 컴포넌트를 출력한다.
    if (loading) {
        return <Loading />;
    }

    //rt가 200이 아니라면 getMainProdList를 dispatch
    if (rt !== 200) {
        return dispatch(getMainProdList());
    }

    return (
        <>
            <Header></Header>
            <Container>{prod ? <Tabs Prod={prod} /> : <Loading />}</Container>
            <Footer></Footer>
        </>
    );
};

export default Main;

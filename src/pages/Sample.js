import Stars from '../components/common/Stars';
import Title from '../components/common/Title';
import Search from '../components/common/Search';

function Sample() {
    return (
        <>
            <Title content={'리뷰관리'} />
            <Stars starCount={3} />
            <Search />
        </>
    );
}

export default Sample;

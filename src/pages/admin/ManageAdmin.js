import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminUserList } from 'slices/admin/AdminUserSlice';
import AdminHeader from 'components/admin/AdminHeader';
import AdminUserFilter from 'components/admin/AdminUserFilter';
import Container from 'components/common/Container';
import Title from 'components/common/Title';

const ManageAdmin = () => {
    useEffect(() => console.clear(), []);

    const [adminUser, setadminUser] = useState(null);
    const { rt, rtmsg, item, loading } = useSelector(state => state.adminuser);
    const dispatch = useDispatch();
    console.log(item);

    useEffect(() => {
        if (rt === 200) {
            setadminUser(item);
        }
    }, [rt]);

    if (loading) {
        return <div>Loading ...</div>;
    }

    if (rt !== 200) {
        return dispatch(getAdminUserList());
    }

    console.log(adminUser);

    return (
        <>
            <AdminHeader />
            <Container>
                <Title content={'관리자 회원관리'}></Title>
                {item && (
                    <>
                        <AdminUserFilter AdminUser={item.item} />
                    </>
                )}
            </Container>
        </>
    );
};

export default ManageAdmin;

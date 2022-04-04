import GlobalStyles from 'GlobalStyles';
import Meta from 'components/common/Meta';
import Main from 'pages/users/Main';
import ProdList from 'pages/users/ProdList';
import Review from 'pages/users/Review';
import ThankYou from 'pages/users/Thankyou.js';
import Showmethemoney from 'pages/users/Showmethemoney.js';
import Login from 'pages/users/Login';
import Register from 'pages/users/Register';
import RegSuccess from 'pages/users/RegSuccess';
import ManageAdmin from 'pages/admin/ManageAdmin';
import ManageMember from 'pages/admin/ManageMember';
import ManageReview from 'pages/admin/ManageReview';
import ManageOrder from 'pages/admin/ManageOrder';
import ManageProd from 'pages/admin/ManageProd';
import AdminLogin from 'pages/admin/AdminLogin';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/common/NotFound';

function App() {
    /* Login 관련 */
    const { loginSuccess, email, name, tel, user_id } = useSelector(state => state.appLogin);

    /** Admin 로그인 */
    const [isAdminLogin, setIsAdminLogin] = useState(false);

    return (
        <>
            <GlobalStyles />
            <Meta />
            <Routes>
                {/* 사용자 페이지 */}
                <Route path="/" element={<Main />} />
                <Route path="/members/login" element={<Login />} />
                <Route path="/product/:prod_id" element={<ProdList />} />
                <Route path="/review/:prodId" element={<Review user_id={user_id} />} />
                <Route path="/thankyou/:prodId" element={<ThankYou user_id={user_id} />} />
                <Route path="/Showmethemoney/:prodId" element={<Showmethemoney user_id={user_id} name={name} email={email} />} tel={tel} />
                <Route path="/members/join" element={<Register />} />
                <Route path="/regsuccess" element={<RegSuccess />} />

                {/* 관리자 페이지 */}
                <Route path="/admin/login" element={<AdminLogin isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin} />} />
                {isAdminLogin ? (
                    <>
                        <Route
                            path="/admin/manageadmin"
                            element={<ManageAdmin isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin} />}
                        />
                        <Route
                            path="/admin/managemember"
                            element={<ManageMember isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin} />}
                        />
                        <Route
                            path="/admin/manageprod"
                            element={<ManageProd isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin} />}
                        />
                        <Route
                            path="/admin/manageorder"
                            element={<ManageOrder isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin} />}
                        />
                        <Route
                            path="/admin/ManageReview"
                            element={<ManageReview isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin} />}
                        />
                    </>
                ) : (
                    <Route path="/admin/*" element={<AdminLogin isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin} />} />
                )}

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

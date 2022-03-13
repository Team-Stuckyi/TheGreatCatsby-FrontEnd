import GlobalStyles from 'GlobalStyles';
import Main from "pages/users/Main";
import Login from "pages/users/Login";

import { useSelector } from "react-redux";

function App() {

    /* Login 관련 */
    const {loginSuccess, email, name, tel, user_id} = useSelector(state => state.appLogin);

    return (
        <>
            <GlobalStyles />
            <Main />
            <Login />
        </>
    );
}

export default App;

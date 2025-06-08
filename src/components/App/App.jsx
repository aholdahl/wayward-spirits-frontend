import { useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Alert from '../Alert/Alert';

import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function App () {
    const [jwtToken, setJwtToken] = useState("test");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertClassName, setAlertClassName] = useState("d-none");

    const logOut = () => {
        setJwtToken("");
    }

    return (
        <>
            <Header />
            <div className="login">
                {jwtToken ? <Link to="/login">Login</Link> : <a href="#!" onClick={logOut}>Log out</a>}
            </div>
            <Nav />
            <Alert message={alertMessage} className={alertClassName}/>
            <Outlet context={{jwtToken, setJwtToken, setAlertClassName, setAlertMessage}}/>
            <Footer />
        </>
    )
}
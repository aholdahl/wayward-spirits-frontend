import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function App () {
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
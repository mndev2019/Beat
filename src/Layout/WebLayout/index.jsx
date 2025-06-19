import React, { useEffect } from 'react'
import Header from '../Header'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../Footer'

const WebLayout = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search);
    const app = queryParams.get('app');
    console.log("Layout app param:", app);

    const isMobileApp = app == 'mobileapp';

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);


    return (
        <>
            {/* <Header />
            <main>
                {<Outlet />}
            </main>
            <Footer /> */}
            {!isMobileApp && <Header />}
            <main>
                <Outlet />
            </main>
            {!isMobileApp && <Footer />}

        </>
    )
}

export default WebLayout

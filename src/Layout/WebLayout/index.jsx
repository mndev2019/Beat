import React from 'react'
import Header from '../Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer'

const WebLayout = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const app = queryParams.get('app');
    console.log("Layout app param:", app);

    const isMobileApp = app == 'mobileapp';




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

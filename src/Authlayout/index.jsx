import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'

const Authlayout = () => {
    return (
        <>
         <Header/>
          <main>
            {<Outlet/>}
          </main>
        </>
    )
}

export default Authlayout


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import WebLayout from './Layout/WebLayout'
import Addbeat from './Pages/Addbeat'
import Authlayout from './Authlayout'
import Login from './Authlayout/Login'
import Otp from './Authlayout/Otp'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout />}>
          <Route index element={<Home />} />
          <Route path='/addbeat' element={<Addbeat />} />
        </Route>
        <Route element={<Authlayout />}>
         
          <Route path='/login' element={<Login />} />
          <Route path='/otp' element={<Otp/>}/>

        </Route>


      </>


    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App

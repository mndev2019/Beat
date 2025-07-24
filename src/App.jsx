
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import WebLayout from './Layout/WebLayout'
import Addbeat from './Pages/Addbeat'
import Authlayout from './Authlayout'
import Login from './Authlayout/Login'
import Otp from './Authlayout/Otp'
import { ToastContainer } from 'react-toastify'
import Contactpage from './Pages/Contactpage'
import TermsCondition from './Pages/TermsCondition'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import Music from './Pages/Music'
import Cart from './Pages/Cart/Index'
import MembershipHiostry from './Pages/Cart/MembershipHiostry'
import Purchasemembership from './Pages/Cart/Purchasemembership'
import About from './Pages/About'
import Register from './Authlayout/Register'
import Battlezone from './Pages/Battlezone'
import Battleregister from './Pages/Battlezone/Battleregister'




function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout />}>
          <Route index element={<Home />} />
          <Route path='/addbeat' element={<Addbeat />} />
          <Route path='/contact' element={<Contactpage />} />
          {/* <Route path='/battle-zone' element={<Battlezone />} /> */}
          {/* <Route path='/battleregister' element={<Battleregister />} /> */}

          <Route path='/about' element={<About />} />
          <Route path='/terms-condition' element={<TermsCondition />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/music' element={<Music />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/profile" element={<Cart isProfileView={true} />} />
          <Route path='/membership-hiostry' element={<MembershipHiostry />} />
          <Route path='/purchase-membership' element={<Purchasemembership />} />
        </Route>
        <Route element={<Authlayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/register' element={<Register />} />

        </Route>


      </>


    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
      <ToastContainer />
    </>
  )
}

export default App

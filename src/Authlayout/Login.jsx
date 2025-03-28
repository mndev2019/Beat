import React from 'react'
import login from '../assets/Image/Group.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate("");
    return (
        <>
            <section className='loginbg min-h-screen'>
                <img src={login} alt='image' className='mx-auto lg:h-[400px] md:h-[300px] object-cover' />

                <div className="flex items-center justify-center   login pt-10 md:px-0 px-5">
                    <div className="w-full max-w-md text-center">
                        <h2 className="text-white font-[400] md:text-[30px] text-[20px] mb-6">Mobile Verification</h2>

                        <div className="text-left">
                            <label className="text-white font-[500] md:text-[18px] text-[15px] mb-2 block">Mobile Number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="+91"
                                    className="w-full px-4 py-3 bg-[#2D1A38] text-white rounded-full focus:outline-none"
                                />
                            </div>
                        </div>

                        <button className="w-full mt-6 py-3 text-white font-medium rounded-full submit" onClick={()=> navigate('/otp')}>
                            Get OTP
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login

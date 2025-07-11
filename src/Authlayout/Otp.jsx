import React, { useState } from 'react'
import login from '../assets/Image/Group.png'
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate("")
    return (
        <>
            <section className='loginbg min-h-screen'>
                <img src={login} alt='image' className='mx-auto lg:h-[400px] md:h-[300px] object-cover' />

                <div className="flex items-center justify-center   login pt-10 md:px-0 px-5">
                    <div className="w-full max-w-md text-center">
                        <h2 className="text-white font-[400] md:text-[30px] text-[20px] mb-6">Verify OTP</h2>
                        <p className='md:text-[15px] text-[12px] font-[500] text-white'>
                            An OTP has been send to +91-7349387923, the<span className='block'> Code will expire in <span className='text-[#DF0BC3]'> 00:21</span> seconds.</span>
                        </p>

                        <div className="OtpBox mt-3 justify-items-center">
                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}

                                renderInput={(props) => (
                                    <input
                                        {...props}
                                        className="w-[30px] h-12 bg-[#2D1A38] shadow-md rounded-lg text-center text-white text-lg outline-none"
                                    />
                                )}
                            />
                        </div>

                        <div className='flex gap-3 mt-3'>
                            <button className="w-full mt-6 py-2 text-white font-medium rounded-full submit">
                                Resend OTP
                            </button>
                            <button className="w-full mt-6 py-2 text-white font-medium rounded-full submit" onClick={() => navigate('/')}>
                                Confirm
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Otp

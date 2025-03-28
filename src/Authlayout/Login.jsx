import React, { useState } from 'react';
import login from '../assets/Image/Group.png';
import { BASE_URL } from '../Api/Baseurl';
import axios from 'axios';
import OTPInput from 'react-otp-input';
import { toast } from 'react-toastify';

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        let requestData = {
            phone: phone,
        };

        try {
            const response = await axios.post(`${BASE_URL}login`, requestData);
            if (response.data.error === 0) {
                toast.success(response.data.otp)
                setIsLogin(false);
            }
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className='loginbg min-h-screen'>
            <img src={login} alt='Login Illustration' className='mx-auto lg:h-[400px] md:h-[300px] object-cover' />

            {isLogin ? (
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center login pt-10 md:px-0 px-5">
                        <div className="w-full max-w-md text-center">
                            <h2 className="text-white font-[400] md:text-[30px] text-[20px] mb-6">Mobile Verification</h2>
                            <div className="text-left">
                                <label className="text-white font-[500] md:text-[18px] text-[15px] mb-2 block">Mobile Number</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+91"
                                        className="w-full px-4 py-3 bg-[#2D1A38] text-white rounded-full focus:outline-none"
                                    />
                                </div>
                            </div>
                            <button type='submit' className="w-full mt-6 py-3 text-white font-medium rounded-full submit">
                                Get OTP
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <form>
                    <div className="flex items-center justify-center login pt-10 md:px-0 px-5">
                        <div className="w-full max-w-md text-center">
                            <h2 className="text-white font-[400] md:text-[30px] text-[20px] mb-6">Verify OTP</h2>
                            <p className='md:text-[15px] text-[12px] font-[500] text-white'>
                                An OTP has been sent to +91-{phone}, the
                                <span className='block'>Code will expire in <span className='text-[#DF0BC3]'> 00:21</span> seconds.</span>
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
                                <button className="w-full mt-6 py-2 text-white font-medium rounded-full submit" >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </section>
    );
};

export default Login;

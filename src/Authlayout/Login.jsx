import React, { useEffect, useState } from 'react';
// import login from '../assets/Image/Group.png';
import { BASE_URL } from '../Api/Baseurl';
import axios from 'axios';
import OTPInput from 'react-otp-input';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [userStatus, setUserStatus] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(30);
    const [otpExpired, setOtpExpired] = useState(false);
    useEffect(() => {
        let interval;
        if (!isLogin && timer > 0) {
            interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
        }

        if (timer === 0) {
            setOtpExpired(true);
            toast.error("OTP has expired. Please request a new one.");
        }
        return () => clearInterval(interval);
    }, [isLogin, timer]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let requestData = {
            phone: phone,

        };

        try {
            const response = await axios.post(`${BASE_URL}login`, requestData);
            if (response.data.error === 0) {

                setUserStatus(response.data.status);
                toast.success(response.message)
                setIsLogin(false);
            }
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleotp = async (e) => {
        e.preventDefault();

        if (!otp || otp.trim() === "") {
            toast.error("Please enter the OTP.");
            return;
        }

        const requestData = {
            otp: otp,
            phone: phone,
        };

        try {
            const response = await axios.post(`${BASE_URL}verify_otp`, requestData);

            const data = response.data;

            if (data.error === 0 && data.message !== "Otp Mismatch") {
                toast.success(data.message);
                localStorage.setItem("token", data.token);
                localStorage.setItem("type", data.type);
                localStorage.setItem("phone", phone)

                if (userStatus == "New") {
                    navigate("/register");

                } else if (userStatus == "Old") {
                    if (data.type == "Buyer") {
                        navigate("/cart");
                    } else {
                        navigate("/profile", { state: { isProfileView: true } })
                    }
                } else {
                    toast.error("Unknown user status.");
                }
            } else {
                toast.error(data?.message || "Invalid OTP");
            }
        } catch (error) {
            console.error("OTP verification failed:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };


    const handleResendOtp = async (e) => {
        e.preventDefault();

        if (!phone || phone.trim() === "") {
            toast.error("Phone number is missing.");
            return;
        }

        const requestData = { phone };

        try {
            const response = await axios.post(`${BASE_URL}login`, requestData);
            if (response.data.error === 0) {
                toast.success("OTP resent successfully!");
                setTimer(30);
                setOtp("");
                setOtpExpired(false);
            } else {
                toast.error(response.data.message || "Failed to resend OTP");
            }
        } catch (error) {
            console.error("Resend OTP error:", error);
            toast.error("Something went wrong while resending OTP.");
        }
    };



    return (
        //  <section className='loginbg '>
        <section className=' '>
            {/* <img src={login} alt='Login Illustration' className='mx-auto lg:h-[300px] md:h-[300px] object-cover' /> */}

            {isLogin ? (
                <form onSubmit={handleSubmit} className=''>
                    <div className="flex items-center justify-center login pt-30 md:px-0 px-5 ">
                        <div className="w-full max-w-md text-center bg-[#ffffff14] rounded-[20px] sm:p-8 p-4" style={{ boxShadow: '0 0 22px rgba(219, 40, 169, 0.35)' }}>
                            <h2 className="text-white font-[400] md:text-[30px] text-[20px] mb-6">Mobile Verification</h2>

                            <div className="text-left">
                                <label className="text-white font-[500] md:text-[18px] text-[15px] mb-2 block">
                                    Mobile Number
                                </label>
                                <div className="relative flex items-center gap-2">
                                    <div className="bg-[#382042] text-white px-4 py-3 rounded-full">
                                        +91
                                    </div>
                                    <input
                                        type="text"
                                        value={phone}
                                        min={10}
                                        max={10}
                                        minLength={10}
                                        maxLength={10}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Enter mobile number"
                                        required
                                        className="w-full px-4 py-3 bg-[#382042] text-white rounded-full focus:outline-none"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="cursor-pointer w-full mt-6 py-3 text-white font-medium rounded-full btn transition-all duration-300 ease-in-out transform hover:scale-100"
                            >
                                Get OTP
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <form onSubmit={handleotp}>
                    <div className="flex items-center justify-center login pt-30 md:px-0 px-5">
                        <div className="w-full max-w-md text-center bg-[#ffffff14] rounded-[20px] sm:p-8 p-4" style={{ boxShadow: '0 0 22px rgba(219, 40, 169, 0.35)' }}>
                            <h2 className="text-white font-[400] md:text-[30px] text-[20px] mb-6">Verify OTP</h2>
                            <p className='md:text-[15px] text-[12px] font-[500] text-white'>
                                An OTP has been sent to +91-{phone}, the Code will expire in

                                <span className='text-[#DF0BC3]'> 00:{timer.toString().padStart(2, '0')} <span className='text-white'>Seconds</span></span>
                            </p>

                            <div className="OtpBox mt-3 justify-items-center">
                                <OTPInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderInput={(props) => (
                                        <input
                                            {...props}
                                            className="w-[30px] h-12 bg-[#382042] shadow-md rounded-lg text-center text-white text-lg outline-none"
                                        />
                                    )}
                                />
                            </div>

                            <div className='flex gap-5 mt-3'>
                                <button
                                    onClick={handleResendOtp}
                                    disabled={!otpExpired}
                                    className={`w-full mt-6 py-2 text-white font-medium rounded-full btn ${!otpExpired ? "opacity-50 cursor-not-allowed" : "transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"}`}
                                >
                                    Resend OTP
                                </button>
                                <button className="w-full mt-6 py-2 text-white font-medium rounded-full btn transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer" disabled={otpExpired}>
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


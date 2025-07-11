import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

const Battlemobileverification = ({ onClose }) => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("")
    const [showOtpScreen, setShowOtpScreen] = useState(false);
    return (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-[#2D1A38] text-white rounded-2xl md:p-8 p-5 w-[90%] max-w-md shadow-xl relative">
                {!showOtpScreen ?
                    (
                        <>
                            <h2 className="text-white font-[400] md:text-[24px] text-[20px] mb-6 text-center">Mobile Verification</h2>
                            <div className="text-left">
                                <label className="text-white font-[500] md:text-[18px] text-[15px] mb-2 block">
                                    Mobile Number
                                </label>
                                <div className="relative flex items-center gap-2">
                                    <div className="bg-[#382042] text-white px-4  py-3 rounded-full">+91</div>
                                    <input
                                        type="tel"
                                        maxLength={10}
                                        pattern="[0-9]{10}"
                                        placeholder="Enter mobile number"
                                        required
                                        className="w-full px-4  py-3 bg-[#382042] text-white rounded-full focus:outline-none"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="cursor-pointer btn w-full mt-6 py-3 text-white font-medium rounded-full "
                                onClick={() => setShowOtpScreen(true)}
                            >
                                Get OTP
                            </button>
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 text-white text-lg"
                            >
                                ✕
                            </button>
                        </>
                    ) : (
                        <>
                            <h2 className="text-white font-[400] md:text-[24px] text-[20px] mb-6 text-center">Verify OTP</h2>
                            <p className='md:text-[15px] text-[12px] font-[500] text-white text-center'>
                                An OTP has been sent to +91-0000000000
                            </p>
                            <div className="OtpBox mt-4 justify-items-center flex justify-center">
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
                                    // onClick={handleResendOtp}
                                    // disabled={!otpExpired}
                                    className="w-full mt-6 py-2 text-white font-medium rounded-full btn transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                                >
                                    Resend OTP
                                </button>
                                <button className="w-full mt-6 py-2 text-white font-medium rounded-full btn transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => navigate('/battleregister')}>
                                    Confirm
                                </button>
                            </div>
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 text-white text-lg"
                            >
                                ✕
                            </button>
                        </>
                    )
                }

            </div>
        </div>
    );
};

export default Battlemobileverification;


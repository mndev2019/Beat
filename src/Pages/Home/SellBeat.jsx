import React from 'react'
import phone from '../../assets/Image/phone.png'
import { GoCheckCircleFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const SellBeat = () => {

    return (
        <>
            <section
                className="sellingbeat bg-[#1e032a] lg:h-[650px] h-auto flex items-center justify-center px-8 md:px-16 lg:py-0 py-10"

            >
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center innersellingbox md:p-10 p-5 rounded-tl-[50px] rounded-br-[50px]">
                    {/* Left Content */}
                    <div className="text-white">
                        <h2 className="lg:text-3xl md:text-[25px] font-[700]">Start Selling your Beats Today </h2>
                        <p className="text-[#B8B8B8] lg:text-[18px] sm:text-[15px] text-[13px] font-[400] mt-3">
                            Upload your best beats and monetize your talent with Project Beat
                        </p>
                        <ul className="mt-5 space-y-3">
                            {["Get Subscription", "Fill Necessary Information", "Provide DAW File link", "Do Pricing", "Upload your Beat for Approval"].map(
                                (item, index) => (
                                    <li key={index} className="flex items-center gap-3 lg:text-[17px] sm:text-[15px] text-[11px] font-[400]">
                                        <GoCheckCircleFill className="text-[white] text-xl" /> {item}
                                    </li>
                                )
                            )}
                        </ul>
                        <div className='sm:pt-8 pt-4'>
                            <Link to="https://play.google.com/store/apps/details?id=com.projectbeat.app">
                                <button className="md:text-[19px] sm:text-[15px] text-[12px] font-[600] bg-white md:rounded-[12px] sm:rounded-[10px] rounded-[8px]  sm:px-3 px-2  py-2 text-black cursor-pointer transition-all duration-300 hover:bg-gray-300">
                                    Sell Your Beats
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Content (Mockups) */}
                    <div className="flex justify-center md:justify-end gap-5 md:block hidden" >
                        <img src={phone} alt="App UI" className="h-[500px]" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SellBeat

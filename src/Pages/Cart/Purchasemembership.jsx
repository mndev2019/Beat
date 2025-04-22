import React from 'react'
import { LuCircleCheckBig } from 'react-icons/lu'

const Purchasemembership = () => {
    return (
        <>
            <section className='lg:px-20 px-10 md:py-10 py-5 terms'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:pb-4 pb-0">
                        <div className="col-span-1 text-center">
                            <h2 className='poppins font-[700] md:text-[30px] text-[20px] text-[#DB28A9]'>
                                <span className='text-white'>Purchase </span>   Membership
                            </h2>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-4 my-5">
                        <div className="col-span-1 xl:block hidden"></div>
                        <div className="col-span-1 mx-auto">
                            <div className="bg-white rounded-[10px] p-6 shadow-xl lg:w-80 w-full text-center relative overflow-hidden border-3 border-b-[#7D3FFF] border-r-[#7D3FFF]">
                                <div className="text-left flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2 text-3xl font-bold text-[#271563] poppins">
                                        <span className="sm:text-xl text-lg font-semibold">₹</span>129
                                        <span className="font-xs text-[#271563] text-sm">/MONTH</span>
                                    </div>
                                    <div className="absolute right-0 bg-[linear-gradient(270deg,_#4600D9_0%,_#7D3FFF_100%)] text-white px-6 py-2 rounded-bl-3xl rounded-tl-3xl font-semibold">
                                        BUYER
                                    </div>
                                </div>

                                <p className="text-sm text-[#271563] poppins text-left mt-4 mb-6">
                                    Enjoy limitless use with interactive export options
                                </p>

                                <ul className="text-left text-sm text-[#271563] space-y-3">
                                    <li className="flex items-center gap-2">
                                        <LuCircleCheckBig className="text-[#4600D9]" /> For Buyer
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <LuCircleCheckBig className="text-[#4600D9]" /> 5 beats limit
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <LuCircleCheckBig className="text-[#4600D9]" /> Upload 5 beats
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <LuCircleCheckBig className="text-[#4600D9]" /> Period: 3 Months
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <LuCircleCheckBig className="text-[#4600D9]" /> Basic Plan - 5 Beats
                                    </li>
                                </ul>

                                <button className="mt-6 bg-[linear-gradient(270deg,_#4600D9_0%,_#7D3FFF_100%)] hover:opacity-90 text-white py-2 rounded-full w-full font-semibold">
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-white rounded-[10px] p-6 shadow-xl lg:w-80 w-full  text-center relative overflow-hidden border-3 border-b-[#FE396A] border-r-[#FE396A]">
                                <div className="text-left flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2 text-3xl font-bold text-[#271563] poppins">
                                        <span className="text-xl font-semibold">₹</span>129
                                        <span className="font-xs text-[#271563] text-sm">/MONTH</span>
                                    </div>
                                    <div className="absolute right-0 bg-[linear-gradient(91.08deg,_#FE396A_4.27%,_#FF003F_96.41%,_#FF003F_96.41%)] text-white px-6 py-2 rounded-bl-3xl rounded-tl-3xl font-semibold">
                                        SELLER
                                    </div>
                                </div>

                                <p className="text-sm text-[#271563] poppins text-left mt-4 mb-6">
                                    Enjoy limitless use with interactive export options
                                </p>

                                <ul className="text-left text-sm text-[#271563] space-y-3">
                                    <li className="flex items-center gap-2">
                                        <LuCircleCheckBig className="text-[#FE396A]" /> For Buyer
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <LuCircleCheckBig className="text-[#FE396A]" /> 5 beats limit
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <LuCircleCheckBig className="text-[#FE396A]" /> Upload 5 beats
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <LuCircleCheckBig className="text-[#FE396A]" /> Period: 3 Months
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <LuCircleCheckBig className="text-[#FE396A]" /> Basic Plan - 5 Beats
                                    </li>
                                </ul>

                                <button className="mt-6 bg-[linear-gradient(91.08deg,_#FE396A_4.27%,_#FF003F_96.41%,_#FF003F_96.41%)] hover:opacity-90 text-white py-2 rounded-full w-full font-semibold">
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                        <div className="col-span-1 xl:block hidden"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Purchasemembership


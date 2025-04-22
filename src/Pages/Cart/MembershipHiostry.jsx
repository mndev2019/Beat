import React from 'react'
import { FaCrown } from 'react-icons/fa'
import { LuCircleCheckBig } from 'react-icons/lu'

const MembershipHiostry = () => {
    return (
        <>
            <section className='lg:px-20 px-10 md:py-10 py-5 terms'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:pb-4 pb-0">
                        <div className="col-span-1 text-center">
                            <h2 className='poppins font-[700] md:text-[30px] text-[20px] text-[#DB28A9]'>
                                <span className='text-white'>Membership </span>  History
                            </h2>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                        {
                            [1, 2, 3, 4].map(() => (
                                <>
                                    <div className="col-span-1 mt-5">
                                        <div className=" md:p-6 p-5 rounded-2xl border border-[#AF96BC]  text-white" style={{
                                            background: 'linear-gradient(254.74deg, #0F1421 0%, #302339 59.55%, #4B2F4D 97.28%)',
                                        }}>
                                            {/* Header */}
                                            <div className="text-center mb-4">
                                                <div className="border border-[#F38BDC] rounded-full sm:px-6 px-4 py-2 inline-block sm:text-sm text-xs font-[500] bg-[#FFFFFF17]">
                                                    BUYER THREE MONTH
                                                </div>
                                            </div>

                                            {/* Main Info */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-[linear-gradient(180deg,_#FD5900_-54.73%,_#D38C28_236.27%)] p-2 rounded-full text-white text-lg"><FaCrown className="text-white" /></div>
                                                    <div>
                                                        <p className="font-semibold md:text-[16px] text-[14px] poppins">5 Beat</p>
                                                        <p className="sm:text-sm text-xs text-[#B8B8B8] poppins">Validity One Month</p>
                                                    </div>
                                                </div>
                                                <div className="sm:text-xl text-lg font-semibold">₹ 129</div>
                                            </div>

                                            {/* Details */}
                                            <ul className="sm:text-sm text-xs space-y-3">
                                                <li className="flex items-center gap-2">
                                                    <LuCircleCheckBig className="" /> Purchase On - 01 Aug 2024
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <LuCircleCheckBig className="" /> Seller - INR 129/month
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <LuCircleCheckBig className="" /> Duration - 1 Months
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <LuCircleCheckBig className="" /> No. of Beat Can Upload - 5
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <LuCircleCheckBig className="" /> No. of Beat Remaining for Upload - 9
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <LuCircleCheckBig className="" /> No. of Beat Uploaded - 4
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default MembershipHiostry

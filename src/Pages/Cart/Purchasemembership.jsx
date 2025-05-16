import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LuCircleCheckBig } from 'react-icons/lu'
import { BASE_URL } from '../../Api/Baseurl';

const Purchasemembership = () => {
    const token = localStorage.getItem("token")
    const type = localStorage.getItem("type")
    const [data, setdata] = useState([]);
    const handleget = async () => {
        try {
            const token = localStorage.getItem("token");

            const resp = await axios.get(`${BASE_URL}membership?type=${type}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setdata(resp.data.data);
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };
    useEffect(() => {
        handleget();
    }, [])
    const handle_putchase_membership = async (e, item) => {
        e.preventDefault();

        const requestData = {
            amount: item?.price,
            type: "membership",
            productinfo: item._id
        };

        try {
            const resp = await axios.post(
                `${BASE_URL}initiate_payment`,
                requestData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(resp);
              if (resp.data.url) {
                    // Success case - redirect to payment gateway or show success message

                    // if there is a URL to navigate to
                    window.open(resp.data.url, '_blank');
                } else {
                    // Failure case - show error message
                    console.log('Payment initiation failed: ' + resp.message);
                }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

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
                        {
                            data?.map((itm) => (
                                <>
                                    <div className="col-span-1 md:mx-auto">
                                        <div className="bg-white rounded-[10px] p-6 shadow-xl lg:w-80 w-full text-center relative overflow-hidden border-3 border-b-[#7D3FFF] border-r-[#7D3FFF]">
                                            <div className="text-left flex items-center justify-between gap-3">
                                                <div className="flex items-center gap-2 text-3xl font-bold text-[#271563] poppins">
                                                    <span className="sm:text-xl text-lg font-semibold">₹</span>{itm?.price}
                                                    <span className="font-xs text-[#271563] text-sm">/{itm?.membership_period}</span>
                                                </div>
                                                <div className="absolute right-0 bg-[linear-gradient(270deg,_#4600D9_0%,_#7D3FFF_100%)] text-white px-6 py-2 rounded-bl-3xl rounded-tl-3xl font-semibold">
                                                    {type}
                                                </div>
                                            </div>

                                            {/* <p className="text-sm text-[#271563] poppins text-left mt-4 mb-6">
                                    Enjoy limitless use with interactive export options
                                </p> */}

                                            <ul className="text-left text-sm text-[#271563] space-y-3 mt-6">
                                                <li className="flex items-center gap-2">
                                                    <LuCircleCheckBig className="text-[#4600D9]" /> For {itm?.membership_for}
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <LuCircleCheckBig className="text-[#4600D9]" /> {itm?.no_of_beat_limit} beats limit
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <LuCircleCheckBig className="text-[#4600D9]" /> Upload {itm?.upload_beat_limit} beats
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <LuCircleCheckBig className="text-[#4600D9]" /> Period: {itm?.membership_period_count} {itm?.membership_period}
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <LuCircleCheckBig className="text-[#4600D9]" /> {itm?.description}
                                                </li>
                                            </ul>

                                            <button className="mt-6 bg-[linear-gradient(270deg,_#4600D9_0%,_#7D3FFF_100%)] hover:opacity-90 text-white py-2 rounded-full w-full font-semibold" onClick={(e) => (handle_putchase_membership(e, itm))}>

                                                BUY NOW
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                        {/* <div className="col-span-1">
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
                        </div> */}
                        <div className="col-span-1 xl:block hidden"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Purchasemembership


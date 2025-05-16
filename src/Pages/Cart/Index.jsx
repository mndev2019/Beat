import React, { useEffect, useState } from 'react';
import profile from '../../assets/Image/profile.png';
import cart from '../../assets/Image/cart.svg';
import Beatcard from './Beatcard';
import Ordersummary from './Ordersummary';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../Api/Baseurl';
import moment from 'moment';

const Cart = () => {
    const type = localStorage.getItem("type")
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    const handleget = async () => {
        try {
            const token = localStorage.getItem("token");

            const resp = await axios.get(`${BASE_URL}user`, {
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

    return (
        <>
            <section className="lg:px-20 px-5 md:py-10 py-5 terms">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <h2 className="poppins font-[700] text-[30px]  text-[#DB28A9]">Cart</h2>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-6 mt-6">

                        {/* Left: Profile Info */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex justify-center sm:justify-start">
                                <img
                                    src={`${BASE_URL}${data?.image}`}
                                    alt="profile"
                                    className="h-[100px] w-[100px] object-cover rounded-full"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = profile;
                                    }}
                                />
                            </div>
                            <div>
                                <p className="text-[#DB28A9] poppins font-[500] text-[15px]">
                                    User Name: <span className="text-white">{data?.name}</span>
                                </p>
                                <p className="text-[#DB28A9] poppins font-[500] text-[15px]">
                                    Phone Number: <span className="text-white">{data?.phone}</span>
                                </p>
                                <p className="text-[#DB28A9] poppins font-[500] text-[15px]">
                                    Membership Expired At:{" "}
                                    <span className="text-white">
                                        {data?.membership_expired_at
                                            ? moment(data?.membership_expired_at).format("DD/MM/YYYY")
                                            : "N/A"}
                                    </span>
                                </p>
                                <div className="flex flex-wrap items-center gap-4 mt-3">
                                    <button
                                        className={`text-white poppins text-[12px] font-[400] px-5 py-1 rounded-[8px] ${data?.is_active === true ? "bg-[#009D5E]" : "bg-red-600"
                                            }`}
                                    >
                                        {data?.is_active === true ? "Active" : "Inactive"}
                                    </button>
                                    <button className="border border-[#861577] rounded-full px-3 py-1">
                                        <img src={cart} alt="cart" className="h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Right: Membership Buttons */}
                        <div className="flex flex-col gap-4 w-full lg:w-auto">
                            <button
                                className="text-white poppins text-[15px] font-[500] border border-[#861577] py-2 px-5 rounded-full"
                                onClick={() => navigate('/membership-hiostry')}
                            >
                                Membership History
                            </button>
                            <button
                                className="text-white poppins text-[15px] font-[500] py-2 px-5 rounded-full"
                                onClick={() => navigate('/purchase-membership')}
                                style={{
                                    background:
                                        'linear-gradient(274.15deg, #861577 37.11%, #36024C 111.1%, #34014A 121.44%)',
                                }}
                            >
                                Purchase Membership
                            </button>
                        </div>
                    </div>
                    {
                        type === "Seller" &&
                        <>
                            {/* Cards */}
                            <div className="mt-10">
                                <Beatcard />
                            </div>

                            <div className="mt-6">
                                <Ordersummary />
                            </div>
                        </>
                    }



                   
                </div>
            </section>
        </>
    );
};

export default Cart;

import React, { useEffect, useState } from 'react';
import profile from '../../assets/Image/newprofile.jpg';
// import cart from '../../assets/Image/cart.svg';
import Beatcard from './Beatcard';
import Ordersummary from './Ordersummary';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../Api/Baseurl';
import moment from 'moment';

const Cart = ({ isProfileView = false }) => {
    const type = localStorage.getItem("type")


    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    const [beatdata, setbeatdata] = useState([]);

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
    const handlegetbeat = async () => {
        try {
            const token = localStorage.getItem("token");

            const resp = await axios.get(`${BASE_URL}beat?seller=${data?._id}&page=1&rows=1000`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setbeatdata(resp.data.data);
        } catch (error) {
            console.error("Error fetching cart data:", error);
          
        }
    };
    useEffect(() => {
        handleget();

    }, [])

    useEffect(() => {
        if (data?._id) {
            handlegetbeat();
        }
    }, [data]);

    const totalSold = beatdata.filter(beat => beat.is_sold === true).length;
    const availablesold = beatdata.filter(beat => beat.is_sold === false && beat.is_verified != "Rejected").length;
    const Rejectedbeat = beatdata.filter(beat => beat.is_verified == "Rejected").length;




    return (
        <>
            <section className="lg:px-20 px-5 md:py-10 py-5 terms">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <h2 className="poppins font-[700] text-[30px]  text-[#DB28A9]"> {isProfileView ? "Profile" : "Cart"}</h2>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-6 mt-6 items-center">

                        {/* Left: Profile Info */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
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
                                    Membership Expired On:{" "}
                                    <span className="text-white">
                                        {data?.membership_expired_at
                                            ? moment(data?.membership_expired_at).format("DD/MM/YYYY")
                                            : "N/A"}
                                    </span>
                                </p>
                                {/* <div className="flex flex-wrap items-center gap-4 mt-3">
                                    <button
                                        className={`text-white poppins text-[12px] font-[400] px-5 py-1 rounded-[8px] ${data?.is_active === true ? "bg-[#009D5E]" : "bg-red-600"
                                            }`}
                                    >
                                        {data?.is_active === true ? "Active" : "Inactive"}
                                    </button>
                                    <button className="border border-[#861577] rounded-full px-3 py-1">
                                        <img src={cart} alt="cart" className="h-5" />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                        {/* Right: Membership Buttons */}
                        <div className="flex flex-col gap-4 w-full lg:w-auto">
                            {isProfileView ? (


                                type === "Seller" && (
                                    <>
                                        <button
                                            className="text-white poppins text-[15px] font-[500] py-2 px-8 rounded-full btn cursor-pointer"
                                            onClick={() => navigate('/addbeat')}

                                        >
                                            Add Beat
                                        </button>

                                    </>

                                )
                            ) : (
                                <>
                                    <button
                                        className="text-white poppins text-[15px] font-[500] border border-[#861577] py-2 px-5 rounded-full hover:scale-105 transition-transform duration-300 hover:shadow cursor-pointer"
                                        onClick={() => navigate('/membership-hiostry')}
                                    >
                                        Membership History
                                    </button>
                                    <button
                                        className="text-white poppins text-[15px] font-[500] py-2 px-5 rounded-full btn cursor-pointer"
                                        onClick={() => navigate('/purchase-membership')}

                                    >
                                        Purchase Membership
                                    </button>
                                </>
                            )}
                        </div>

                    </div>
                    {isProfileView && type === "Seller" && (
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:my-10 my-5">
                            <div className="col-span-1 mt-5">
                                <div
                                    className="p-5 rounded-2xl border border-[#AF96BC] shadow-lg transition-transform transform hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(254.74deg, #0F1421 0%, #302339 59.55%, #4B2F4D 97.28%)',
                                        boxShadow: '0 0 15px rgba(219, 40, 169, 0.4)',
                                    }}
                                >
                                    <h2 className="text-[#db28a9] font-semibold text-lg mb-1">Total Beats</h2>
                                    <p className="text-white text-3xl font-bold">{beatdata.length}</p>
                                </div>
                            </div>

                            <div className="col-span-1 mt-5">
                                <div
                                    className="p-5 rounded-2xl border border-[#AF96BC] shadow-lg transition-transform transform hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(254.74deg, #0F1421 0%, #302339 59.55%, #4B2F4D 97.28%)',
                                        boxShadow: '0 0 15px rgba(219, 40, 169, 0.4)',
                                    }}
                                >
                                    <h2 className="text-[#db28a9] font-semibold text-lg mb-1">Rejected Beats</h2>
                                    <p className="text-white text-3xl font-bold">{Rejectedbeat}</p>
                                </div>
                            </div>

                            <div className="col-span-1 mt-5">
                                <div
                                    className="p-5 rounded-2xl border border-[#AF96BC] shadow-lg transition-transform transform hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(254.74deg, #0F1421 0%, #302339 59.55%, #4B2F4D 97.28%)',
                                        boxShadow: '0 0 15px rgba(219, 40, 169, 0.4)',
                                    }}
                                >
                                    <h2 className="text-[#db28a9] font-semibold text-lg mb-1">Total Beats Sold</h2>
                                    <p className="text-white text-3xl font-bold">{totalSold}</p>
                                </div>
                            </div>

                            <div className="col-span-1 mt-5">
                                <div
                                    className="p-5 rounded-2xl border border-[#AF96BC] shadow-lg transition-transform transform hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(254.74deg, #0F1421 0%, #302339 59.55%, #4B2F4D 97.28%)',
                                        boxShadow: '0 0 15px rgba(219, 40, 169, 0.4)',
                                    }}
                                >
                                    <h2 className="text-[#db28a9] font-semibold text-lg mb-1">Total Available for Sale Beat</h2>
                                    <p className="text-white text-3xl font-bold">{availablesold}</p>
                                </div>
                            </div>
                        </div>

                    )}

                    {!isProfileView && type !== "Seller" && (
                        <>
                            {/* {data.cart ? (
                                <> */}
                            <div className="mt-10">
                                <Beatcard />
                            </div>
                            <div className="mt-6">
                                <Ordersummary />
                            </div>
                            {/* </>
                            ) : (
                                <p className="text-white text-sm text-center pt-4">
                                    Cart is empty
                                </p>
                            )} */}
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default Cart;

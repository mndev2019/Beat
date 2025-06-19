import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../Api/Baseurl';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [type, settype] = useState("");
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [stage_name, setstage_name] = useState("");
    const [biography, setbiography] = useState("");
    const navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();
        let requestdata = {
            type: type,
            name: name,
            phone: phone,
            email: email,
            stage_name: stage_name,
            biography: biography
        }
        const token = localStorage.getItem("token");
        try {
            const resp = await axios.post(`${BASE_URL}user`, requestdata, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(resp);
            if (resp.data.error == 0) {
                toast.success("Register Successfully!");
                setname("");
                settype("");
                setphone("");
                setemail("");
                setstage_name("");
                setbiography("");
                localStorage.setItem("token", resp.data.token);
                localStorage.setItem("type", type);
                if (type == "Buyer") {
                    navigate("/cart");
                } else if (type == "Seller") {
                    navigate("/profile", { state: { isProfileView: true } })
                }
            } else {
                toast.error("Register failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Something went wrong while submitting!");
        }
    };
    return (
        <>
            <section className='addbeat'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 pb-5">
                        <div className="col-span-1 text-center">
                            <h2 className='lg:text-[38px] text-[22px] font-[500] text-white lg:my-0 mt-4'>
                                Register
                            </h2>
                        </div>
                    </div>
                    <div className=" lg:w-[80%] w-[95%] bg-[#382042] mx-auto lg:p-10 p-5 lg:rounded-[30px] rounded-[20px] space-y-4">
                        <form onSubmit={handlesubmit}>
                            <div className="grid lg:grid-cols-4 grid-cols-1">
                                <div className="col-span-1"></div>
                                <div className="col-span-2">
                                    <div className="grid grid-cols-1 space-y-4">
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1"> Name</label>
                                                <input type="text"
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setname(e.target.value)}
                                                    placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">
                                                    Join As
                                                </label>
                                                <select
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white outline-none"
                                                    required
                                                    value={type}
                                                    onChange={(e) => settype(e.target.value)}
                                                >
                                                    <option value="" disabled>
                                                        Select Type
                                                    </option>
                                                    <option value="Buyer">Buyer</option>
                                                    <option value="Seller">Seller</option>
                                                </select>


                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Mobile Number</label>
                                                <input type="text"
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                                    required
                                                    value={phone}
                                                    onChange={(e) => setphone(e.target.value)}
                                                    placeholder="Mobile no" />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">E-Mail</label>
                                                <input type="text"
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setemail(e.target.value)}
                                                    placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Stage Name</label>
                                                <input type="text"
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                                    required
                                                    value={stage_name}
                                                    onChange={(e) => setstage_name(e.target.value)}
                                                    placeholder="Stage name" />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Biography</label>
                                                <input type="text"
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                                    required
                                                    value={biography}
                                                    onChange={(e) => setbiography(e.target.value)}
                                                    placeholder="Enter biography" />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <button className='lg:text-[18px] text-[15px] font-[500] text-white rounded-full w-full submit lg:py-3 py-2'>Register</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register



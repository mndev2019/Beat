import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../../Api/Baseurl';
import { toast } from 'react-toastify';

const Battleregister = () => {
    const [showpopup, setshowpopup] = useState(false);
    const [real_name, setreal_name] = useState("");
    const [stage_name, setstage_name] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [link, setlink] = useState("");
    const [file, setfile] = useState("");
    const token = localStorage.getItem("token");
    const handlefile = (e) => {
        const selectedfile = e.target.files[0];
        setfile(selectedfile);
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("real_name", real_name);
        formdata.append("stage_name", stage_name);
        formdata.append("email", email);
        formdata.append("phone", phone);
        formdata.append("link", link);
        formdata.append("file", file);
        try {
            const resp = await axios.post(`${BASE_URL}battleregister`, formdata, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(resp);
            if (resp.data.error === 0) {
                setreal_name("");
                setstage_name("");
                setemail("");
                setphone("");
                setlink("");
                setfile("");
                setshowpopup(true);
            } else {
                toast.error("Registration failed")
            }
        } catch {
            console.log("error");
        }

    }
    return (
        <>
            {showpopup &&
                <>
                    <div className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex justify-center items-center'>
                        <div className='bg-[#2D1A38] text-white rounded-2xl p-8 w-[90%] max-w-md shadow-xl relative text-center'>

                            <h2 className="text-white font-[400] md:text-[28px] text-[20px] mb-4">Thank You!</h2>
                            <p className="text-[#B8B8B8] text-[15px] mb-6">
                                You have successfully applied to the Battle Zone. We'll get back to you soon!
                            </p>

                            <button
                                onClick={() => setshowpopup(false)}
                                className="bg-[#DB28A9] hover:bg-[#c41f96] transition-colors duration-300 text-white font-medium px-6 py-2 rounded-full"
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </>


            }
            <section className='addbeat'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 py-5">
                        <div className="col-span-1 text-center ">
                            <h2 className='poppins font-[700] md:text-[30px] text-[20px] text-[#DB28A9]'>
                                <span className='text-white'>Register for Street </span> Rap Battle 2025
                            </h2>

                        </div>
                    </div>
                    <div className=" w-[95%] max-w-[600px]  bg-[#382042] mx-auto lg:p-10 p-5 lg:rounded-[30px] rounded-[20px] space-y-4">
                        <form onSubmit={handlesubmit} >
                            <div className="grid grid-cols-1">

                                <div className="col-span-2">
                                    <div className="grid grid-cols-1 space-y-4">
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1"> Real Name</label>
                                                <input type="text"
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                                    required
                                                    value={real_name}
                                                    onChange={(e) => setreal_name(e.target.value)}
                                                    placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1"> Stage Name</label>
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
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1"> Email</label>
                                                <input type="text"
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setemail(e.target.value)}
                                                    placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-2">
                                                Phone Number
                                            </label>

                                            <input
                                                type="text"
                                                placeholder="Phone number"
                                                required
                                                maxLength={10}
                                                onInput={(e) => {
                                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                                }}
                                                value={phone}
                                                onChange={(e) => setphone(e.target.value)}
                                                className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1"> Social Media / Performance Links</label>
                                                <input type="text"
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                                    required
                                                    value={link}
                                                    onChange={(e) => setlink(e.target.value)}
                                                    placeholder="Performance links" />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-2">
                                                Upload Sample Track <span className="text-sm text-[#B8B8B8]">(MP3 or ZIP)</span>
                                            </label>
                                            <input
                                                type="file"
                                                // accept=".mp3,.zip"
                                                required
                                                onChange={handlefile}
                                                className="w-full file:rounded-full file:border-0 file:px-5 file:py-2 file:bg-[#DB28A9] file:text-white file:text-sm file:font-medium 
                                                 text-[#cccccc] bg-[#2D1A38] rounded-full p-2 cursor-pointer outline-none"
                                            />
                                        </div>




                                        <div className="col-span-1">
                                            <button className='btn lg:text-[18px] text-[15px] font-[500] text-white rounded-full w-full  lg:py-3 py-2 transition-all duration-300 ease-in-out transform hover:scale-100 cursor-pointer' onClick={()=> setshowpopup(true)} >Submit Registration</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Battleregister

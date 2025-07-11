import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import { BASE_URL } from '../../Api/Baseurl';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const Addbeat = () => {
    const navigate = useNavigate();
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [genre, setgenre] = useState("");
    const [daw_link, setdaw_link] = useState("");
    // const [dav_file, setdav_file] = useState("");
    const [dav_file, setdav_file] = useState([{ file: null }]);
    const [image, setimage] = useState("");
    const [beat_file, setbeat_file] = useState("");

    const [data, setdata] = useState([]);
    const token = localStorage.getItem("token");
    const handleget = async () => {
        try {


            const resp = await axios.get(`${BASE_URL}genre?default=1`, {
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
    const handleAddDavFile = () => {
        setdav_file([...dav_file, { file: null }]);
    };

    const handleRemoveDavFile = (index) => {
        const updated = [...dav_file];
        updated.splice(index, 1);
        setdav_file(updated);
    };

    const handleDavFileChange = (index, file) => {
        const updated = [...dav_file];
        updated[index].file = file;
        setdav_file(updated);



        updated.forEach((item, i) => {
            console.log(`File at index ${i}:`, item.file);
        });
    };


    // const handledavfile = (e) => {
    //     const selectedFile = e.target.files?.[0];
    //     if (selectedFile) {
    //         setdav_file(selectedFile);
    //         console.log('Selected file:', selectedFile.name);
    //     }
    // };
    const handleimage = (e) => {
        const selectedfile = e.target.files[0];
        setimage(selectedfile)
    }
    const handlebeatfile = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setbeat_file(selectedFile);
            console.log('Selected file:', selectedFile.name);
        }
    };


    const handlesubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("genre", genre);
        formData.append("daw_link", daw_link);
        // formData.append("dav_file", dav_file);
        // dav_file.forEach((file) => {
        //     formData.append("dav_file", file);
        // });
        dav_file.forEach((item, i) => {
            formData.append(`dav_file_${i + 1}`, item.file);
        });

        formData.append("image", image);
        formData.append("beat_file", beat_file);
        formData.append("trending", 0);


        const token = localStorage.getItem("token");



        try {
            const resp = await axios.post(`${BASE_URL}beat`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(resp);
            if (resp.data.error === 0) {
                toast.success("Beat Add Successfully!");
                setname("");
                setprice("");
                setgenre("");
                setdaw_link("");
                // setdav_file("");
                setimage("");
                setbeat_file("");
                navigate("/profile", { state: { isProfileView: true } })
            } else {
                toast.error("Beat not Submitted");
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
                                Upload the best you've got!
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
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Name</label>
                                                <input type="text"
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setname(e.target.value)}
                                                    placeholder="Beat Name" />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">
                                                    Beat Style
                                                </label>
                                                <select
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white outline-none"
                                                    required
                                                    value={genre}
                                                    onChange={(e) => setgenre(e.target.value)}
                                                >
                                                    <option value="" disabled>
                                                        Select Beat Style
                                                    </option>
                                                    {data.map((item) => (
                                                        <option key={item._id} value={item._id}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>

                                            </div>
                                        </div>

                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Price ₹</label>
                                                <input type="text"
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                                    required
                                                    value={price}
                                                    onChange={(e) => setprice(e.target.value)}
                                                    placeholder="Beat Price ₹" />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">DAW File Link</label>
                                                <input type="text"
                                                    className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none"
                                                    required
                                                    value={daw_link}
                                                    onChange={(e) => setdaw_link(e.target.value)}
                                                    placeholder="enter file link" />
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">
                                                Beat Audio File
                                            </label>

                                            <div className="w-full rounded-lg p-4 bg-[#2D1A38] text-white border-dashed border-2 border-[#861577]">
                                                <label htmlFor='uploadbeatfile' className="flex flex-col items-center justify-center">
                                                    <FiUpload className="text-[#861577] text-2xl mb-2" />
                                                    <span className="text-[#B8B8B8] text-[15px] font-[400] mb-2">Upload Audio File (mp3)</span>

                                                    <input
                                                        type="file"
                                                        id='uploadbeatfile'
                                                        // accept=".mp3,audio/*"
                                                        onChange={handlebeatfile}
                                                        className=" block w-full text-sm text-white file:mr-4 file:py-2 file:px-4
                                                   file:rounded-full file:border-0
                                                      file:text-sm file:font-semibold
                                                    file:bg-[#861577] file:text-white
                                                    hover:file:bg-[#a42093]"
                                                        required
                                                    />
                                                </label>
                                            </div> 
                                        </div>



                                        <div className="col-span-1">
                                            <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Thumbnail</label>
                                            <label htmlFor='uploadfile' className="w-full rounded-lg p-8 bg-[#2D1A38] text-white border-dashed border-2 border-[#861577] flex flex-col items-center justify-center">
                                                <FiUpload className="text-[#861577]" />
                                                <span className="mt-2 text-[#B8B8B8] text-[15px] font-[400]">Upload Beat Thumbnail</span>

                                                <input
                                                    type="file"
                                                    id="uploadfile"
                                                    accept="image/*"
                                                    onChange={handleimage}
                                                    className="mt-4 block w-full text-sm text-white
                                                            file:mr-4 file:py-2 file:px-4
                                                            file:rounded-full file:border-0
                                                             file:text-sm file:font-semibold
                                                         file:bg-[#861577] file:text-white
                                                        hover:file:bg-[#a42093]"
                                                    required
                                                />
                                            </label>
                                        </div>
                                        {/* <div className="col-span-1">
                                            <div className='flex justify-between mb-3 items-center'>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block ">Beat Stems</label>
                                                <div className='cursor-pointer h-[40px] w-[40px] rounded-full flex text-white justify-center items-center' style={{
                                                    background:
                                                        'linear-gradient(274.15deg, #861577 37.11%, #36024C 111.1%, #34014A 121.44%)',
                                                }}>
                                                    <FaPlus className='text-[20px] ' />
                                                </div>
                                            </div>

                                            <label htmlFor='uploadsteam' className="w-full rounded-lg p-8 bg-[#2D1A38] text-white border-dashed border-2 border-[#861577] flex flex-col items-center justify-center">
                                                <FiUpload className="text-[#861577]" />
                                                <span className="mt-2 text-[#B8B8B8] text-[15px] font-[400]">Upload Beat Stems</span>

                                                <input
                                                    type="file"
                                                    id="uploadsteam"
                                                  
                                                    onChange={handledavfile}
                                                    className="mt-4 block w-full text-sm text-white
                                                       file:mr-4 file:py-2 file:px-4
                                                        file:rounded-full file:border-0
                                                          file:text-sm file:font-semibold
                                                   file:bg-[#861577] file:text-white
                                                    hover:file:bg-[#a42093]"
                                                    required
                                                />
                                            </label>
                                        </div> */}
                                        <div className="col-span-1">
                                            <div className='flex justify-between mb-3 items-center'>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block">Beat Stems</label>
                                                <div
                                                    onClick={handleAddDavFile}
                                                    className='cursor-pointer h-[40px] w-[40px] rounded-full flex text-white justify-center items-center'
                                                    style={{
                                                        background:
                                                            'linear-gradient(274.15deg, #861577 37.11%, #36024C 111.1%, #34014A 121.44%)',
                                                    }}>
                                                    <FaPlus className='text-[20px]' />
                                                </div>
                                            </div>

                                            {dav_file.map((item, index) => (
                                                <div key={index} className="relative mb-4">
                                                    <label htmlFor={`uploadstem-${index}`} className="w-full rounded-lg p-8 bg-[#2D1A38] text-white border-dashed border-2 border-[#861577] flex flex-col items-center justify-center">
                                                        <FiUpload className="text-[#861577]" />
                                                        <span className="mt-2 text-[#B8B8B8] text-[15px] font-[400]">Upload Beat Stem {index + 1}</span>
                                                        <input
                                                            type="file"
                                                            id={`uploadstem-${index}`}
                                                            onChange={(e) => handleDavFileChange(index, e.target.files?.[0])}
                                                            className="mt-4 block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#861577] file:text-white hover:file:bg-[#a42093]"
                                                            required
                                                        />
                                                    </label>

                                                    {dav_file.length > 1 && index > 0 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemoveDavFile(index)}
                                                            className="absolute top-2 right-2 text-red-500 bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                                                        >
                                                            &minus;
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>




                                        <div className="col-span-1">
                                            <button className='lg:text-[18px] text-[15px] font-[500] text-white rounded-full w-full  lg:py-3 py-2 btn cursor-pointer'>Submit for Approval</button>
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

export default Addbeat



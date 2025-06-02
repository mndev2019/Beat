import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import { BASE_URL } from '../../Api/Baseurl';
import { toast } from 'react-toastify';

const Addbeat = () => {
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [genre, setgenre] = useState("");
    const [daw_link, setdaw_link] = useState("");
    const [dav_file, setdav_file] = useState("");
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

    const handledavfile = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setdav_file(selectedFile);
            console.log('Selected file:', selectedFile.name);
        }
    };
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

    // const beatFileRef = useRef(null);
    // const imageRef = useRef(null);
    // const davFileRef = useRef(null);


    // const handleBeatFileClick = () => beatFileRef.current.click();
    // const handleImageClick = () => imageRef.current.click();
    // const handleDavFileClick = () => davFileRef.current.click();
    // const handleBeatFileClick = () => {
    //     beatFileRef.current.value = null; // allow re-selecting same file
    //     beatFileRef.current.click();
    // };

    // const handleImageClick = () => {
    //     imageRef.current.value = null;
    //     imageRef.current.click();
    // };

    // const handleDavFileClick = () => {
    //     davFileRef.current.value = null;
    //     davFileRef.current.click();
    // };

    const handlesubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("genre", genre);
        formData.append("daw_link", daw_link);
        formData.append("dav_file", dav_file);
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
                setdav_file("");
                setimage("");
                setbeat_file("");
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
                            <h2 className='lg:text-[38px] text-[24px] font-[500] text-white'>
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
                                        {/* <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">
                                                    Beat Audio File
                                                </label>

                                                <div
                                                    className="w-full rounded-lg p-8 bg-[#2D1A38] text-white outline-none border-dashed border-2 border-[#861577] flex flex-col items-center justify-center cursor-pointer"

                                                    onClick={handleBeatFileClick}

                                                >
                                                    <FiUpload className='text-[#861577]' />
                                                    <span className="mt-2 text-[#B8B8B8] text-[15px] font-[400]">Upload Audio Link</span>
                                                    <span className='mt-2 text-[#B8B8B8] text-[15px] font-[400]'>(mp3)</span>
                                                    <input
                                                        type="file"
                                                        
                                                        ref={beatFileRef}
                                                        
                                                        className="ml-[129px]"
                                                        required
                                                        onChange={handlebeatfile}
                                                    />
                                                </div>
                                            </div>
                                        </div> */}
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


                                        {/* <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Thumbnail</label>
                                                <div className="w-full rounded-lg p-8 bg-[#2D1A38] text-white outline-none border-dashed border-2 border-[#861577] flex flex-col items-center justify-center"

                                                    onClick={handleImageClick}

                                                >
                                                    <FiUpload className='text-[#861577]' />

                                                    <span className="mt-2 text-[#B8B8B8] text-[15px] font-[400]">Upload Beat Thumbnail</span>
                                                    <input
                                                        type="file"
                                                      
                                                        ref={imageRef}

                                                        className="ml-[129px]"
                                                        required
                                                        onChange={handleimage}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Steams</label>
                                                <div className="w-full rounded-lg p-8 bg-[#2D1A38] text-white outline-none border-dashed border-2 border-[#861577] flex flex-col items-center justify-center"

                                                    onClick={handleDavFileClick}

                                                >
                                                    <FiUpload className='text-[#861577]' />

                                                    <span className="mt-2 text-[#B8B8B8] text-[15px] font-[400]">Upload Beat Steams</span>
                                                    <input
                                                        type="file"
                                                       
                                                        ref={davFileRef}
                                                        style={{ display: "none" }}
                                                        className="ml-[129px]"
                                                        required
                                                        onChange={handledavfile}
                                                    />
                                                </div>
                                            </div>
                                        </div> */}
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
                                        <div className="col-span-1">
                                            <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Steams</label>
                                            <label htmlFor='uploadsteam' className="w-full rounded-lg p-8 bg-[#2D1A38] text-white border-dashed border-2 border-[#861577] flex flex-col items-center justify-center">
                                                <FiUpload className="text-[#861577]" />
                                                <span className="mt-2 text-[#B8B8B8] text-[15px] font-[400]">Upload Beat Steams</span>

                                                <input
                                                    type="file"
                                                      id="uploadsteam"
                                                    // accept="audio/*"
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
                                        </div>


                                        <div className="col-span-1">
                                            <button className='lg:text-[18px] text-[15px] font-[500] text-white rounded-full w-full submit lg:py-3 py-2'>Submit for Approval</button>
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


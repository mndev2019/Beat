import React from 'react'
import { FiUpload } from 'react-icons/fi'

const Addbeat = () => {

    return (
        <>
            <section className='addbeat'>
                <div className="container">
                    <div className="grid grid-cols-1 pb-5">
                        <div className="col-span-1 text-center">
                            <h2 className='lg:text-[38px] text-[24px] font-[500] text-white'>
                                Add Beat
                            </h2>
                        </div>
                    </div>
                    <div className=" lg:w-[80%] w-[95%] bg-[#382042] mx-auto lg:p-10 p-5 lg:rounded-[30px] rounded-[20px] space-y-4">
                        <div className="grid lg:grid-cols-4 grid-cols-1">
                            <div className="col-span-1"></div>
                            <div className="col-span-2">
                                <div className="grid grid-cols-1 space-y-4">
                                    <div className="col-span-1">
                                        <div>
                                            <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Name</label>
                                            <input type="text" className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none" placeholder="Beat Name" />
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div>
                                            <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Style</label>
                                            <input type="text" className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none" placeholder="Beat Style" />
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                <div>
                                    <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Price ₹</label>
                                    <input type="text" className="w-full rounded-full p-3 bg-[#2D1A38] text-white  outline-none" placeholder="Beat Price ₹" />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div>
                                    <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">DAW File Link</label>
                                    <div className="w-full rounded-lg p-8 bg-[#2D1A38] text-white outline-none border-dashed border-2 border-[#861577] flex flex-col items-center justify-center">
                                        <FiUpload className='text-[#861577]' />

                                        <span className="mt-2 text-[#B8B8B8] text-[15px] font-[400]">Upload File Link</span>
                                        <span className='mt-2 text-[#B8B8B8] text-[15px] font-[400]'>(mp3)</span>
                                        <input type="file" className="hidden" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div>
                                    <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Audio File</label>
                                    <div className="w-full rounded-lg p-8 bg-[#2D1A38] text-white outline-none border-dashed border-2 border-[#861577] flex flex-col items-center justify-center">
                                        <FiUpload className='text-[#861577]' />

                                        <span className="mt-2 text-[#B8B8B8] text-[15px] font-[400]">Upload Audio Link</span>
                                        <span className='mt-2 text-[#B8B8B8] text-[15px] font-[400]'>(mp3)</span>
                                        <input type="file" className="hidden" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div>
                                    <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Thumbnail</label>
                                    <div className="w-full rounded-lg p-8 bg-[#2D1A38] text-white outline-none border-dashed border-2 border-[#861577] flex flex-col items-center justify-center">
                                        <FiUpload className='text-[#861577]' />

                                        <span className="mt-2 text-[#B8B8B8] text-[15px] font-[400]">Upload Beat Steams</span>
                                        <input type="file" className="hidden" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div>
                                    <label className="text-white lg:text-[18px] text-[15px] font-[500] block mb-1">Beat Steams</label>
                                    <div className="w-full rounded-lg p-8 bg-[#2D1A38] text-white outline-none border-dashed border-2 border-[#861577] flex flex-col items-center justify-center">
                                        <FiUpload className='text-[#861577]' />

                                        <span className="mt-2 text-[#B8B8B8] text-[15px] font-[400]">Upload Beat Steams</span>
                                        <input type="file" className="hidden" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <button className='lg:text-[18px] text-[15px] font-[500] text-white rounded-full w-full submit lg:py-3 py-2'>Submit for Approval</button>
                            </div>
                                </div>
                            </div>
                            <div className="col-span-1">

                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>

        </>
    )
}

export default Addbeat


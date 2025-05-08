import React from 'react'
import headphone from '../../assets/Image/headphone.png'

const Browsebeats = () => {
    return (
        <>
            <section className="beat flex items-center lg:h-[692px] md:h-[400px] h-[300px]">
                <div className="beats w-full lg:px-20 px-10 lg:h-[400px] ">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                        {/* Left Content */}
                        <div className="col-span-1 lg:py-0 py-5">
                            <div className="text-white">
                                <h2 className="md:text-[38px] text-[25px] md:font-bold font-semibold leading-tight">
                                    Browse Beats
                                </h2>
                                <p className="text-[#B8B8B8] md:text-[17px] text-[13px] font-normal md:pt-3 pt-1 leading-relaxed text-justify">
                                    Quickly discover the perfect beats with our
                                    <span className="md:block">easy-to-use Mobile Application.</span>
                                    Click and start your creative journey!
                                </p>
                                {/* <div className="lg:pt-5 pt-2">
                                    <button className="md:text-[19px] sm:text-[15px] text-[12px] font-[600] bg-white md:rounded-[12px] sm:rounded-[10px] rounded-[8px]  sm:px-3 px-2  py-2 text-black cursor-pointer transition-all duration-300 hover:bg-gray-300">
                                        Browse Beats
                                    </button>
                                </div> */}
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="col-span-1 lg:block hidden">
                            <div className="flex justify-end">
                                <img src={headphone} alt="Headphone" className=" h-auto mt-[-112px] mb-[-101px] mr-[38px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Browsebeats

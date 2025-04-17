import React from 'react'
import about from '../../assets/Image/about.svg'
import success from '../../assets/Image/success.png'

const Success = () => {
    return (
        <div>
            <section className='about  lg:px-20 px-10  py-10'>
                <div className="container mx-auto ">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5">
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={success} alt='image' className='xl:h-[500px] md:h-[400px] h-auto justify-items-center mx-auto' />
                            </div>
                        </div>
                        <div className="col-span-1 md:pt-0 pt-5">
                            <div className="w-full">
                                <h2 className='lg:text-[34px] md:text-[34px] text-[25px] font-bold leading-tight text-white'>
                                    Building the Beatverse: A Roadmap to Success
                                </h2>
                                <p className='text-[#B8B8B8] md:text-[17px] text-[13px] font-normal pt-3 leading-relaxed text-justify'>
                                    Project Beat's initial mission is to attract a diverse range of music creators to upload their  beats onto the platform. This will create a rich library for artists to explore and find the  perfect fit for their projects. Project Beat even prioritizes exclusive licenses, ensuring fair  compensation for producers while guaranteeing artists ownership of their final creations.
                                </p>
                                <div className='pt-5'>
                                    <button className=' md:text-[19px] sm:text-[15px] text-[12px] font-[600] bg-white md:rounded-[12px] sm:rounded-[10px] rounded-[8px]  sm:px-3 px-2  py-2 text-black cursor-pointer transition-all duration-300 hover:bg-gray-300'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Success

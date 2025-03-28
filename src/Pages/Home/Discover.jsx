import React from 'react'

const Discover = () => {
    return (
        <>
            <section className='discover lg:h-screen sm:h-[500px] h-[400px] flex items-center lg:px-20 px-10'>
                <div className="container mx-auto ">
                    <div className="grid lg:grid-cols-3 grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full">
                                <h2 className='font-[800] xl:text-[50px] sm:text-[45px] text-[25px] text-white'>
                                    All <span className='text-[#DB28A9]'>Best Beats</span>
                                    <span className='block'>
                                        at One Place
                                    </span>
                                </h2>
                                <p className='text-[#B8B8B8] xl:text-[20px] sm:text-[18px] text-[13px] font-[500] text-justify py-3'>
                                    On our Mobile Application, you can access an amazing collection of popular and new beats. Stream your favorite beats in high quality and enjoy without interruptions. Whatever your taste in beats, we have it all for you!
                                </p>
                                <div className='lg:pt-5 pt-2'>
                                    <button className='md:text-[19px] sm:text-[15px] text-[12px] font-[600] bg-white md:rounded-[12px] sm:rounded-[10px] rounded-[8px]  sm:px-3 px-2  py-2 text-black cursor-pointer transition-all duration-300 hover:bg-gray-300'>
                                    Discover Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    )
}

export default Discover

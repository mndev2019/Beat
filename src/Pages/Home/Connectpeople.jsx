import React from 'react'
// import connect3 from '../../assets/Image/connect3.png'
// import connect2 from '../../assets/Image/connect2.png'
// import connect1 from '../../assets/Image/connect1.png'

const Connectpeople = () => {
    return (
        <>
            {/* <section className='lg:px-20 px-10 pb-10 lg:pt-10'>
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-12 grid-cols-1 bg-[#303456]  sm:rounded-[40px] rounded-[30px] xl:px-20 sm:px-10 px-5 lg:py-5 sm:py-10 py-5 items-center">
                        <div className="lg:col-span-7 col-span-1">
                            <h2 className='text-white poppins font-[500] xl:text-[35px] md:text-[26px] sm:text-[25px] text-[15px]'>
                                Connect with like-minded people <span className='xl:block'>instantly!</span>
                            </h2>
                            <p className='text-[#FAFAFAE5] poppins font-[400] md:text-[12px] text-[11px] mt-3'>
                                Join our community for updates, discussions, & support! ✌️
                            </p>
                            <div className='md:mt-10 mt-5'>
                                <a
                                    href="https://wa.me/919315809997"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="md:text-[19px] sm:text-[15px] text-[12px] font-[600] bg-white md:rounded-[12px] sm:rounded-[10px] rounded-[8px] sm:px-3 px-2 py-2 text-black cursor-pointer transition-all duration-300 hover:bg-gray-300">
                                        Join Whatsapp Community
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-5 relative lg:block hidden">
                            <div className='absolute xl:bottom-[15px] bottom-[1px] xl:left-[-40px] left-[-138px]'>
                                <img src={connect1} alt='image' className='' />
                                <img src={connect2} alt='image' className='' />
                            </div>
                            <div className='justify-items-end'>
                                <img src={connect3} alt='image' className='justify-items-end' />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className='lg:px-20 px-10 pb-10 pt-5 lg:pt-10 connect'>
                <div className="container mx-auto">
                    <div className="bg-[#1a0033] shadow-[0_0_30px_rgba(219,40,169,0.35)]  rounded-[24px] xl:px-20 sm:px-10 px-5 lg:py-10 sm:py-10 py-8 text-center max-w-[860px] mx-auto">
                        <h2 className="text-white text-2xl sm:text-[28px] text-[22px] font-bold mb-2">Join the Beat Bulletin</h2>
                        <p className="text-white text-opacity-80 text-sm sm:text-base mb-6">
                            Stay in sync with exclusive drops, beat packs, and community battles.
                        </p>

                        <div className=' mt-5'>
                            <a
                                href="https://wa.me/919315809997"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="md:text-[16px] sm:text-[15px] text-[12px] font-[600] bg-white md:rounded-[12px] sm:rounded-[10px] rounded-[8px] sm:px-3 px-2 py-2 text-black cursor-pointer transition-all duration-300 hover:bg-gray-300">
                                    Join Whatsapp Community
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Connectpeople

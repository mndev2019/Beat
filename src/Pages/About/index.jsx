import React from 'react'
import about1 from '../../assets/Image/about1.png'
import about2 from '../../assets/Image/about2.png'
import about3 from '../../assets/Image/about3.png'

const About = () => {

    return (
        <>
            <section className='lg:px-20 px-10 md:py-10 py-5 terms about'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 pb-4">
                        <div className="col-span-1 text-center">
                            <h2 className='poppins font-[700] md:text-[30px] text-[20px] text-[#DB28A9]'>
                                <span className='text-white'>Welcome to </span>  Our Project Beat Music
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="flex flex-wrap justify-center gap-4 md:pt-5 pt-0 pb-8">

                                <button

                                    className="text-white px-6 py-2 rounded-full border border-[#F38BDC] poppins bg-[#FFFFFF17] text-center text-sm sm:text-base md:text-[15px] text-[12px]"
                                >
                                    Easiest , Best Possible Way To Sell and Buy Music Beats
                                </button>

                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 text-center">
                        <div className="col-span-1">
                            <p className='text-[#B8B8B8] poppins font-[400]  md:text-[15px] text-[12px] text-center'>
                                Welcome to Project Beat, the ultimate destination for music enthusiasts! Buyers, explore and license beats seamlessly—preview, choose, and download instantly. Sellers, showcase your talent by creating a profile, uploading beats, and setting prices. Connect with a global audience and monetize your creations effortlessly. Join our vibrant community, where music meets innovation. Elevate your sound, whether you're discovering beats or making your mark as a talented beat producer. Let Beat be your platform for musical inspiration and success!
                            </p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 lg:py-20 pt-5 ">
                        <div className="lg:col-span-8 col-span-1">
                            <img src={about1} alt='image' />
                        </div>
                        <div className="col-span-4 relative">
                            <img src={about2} alt='image ' className='absolute about2 lg:block hidden' />
                            <img src={about3} alt='image' className='about3 lg:block hidden' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About

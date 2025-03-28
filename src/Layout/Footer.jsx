import React from 'react'
import logo from '../assets/Image/logo.svg'
import apple from '../assets/Image/apple.png'
import playstore from '../assets/Image/playstore.png'
import { FaFacebook } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'

const Footer = () => {
    return (
        <>
            <section className='bg-[#1E032A] py-10'>
                <div className="container mx-auto px-10">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 border-b border-gray-500 pb-10">
                        <div className="col-span-1">
                            <img src={logo} alt='image' />
                        </div>
                        <div className="col-span-1">
                            <h2 className='lg:text-[22px] md:text-[20px] text-[18px] font-[500] text-white mb-3'>
                                Company
                            </h2>
                            <ul className='text-white font-[300] md:text-[16px] text-[14px] space-y-3'>
                                <li>
                                    Home
                                </li>
                                <li>
                                    About Us
                                </li>
                                <li>
                                    Music
                                </li>
                                <li>
                                    Contact Us
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1 lg:mt-0 mt-5">
                            <h2 className='lg:text-[22px] md:text-[20px] text-[18px] font-[500] text-white mb-3'>
                                Support
                            </h2>
                            <ul className='text-white font-[300] md:text-[16px] text-[14px] space-y-3'>
                                <li>
                                    Terms & Conditions
                                </li>
                                <li>
                                    Privacy Policy
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1 lg:mt-0 mt-5">
                            <h2 className='lg:text-[22px] md:text-[20px] text-[18px] font-[500] text-white mb-3'>
                                Take Beats on the Go!
                            </h2>
                            <img src={apple} alt='image' className='md:h-[60px] h-[50px]' />
                            <img src={playstore} alt='image' className='md:h-[60px] h-[50px] mt-3' />

                        </div>
                    </div>

                    <div className="flex justify-between pt-5">
                        <div className="font-[300] md:text-[14px] text-[12px] text-white">
                            Project Beat with  ©  2025. All right reserved
                        </div>
                        <div className='flex gap-1 items-center'>
                            <FaFacebook className='text-white text-lg' />
                            <PiInstagramLogoFill className='text-white text-xl' />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Footer

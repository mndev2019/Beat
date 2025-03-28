import React, { useRef } from 'react'
import plus from '../../assets/Image/plus.svg'
import hiphop from '../../assets/Image/newhiphop.png'
import soul from '../../assets/Image/SOUL.png'
import kpop from '../../assets/Image/kpop.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Explorebeats = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Below 1024px
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, // Below 768px
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480, // Below 480px
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    const data = [
        {
            image: hiphop,
        },
        {
            image: soul,
        },
        {
            image: kpop,
        },
        {
            image: hiphop,
        },
        {
            image: soul,
        },
        {
            image: kpop,
        }
    ]

    return (
        <>
            <section className='lg:px-20 px-10 pt-10'>
                <div className="container mx-auto">
                    <div className="justify-between md:flex items-center ">
                        <div className="">
                            <h2 className='md:text-[38px] text-[25px] md:font-[700] font-[400] text-white'>
                                Explore Endless Beats
                            </h2>
                            <p className='text-justify text-[#B8B8B8] md:text-[17px] text-[13px]  font-[400] md:pt-3 pt-1'>
                                Say goodbye to interruptions and enjoy uninterrupted music<span className='sm:block'> streaming. With our ad-free platform, you’ll have access to</span> millions to songs
                            </p>
                        </div>
                        <div className="md:mt-0 mt-4">
                            <button className='md:text-[20px] text-[15px] font-[600] bg-white px-4 py-2 rounded-[14px] flex gap-2 items-center'>
                                <img src={plus} alt='image' className='h-[25px]' />
                                Add Beat
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 relative">
                        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
                            {data.map((itm, index) => (
                                <div key={index} className="px-4">
                                    {/* <div className="relative ">
                                        <img
                                            src={hiphop}
                                            alt="image"
                                            className="w-full h-[350px] rounded-[50px] shadow-xl shadow-[#07224D]"
                                            // shadow-[0px_50px_100px_#07224D]
                                           
                                        />
                                        <div className='bg-[#07224D]'></div>
                                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[40px] font-[400] text-white">
                                            HIP HOP
                                        </p>
                                    </div> */}
                                    <img src={itm.image} className='' alt='image' />
                                </div>
                            ))}
                        </Slider>

                        <div className=" ">
                            <button className="cursor-pointer text-white px-2 py-2 hover:border-white  border-2 border-[#424345] rounded-full top-[29%] left-[-30px] absolute" onClick={previous}>
                                <FaArrowLeft className='text-[#B9B9B9] hover:text-white' />
                            </button>
                            <button className="text-white px-2 py-2 hover:border-white cursor-pointer   border-2 border-[#424345] rounded-full top-[29%] right-[-30px] absolute" onClick={next}>
                                <FaArrowRight className='text-[#B9B9B9] hover:text-white' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explorebeats

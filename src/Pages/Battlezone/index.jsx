import React, { useState } from 'react';
import battlezone from '../../assets/Image/battlezonebg1.png';
import Battlemobileverification from './Battlemobileverification';

const Battlezone = () => {

    const [showpopup, setshowpopup] = useState(false)
    return (
        <>
            {showpopup && <Battlemobileverification onClose={() => setshowpopup(false)} />}
            <section className="relative  text-white overflow-hidden z-0 terms ">
                <div className="max-w-screen-xl mx-auto lg:px-20 px-10 md:py-10 py-5">


                    <div className="text-center lg:mb-8 mb-5 relative z-10">
                        <h2 className="text-[20px] md:text-[32px] poppins font-bold leading-tight">
                            <span className="text-white">Rap Battle</span>{' '}

                        </h2>
                        <h2 className="text-[20px] md:text-[32px] poppins font-bold leading-tight">
                            <span className="text-white">Presented By </span>{' '}
                            <span className="text-[#DB28A9] block md:inline">Project Beat Records</span>
                        </h2>
                    </div>


                    <div className="flex justify-center lg:mb-8 mb-5">
                        <button className="bg-[#FFFFFF17] border border-[#F38BDC] text-white px-8 py-3 text-sm md:text-base rounded-full shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => setshowpopup(true)}
                        >
                            JOIN THE ARENA
                        </button>
                    </div>


                    <div className="max-w-3xl mx-auto text-center  mb-10">
                        <p className="text-[#B8B8B8] text-sm md:text-[15px] poppins font-light leading-relaxed">
                            The pulse of the new generation and a full-blown movement—fueling raw talent through electrifying freestyle rap battles, dropping heat through our cutting-edge beat-trading mobile app, cooking up next-level production, and amplifying the voices of real young talent ready to take over the industry.
                        </p>
                    </div>
                    <div className="text-center mb-8">
                        <h2 className="text-[#DB28A9] text-[22px] md:text-[28px] font-bold poppins uppercase tracking-wider">
                            Think You Got Bars?
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7 col-span-1">
                            <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-[#F38BDC] hover:scale-105 transition-transform duration-300">
                                <img src={battlezone} alt="battlezone" className="w-full md:h-[500px] h-[300px] object-cover" />
                            </div>
                        </div>


                        <div className="lg:col-span-5 col-span-1 text-left">
                            <div className="bg-[#FFFFFF10] p-6 rounded-xl border-l-4 border-[#DB28A9] shadow-md">
                                <h3
                                    className="text-white text-[18px] md:text-[22px] poppins font-bold uppercase tracking-wide"
                                    style={{ textShadow: "0 0 14px #DB28A9" }}
                                >
                                    No Guts, No Rise.<br />
                                    No Bars, No Prize.
                                </h3>


                                <p className="text-[#DB28A9] italic font-semibold text-[16px] md:text-[20px] poppins">
                                    Step Up! Or Stay Silent!
                                </p>
                            </div>
                        </div>


                    </div>

                </div>
            </section>

        </>
    )
};

export default Battlezone;


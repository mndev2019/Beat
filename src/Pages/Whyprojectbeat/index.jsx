import React from 'react'

const Whyprojectbeat = () => {
    const data = [
        {
            text: "No Cut — Keep 100% of what you earn"
        },
        {
            text: "Instant payouts or escrow protection"
        },
        {
            text: "No forced publishing deals or hidden cuts"
        },
        {
            text: "Verified buyers only"
        },
        {
            text: "Only exclusive beats"
        },
        {
            text: "Strict “No‑AI” policy"
        },

    ]
    return (
        <>
            <section className='lg:px-20 px-10 py-10 whyprojectbeat'>
                <div className="container mx-auto">
                    <div className="justify-between md:flex items-center ">
                        <div className="text-center w-full">
                            <h2 className='md:text-[38px] text-[25px] md:font-[700] font-[400] text-white '>
                                Why Project Beat?
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  md:py-10 py-5">
                        {data.map((itm, index) => {
                            let additionalClasses = "";

                            // For the last 2 items (index 4 and 5), center them on lg screens
                            if (index === 4) {
                                additionalClasses = "lg:col-start-2";
                            } else if (index === 5) {
                                additionalClasses = "lg:col-start-3";
                            }

                            return (
                                <div
                                    key={index}
                                    className={`col-span-1  ${additionalClasses}`}
                                >
                                    <div className="w-full p-[1.5rem] rounded-[18px] bg-[#ffffff14] h-full transition duration-300 transform hover:scale-105 hover:shadow-pink-glow projectbeatcard">
                                        <p className="text-white text-center">{itm.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>



                </div>
            </section>
        </>
    )
}

export default Whyprojectbeat

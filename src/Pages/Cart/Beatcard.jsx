import React from 'react'
import profile from '../../assets/Image/profile.png'
import deleteicon from '../../assets/Image/deleteicon.png'
const Beatcard = () => {
    return (
        <>
            <div className='md:p-7 p-5 border border-[#AF96BC] rounded-[24px] mt-10' style={{
                background: 'linear-gradient(254.74deg, #0F1421 0%, #302339 59.55%, #4B2F4D 97.28%)',
            }}>
                <h2 className='text-white poppins font-[600] md:text-[25px] text-[20px]'>
                    Beat in cart
                </h2>
                {
                    [1, 2].map(() => (
                        <>
                            <div className="flex justify-between items-baseline mt-4">
                                <div className="flex gap-4">
                                    <div>
                                        <img src={profile} alt="image" className="h-[100px] w-[100px] object-cover rounded-[12px]" />
                                    </div>
                                    <div className="flex flex-col justify-between py-1">
                                        <div>
                                            <p className="text-white poppins font-[600] md:text-[18px] text-[15px]">
                                                Chill Your Mind
                                            </p>
                                            <p className="text-gray-300 poppins font-[400] text-[14px]">
                                                R&B Playlist
                                            </p>
                                        </div>
                                        <p className="text-white poppins font-[600] md:text-[18px] text-[15px]">
                                            ₹ 1000
                                        </p>
                                    </div>
                                </div>

                                <div className=''>
                                    <button className='border border-[#861577] rounded-full p-2'>
                                        <img src={deleteicon} alt='cart' className='h-5' />
                                    </button>
                                </div>
                            </div>
                        </>
                    ))
                }

            </div>
        </>
    )
}

export default Beatcard

import React from 'react'
// import hiphop from '../../assets/Image/newhiphop.png'
// import soul from '../../assets/Image/SOUL.png'
// import kpop from '../../assets/Image/kpop.png'
import hiphop from '../../assets/Image/HIPHOPnew.png'
import soul from '../../assets/Image/SOULnew.png'
import kpop from '../../assets/Image/DRILLnew.png'
import crunk from '../../assets/Image/CRUNK.png'
import gangsts from '../../assets/Image/GANGSTA RAP.png'
import euphoria from '../../assets/Image/EUPHORIA.png'
import punjabi from '../../assets/Image/PUNJABI TRAP.png'
import old from '../../assets/Image/OLD SCHOOL RAP.png'

const Music = () => {
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
            image: crunk,
        },
        {
            image: gangsts,
        },
        {
            image: euphoria,
        },
        {
            image: punjabi,
        },
        {
            image: old,
        },
    ]
    return (
        <>
            <section className='lg:px-20 px-10 md:py-10 py-5 terms'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 text-center">
                        <div className="col-span-1">
                            <h2 className='poppins font-[700] md:text-[30px] text-[20px] text-[#DB28A9]'>
                                <span className='text-white'>Explore</span>  Endless Beats
                            </h2>
                            {/* <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center lg:w-[40%] mx-auto py-3'>
                                Say goodbye to interruptions and enjoy uninterrupted music streaming. With our ad-free platform, you’ll have access to vast collection of Premium Beats.
                            </p> */}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 mt-5">
                        {
                            data.map((itm) => (
                                <>
                                    <div className="col-span-1">
                                        <img src={itm.image} alt='image' />
                                    </div>
                                </>
                            ))
                        }

                    </div>


                </div>
            </section>
        </>
    )
}

export default Music

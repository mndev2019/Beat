import React from 'react'
import banner from '../../assets/videos/widescreen.mp4'

const Banner = () => {
    return (
        <>
            <section className="banner overflow-hidden">
                <div className="myVideo w-full h-[100vh]">
                    <video
                        className="w-full h-full"
                        autoPlay
                        loop
                        muted

                        playsInline
                    >
                        <source src={banner} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </>
    )
}

export default Banner

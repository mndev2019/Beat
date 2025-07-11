// import React, { useEffect, useRef, useState } from 'react';
// import banner from '../../assets/videos/Web vdo.mp4';
import { FaApple, FaGooglePlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    // const videoRef = useRef(null);
    // const [isMuted, setIsMuted] = useState(true);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (videoRef.current) {
    //             videoRef.current.muted = true;
    //             setIsMuted(true);
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const toggleMute = () => {
    //     if (videoRef.current) {
    //         const newMutedState = !isMuted;
    //         videoRef.current.muted = newMutedState;
    //         setIsMuted(newMutedState);
    //     }
    // };

    return (
        <>
            {/* <section className="banner overflow-hidden relative">
                <div className="myVideo w-full h-[100vh]">
                    <video
                        ref={videoRef}
                        className="w-full h-full"
                        autoPlay
                        loop
                        playsInline
                        muted={isMuted}
                    >
                        <source src={banner} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div
                    className='h-[30px] w-[30px] rounded-md bg-black flex justify-center items-center absolute bottom-[3px] left-[10px] cursor-pointer'
                    onClick={toggleMute}
                >
                    {isMuted ? (
                        <FaVolumeMute className='text-white' />
                    ) : (
                        <FaVolumeUp className='text-white' />
                    )}
                </div>
            </section> */}
            <section className='bannerbg relative flex items-center justify-center flex-col text-center min-h-screen'>
                <div className='z-10 px-4'>
                    <h2 className='text-white sm:text-[3.5rem] text-[1.5rem] font-bold'>
                        Built for producers, by producers
                    </h2>
                    <p className='text-[#cfcfe2] sm:text-[1.25rem] text-[16px] max-w-[600px] mx-auto mt-3'>
                        The next‑gen mobile platform for exclusive beats, fair deals, and full creative control.
                    </p>
                    <div className='flex gap-5 justify-center mt-4'>
                        <Link to="https://apps.apple.com/in/app/project-beat/id6535684400">
                            <button className='cursor-pointer btn flex items-center gap-2 sm:px-8 px-3 py-3 text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105'>
                                <div className="text-xl">
                                    <FaApple />
                                </div>
                                <div className="font-medium">
                                    App Store
                                </div>
                            </button>
                        </Link>

                        <Link to="https://play.google.com/store/apps/details?id=com.projectbeat.app">
                            <button className='cursor-pointer btn flex items-center gap-2 sm:px-8 px-3 py-3 text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105'>
                                <div className="text-xl">
                                    <FaGooglePlay />
                                </div>
                                <div className="font-medium">
                                    Google Play
                                </div>
                            </button>
                        </Link>


                    </div>
                </div>
            </section>

        </>
    );
};

export default Banner;

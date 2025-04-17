import React, { useEffect, useRef, useState } from 'react';
import banner from '../../assets/videos/Web vdo.mp4';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const Banner = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true); // Initial state: muted

    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
                videoRef.current.muted = true;
                setIsMuted(true); // Update state as well
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            const newMutedState = !isMuted;
            videoRef.current.muted = newMutedState;
            setIsMuted(newMutedState);
        }
    };

    return (
        <>
            <section className="banner overflow-hidden relative">
                <div className="myVideo w-full h-[100vh]">
                    <video
                        ref={videoRef}
                        className="w-full h-full"
                        autoPlay
                        loop
                        playsInline
                        // muted={isMuted} // Keep this in sync with state
                    >
                        <source src={banner} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div
                    className='h-[30px] w-[30px] rounded-md bg-black flex justify-center items-center absolute bottom-[3px] left-[10px] cursor-pointer z-10'
                    onClick={toggleMute}
                >
                    {isMuted ? (
                        <FaVolumeMute className='text-white' />
                    ) : (
                        <FaVolumeUp className='text-white' />
                    )}
                </div>
            </section>
        </>
    );
};

export default Banner;

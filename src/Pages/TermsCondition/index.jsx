import React from 'react'
import { useParams } from 'react-router-dom'

const TermsCondition = () => {
    const { app } = useParams()
    console.log(app)
    return (
        <>
            <section className='lg:px-20 px-10 md:py-10 py-5 terms'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <h2 className='poppins font-[700] md:text-[30px] text-[20px] text-white'>
                                <span className='text-[#DB28A9]'>Project Beat :</span>  Terms & Conditions
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 py-4">
                        <div className="col-span-1 space-y-5">
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                By using our application or services you are deemed to agree to these terms. If you do not agree to any part of these terms, you must not use our application or services.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                Access to our application is granted free of charge and on a temporary basis.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                You are responsible for arranging your own access to the app and any service provider charges that may be incurred.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                You must not misuse our app or services by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                You must not attempt to gain unauthorised access to our website or services, the server on which our website is stored, or any server, computer or database connected to our website. You must not attack our data via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities, and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our website will cease immediately.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                We will update our application from time to time but please note that any of the content may be out of date and you should not rely on it. We do not guarantee that our site, or any content on it, will be free from errors or omissions.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                You may link to our app but only in a way that is fair and legal and does not damage our reputation or take advantage of it.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                You may link to our app but only in a way that is fair and legal and does not damage our reputation or take advantage of it.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                It is important that you protect your device from viruses and malware. We will not accept responsibility for any loss or damage caused by a virus, distributed denial-of-service attack, or other technologically harmful material on or downloaded from our website, or on any website linked to it.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 py-4">
                        <div className="col-span-1 text-center">
                            <h2 className='poppins font-[700] md:text-[30px] text-[20px] text-[#DB28A9]'>
                                <span className='text-white'>User Specific</span> Terms & conditions:
                            </h2>
                            <h3 className='text-[#DB28A9] poppins font-[700] md:text-[25px] text-[18px] py-3'>
                                Seller (Music Creator)
                            </h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 ">
                        <div className="col-span-1  space-y-5">
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                Beats available on our platform are made by third parties (Beat Makers / Music Producers). It is mandatory for all Producers to confirm that the Producer’s Beats do not infringe any third-party rights and that they have the necessary permissions/copyrights to make the Beats available and grant ongoing rights to purchasers.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                The music creator must upload the music beat stems and its DAW file link as proof of the originality of the beat. If the music creator does not have all these files, Project Beat will not allow the application access to that beat.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                By using the Project Beat Application platform, Music creators are deemed to agree to pay the membership charges & the commission charges to the Project Beat.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                Beat Basic Price shall be decided by the Music creator only. Project Beat has no interfacing with the pricing of Beat.Beat Basic Price means - Excluding of Service Tax i.e. 18% & Platform Commissioning charges i.e. 10%
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                Project Beat provides only a platform for the Producers to sell their Beats. As a purchaser, your contractual relationship relating to Beats is with the licensor or seller of Beats and not with the Project Beat Platform.
                            </p>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                We may change/update these terms so please check from time to time to take note of any changes.
                            </p>
                            <h3 className='text-[#DB28A9] poppins font-[700] md:text-[25px] text-[18px] pt-3 text-center'>
                                Buyer (Singer/Rapper/Artist)
                            </h3>
                            <p className='text-[#B8B8B8] poppins font-[400] md:text-[15px] text-[12px] text-center'>
                                By using Project Beat Application platform, Beat Buyers are deemed to agree to pay the membership charges & the beat price as mentioned in the Mobile application.
                            </p>
                        </div>
                    </div>
                    <div className='border border-[#F38BDC] md:py-5 py-3 md:px-10 px-5 rounded-[20px] bg-[#FFFFFF17] md:flex gap-5 items-center mt-8'>
                        <div>
                            <p className='poppins font-[700] md:text-[17px] text-[15px] text-white'>
                                Complaints :
                            </p>
                        </div>
                        <div>
                            <p className='poppins font-[400] md:text-[14px] text-[12px] text-white'>
                                Should you have any issues with our website or service please
                            </p>
                            <p className='poppins font-[400] md:text-[14px] text-[12px] text-white'>
                                contact <span className='text-[#DB28A9]'>Contact@projectbeatrecords.in</span>
                            </p>
                        </div>

                    </div>
                    <div className='border border-[#F38BDC] md:py-5 py-3 md:px-10 px-5 rounded-[20px] bg-[#FFFFFF17] md:flex gap-5 items-center mt-8'>
                        <div>
                            <p className='poppins font-[700] md:text-[17px] text-[15px] text-white'>
                                settlements:
                            </p>
                        </div>
                        <div>
                            <p className='poppins font-[400] md:text-[14px] text-[12px] text-white'>
                                Amount received through our platform for sale of Beat is disbursed to the user after deducting the commission and other taxes if applicable with in T+5 Days
                            </p>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsCondition


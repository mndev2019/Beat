// import React, { useState } from 'react'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import facebook from '../../assets/Image/facebook.svg';
import insta from '../../assets/Image/insta.svg';
import circleone from '../../assets/Image/firstcircle.png';
import circletwo from '../../assets/Image/secondcircle.png';
import circlethree from '../../assets/Image/thirdcircle.png';
import plane from '../../assets/Image/plane.png'
import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../../Api/Baseurl';
import { toast } from 'react-toastify';

const Contactpage = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [query, setquery] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      query: query
    };

    try {
      const resp = await axios.post(`${BASE_URL}contact`, requestData);
      console.log(resp);
      if(resp.data.error === 0){
        toast.success("Data Submit Successfully!");
        setname("");
        setemail("");
        setphone("");
        setaddress("");
        setquery("");

      }else{
        toast.error("Data not Submitted");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <section className='lg:px-20 md:px-10 px-5 md:py-10 py-5 terms'>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 ">
            <div className="col-span-1 text-center pb-5 ">
              <h2 className='md:text-[38px] text-[20px] font-[500]  poppins text-white'>
                Contact
              </h2>
            </div>
            <div className='relative'>
              <img src={circleone} alt='circleone' className='absolute h-[100px] top-[-41px] left-[96px] lg:block hidden z-[-1]' />
              <img src={circletwo} alt='circletwo' className='absolute h-[130px] top-[-35px] right-[25px] z-[-1] lg:block hidden' />
              <img src={circlethree} alt='circlethree' className='absolute h-[80px] bottom-[-24px] left-[94px] lg:block hidden z-[-1]' />
              <div className="lg:w-[90%] w-[95%] bg-white/20  shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] mx-auto pt-5 px-5  lg:rounded-[24px] rounded-[20px] space-y-6  z-[1]  border border-[#AF96BC]" >
                <h2 className="text-white text-center md:text-[24px] text-[18px] lg:text-[27px] font-[600] poppins">Get In Touch</h2>
                <form onSubmit={handlesubmit}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6 gap-4">
                    <div className='col-span-1'>
                      <label className="text-white md:text-[15px] text-[12px] font-medium block mb-1 poppins">First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"

                        className="w-full rounded-full md:p-3 p-2 bg-[#2D1A38] text-white outline-none md:text-[15px] text-[12px]"
                        required
                        value={name}
                        onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div className='col-span-1'>
                      <label className="text-white md:text-[15px] text-[12px] font-medium block mb-1 poppins">Your Email</label>
                      <input type="email" placeholder="Your Email" className="w-full rounded-full  bg-[#2D1A38] text-white outline-none md:p-3 p-2 md:text-[15px] text-[12px]"
                      required
                        value={email}
                        onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className='col-span-1'>
                      <label className="text-white md:text-[15px] text-[12px] font-medium block mb-1 poppins">Your Phone Number</label>
                      <input type="text" placeholder="Your Phone Number" className="w-full rounded-full  bg-[#2D1A38] text-white outline-none md:p-3 p-2 md:text-[15px] text-[12px]"
                      required
                        value={phone}
                        onChange={(e) => setphone(e.target.value)} />
                    </div>
                    <div className='col-span-1'>
                      <label className="text-white md:text-[15px] text-[12px] font-medium block mb-1 poppins">Your Address</label>
                      <input type="text" placeholder="Your Address" className="w-full rounded-full  bg-[#2D1A38] text-white outline-none md:p-3 p-2 md:text-[15px] text-[12px]"
                      required
                        value={address}
                        onChange={(e) => setaddress(e.target.value)} />
                    </div>
                    <div className='lg:col-span-2 col-span-1'>
                      <label className="text-white md:text-[15px] text-[12px] font-medium block mb-1 poppins">Your Message</label>
                      <textarea rows={5} placeholder="Your Message" className="w-full rounded-xl  bg-[#2D1A38] text-white outline-none resize-none md:p-3 p-2 md:text-[15px] text-[12px]"
                      required
                        value={query}
                        onChange={(e) => setquery(e.target.value)} />
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center mb-5 mt-3">
                    <div className="space-y-1">
                      <div className="text-white flex items-center gap-2 md:text-[15px] text-[12px] font-[600] poppins">
                        <MdEmail className="text-white text-lg" />
                        <a href="mailto:contact@projectbeatrecords.in" className="text-white">Contact@projectbeatrecords.in</a>
                      </div>
                      {/* <div className="text-white flex items-center gap-2 inter font-[600] md:text-[14px] text-[11px]">
                        <MdLocationOn className="text-white text-lg" />
                        <p>Sector 62, Block B, Noida, 201301</p>
                      </div> */}
                    </div>
                    <div className='flex gap-4 items-center md:mt-0 mt-4'>
                      <a href="https://www.facebook.com/people/Project-Beat-Records/61556641920870/?mibextid=WC7FNe" target='_blank'>
                       <img src={facebook} alt='facebookimg' className='md:h-[30px] h-[25px] md:w-[30px] w-[25px] object-contain' />
                      </a>
                     <a href="https://www.instagram.com/accounts/login/?next=%2Fprojectbeatrecords%2F&source=omni_redirect" target='_blank'>
                      <img src={insta} alt='instaimg' className='md:h-[30px] h-[25px] md:w-[30px] w-[25px] object-contain' />
                     </a>
                     
                    </div>
                  </div>
                  <button type='submit'
                   
                    className="text-white rounded-full md:text-[16px] text-[14px] font-medium md:py-3 py-2 px-8 poppins btn cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
                <img src={plane} alt='plane' className='mx-auto' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contactpage

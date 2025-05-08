import React from 'react'

const Ordersummary = () => {
  return (
    <>
      <div className="md:p-7 p-5 border border-[#F38BDC] rounded-[24px] mt-10 bg-[#FFFFFF17]">
        <h2 className="text-white poppins font-[600] md:text-[25px] text-[20px] mb-5">
          Order Summary
        </h2>
        <div className="space-y-4">
          {/* Subtotal */}
          <div className="flex justify-between items-center">
            <p className="text-[#DB28A9] poppins font-[500] text-[15px]">Subtotal :</p>
            <p className="text-white poppins font-[500] text-[15px]">₹ 1000</p>
          </div>

          {/* GST */}
          <div className="flex justify-between items-center">
            <p className="text-[#DB28A9] poppins font-[500] text-[15px]">GST (18%) :</p>
            <p className="text-white poppins font-[500] text-[15px]">₹ 1000</p>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-[#A5A5A526]" />

          {/* Total */}
          <div className="flex justify-between items-center">
            <p className="text-[#DB28A9] poppins font-[600] text-[15px]">Total :</p>
            <p className="text-white poppins font-[600] text-[15px]">₹ 1000</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ordersummary

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Api/Baseurl';

const Ordersummary = () => {
  const token = localStorage.getItem("token");
  const [data, setdata] = useState([]);
  const [summary, setSummary] = useState({
    subtotal: 0,
    gst: 0,
    gstAmount: 0,
    total: 0
  });
  const handleget = async () => {
    try {
      const resp = await axios.get(`${BASE_URL}cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const cartData = resp.data;

      let subtotal = 0;
      if (cartData && cartData.data && Array.isArray(cartData.data)) {
        cartData.data.forEach(item => {
          if (item.beat && !isNaN(item.beat.price)) {
            subtotal += parseFloat(item.beat.price);
          }
        });
      }

      const gstRate = cartData.gst / 100;
      const gstAmount = subtotal * gstRate;
      const total = subtotal + gstAmount;

      setSummary({
        subtotal: subtotal.toFixed(2),
        gst: cartData.gst,
        gstAmount: gstAmount.toFixed(2),
        total: total.toFixed(2),
      });

      setdata(cartData.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    handleget();
  }, [])
  const handleProceedToPayment = async (cartorder) => {
    try {
      const subtotal = Number(cartorder.subtotal);
      const total = Number(cartorder.total);
      const gst = Number(cartorder.gst);
      const gstAmount = Number(cartorder.gstAmount);

      if (isNaN(subtotal) || isNaN(total) || isNaN(gst)) {
        console.error('Invalid numeric values:', { subtotal, total, gst });
        alert('Invalid cart data. Please try again.');
        return;
      }

      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please log in to proceed with payment.');
        return;
      }

      // Create Order (POST /order)
      const orderResponse = await axios.post(
        `${BASE_URL}order`,
        {
          price: subtotal,
          tax: gstAmount,
          promo: "",
          discount: 0,
          net_amount: total
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const orderData = orderResponse.data;
      if (orderData.error !== 0) {
        throw new Error('Failed to create order. Please try again.');
      }

      // Initiate Payment (POST /initiate_payment)
      const paymentResponse = await axios.post(
        `${BASE_URL}initiate_payment`,
        {
          productinfo: orderData._id,
          type: "order",
          amount: total
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const paymentData = paymentResponse.data;
      console.log('Payment initiated successfully:', paymentData);
      window.open(paymentData.url, '_blank');

    } catch (error) {
      console.error('Error during payment process:', error);
      alert('An error occurred. Please try again later.');
    }
  };


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
            <p className="text-white poppins font-[500] text-[15px]">₹ {summary.subtotal}</p>
          </div>

          {/* GST */}
          <div className="flex justify-between items-center">
            <p className="text-[#DB28A9] poppins font-[500] text-[15px]"> GST ({summary.gst}%) :</p>
            <p className="text-white poppins font-[500] text-[15px]">₹ {summary.gstAmount}</p>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-[#A5A5A526]" />

          {/* Total */}
          <div className="flex justify-between items-center">
            <p className="text-[#DB28A9] poppins font-[600] text-[15px]">Total :</p>
            <p className="text-white poppins font-[600] text-[15px]">₹ {summary.total}</p>
          </div>
          {/* Send Message Button */}
          <div className="mt-10">
            <button type='submit'
              style={{
                background:
                  'linear-gradient(274.15deg, #861577 37.11%, #36024C 111.1%, #34014A 121.44%)',
              }}
              className="text-white rounded-full text-[16px] font-medium py-3 w-full poppins"
              onClick={() => handleProceedToPayment(summary)}
            >
              Proceed Payment
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ordersummary

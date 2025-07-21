// src/components/StripePaymentForm.jsx
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const StripePaymentForm = ({ order, onClose, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Create Payment Intent
    const { data } = await axios.post("http://localhost:3000/api/payment/create-payment-intent", {
      amount: order.totalPrice,
    });

    // Step 2: Confirm Card Payment
    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Test User",
        },
      },
    });

    if (result.error) {
      alert("❌ Payment Failed: " + result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      alert("✅ Payment Successful!");
      onPaymentSuccess(order._id);
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-lg font-bold mb-4 text-center">Pay ₹{order.totalPrice}</h2>
        <form onSubmit={handleSubmit}>
          <CardElement className="p-3 border rounded-md mb-4" />
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="text-sm px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StripePaymentForm;

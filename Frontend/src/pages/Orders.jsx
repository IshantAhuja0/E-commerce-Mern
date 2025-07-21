// Updated Orders.jsx with Stripe modal integration

import React, { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "./StripePaymentForm";

const stripePromise = loadStripe("pk_test_51RnKM44epPILlSedX12V9GnDMCXfrilNF8iO9baVmrb4rzffEa8ZhjNDr8hINZG5531o1IuPoW8rsITq6a7NUjW100pFNi0h5g");

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/order/getorders", {
        withCredentials: true,
      });
      setOrders(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setLoading(false);
    }
  };

  const deleteOrder = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`/api/order/${id}`);
      setOrders(orders.filter((order) => order._id !== id));
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  const handlePayment = (order) => {
    setSelectedOrder(order);
    setShowPayment(true);
  };

  const handlePaymentSuccess = (orderId) => {
    setOrders((prev) =>
      prev.map((o) => (o._id === orderId ? { ...o, isPaid: true } : o))
    );
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">📋 Orders</h1>

      {loading ? (
        <p className="text-center text-slate-500">Loading orders...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white border border-slate-300 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 p-6"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-slate-500 italic">
                  {new Date(order.createdAt).toLocaleDateString()}
                </span>
                <button
                  className="text-red-500 text-xs hover:underline"
                  onClick={() => deleteOrder(order._id)}
                >
                  ✖ Delete
                </button>
              </div>

              <h2 className="text-lg font-semibold text-slate-800 mb-2">📦 Order Summary</h2>
              <div className="text-sm text-slate-700 mb-4">
                <p><span className="font-medium">To:</span> {order.shippingAddress.address}</p>
                <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-700 mb-2">🛍 Items</h3>
                <div className="space-y-3">
                  {order.orderItems.map((item) => (
                    <div key={item._id} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover border border-slate-300"
                      />
                      <div>
                        <p className="text-sm font-medium text-slate-800">{item.name}</p>
                        <p className="text-xs text-slate-600">Qty: {item.qty} × ₹{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-sm text-slate-700 mb-3">
                <p>💳 <span className="font-medium">Payment:</span> {order.paymentMethod}</p>
                <p>💰 <span className="font-medium">Total:</span> ₹{order.totalPrice}</p>
                {!order.isPaid && (
                  <button
                    onClick={() => handlePayment(order)}
                    className="mt-2 px-4 py-1 text-sm bg-blue-500 hover:bg-white hover:text-blue-700 text-white rounded-md shadow transition duration-200"
                  >
                    💳 Pay Now
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold border ${
                    order.isPaid
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-red-50 text-red-700 border-red-200"
                  }`}
                >
                  {order.isPaid ? "✅ Paid" : "❌ Not Paid"}
                </span>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold border ${
                    order.isDelivered
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-yellow-50 text-yellow-700 border-yellow-200"
                  }`}
                >
                  {order.isDelivered ? "📬 Delivered" : "⏳ Not Delivered"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {showPayment && selectedOrder && (
        <Elements stripe={stripePromise}>
          <StripePaymentForm
            order={selectedOrder}
            onClose={() => setShowPayment(false)}
            onPaymentSuccess={handlePaymentSuccess}
          />
        </Elements>
      )}
    </div>
  );
};

export default Orders;

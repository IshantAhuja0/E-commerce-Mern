import React, { useState } from 'react';
import axios from 'axios';
// Dummy Data (replace with actual data from your backend)
const dummyOrders = [
    { id: 'ORD001', date: '2025-07-01', total: 120.00, status: 'Delivered', items: [{ name: 'Casual T-Shirt', qty: 1 }, { name: 'Denim Jeans', qty: 1 }] },
    { id: 'ORD002', date: '2025-06-15', total: 75.50, status: 'Shipped', items: [{ name: 'Summer Dress', qty: 1 }] },
    { id: 'ORD003', date: '2025-05-20', total: 200.00, status: 'Processing', items: [{ name: 'Leather Jacket', qty: 1 }, { name: 'Knit Sweater', qty: 1 }] },
];

const dummyWishlist = [
    { id: 'WSH001', name: 'Elegant Maxi Dress', price: 99.99, imageUrl: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Maxi+Dress' },
    { id: 'WSH002', name: 'Sporty Sneakers', price: 65.00, imageUrl: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=Sneakers' },
    { id: 'WSH003', name: 'Classic White Shirt', price: 45.00, imageUrl: 'https://via.placeholder.com/150/2F4F4F/FFFFFF?text=White+Shirt' },
];

const dummyPaymentMethods = [
    { id: 'PMT001', type: 'Visa', lastFour: '4242', expiry: '12/28', default: true },
    { id: 'PMT002', type: 'Mastercard', lastFour: '5678', expiry: '07/26', default: false },
];

const dummyAddresses = [
    { id: 'ADDR001', name: 'John Doe', street: '123 Main St', city: 'Anytown', state: 'AP', zip: '500001', default: true },
    { id: 'ADDR002', name: 'Jane Smith', street: '456 Oak Ave', city: 'Otherville', state: 'TS', zip: '500002', default: false },
];

const Profile = () => {
    const [activeSection, setActiveSection] = useState('orderHistory'); // Default active section
const handleLogout=async ()=>
{
  const logout=await axios.post("http://localhost:3000/api/users/logout",{},
  {
    withCredentials:true
  })
  localStorage.removeItem("token")
  alert("user logout")
}
    // Helper function to render content for each section
    const renderSectionContent = () => {
        switch (activeSection) {
            case 'orderHistory':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Order History</h2>
                        {dummyOrders.length > 0 ? (
                            <div className="space-y-4">
                                {dummyOrders.map(order => (
                                    <div key={order.id} className="bg-white p-4 rounded-lg shadow-sm border border-[#E0E0E0]">
                                        <div className="flex justify-between items-center mb-2">
                                            <div>
                                                <p className="font-semibold text-lg text-[#333333]">Order #{order.id}</p>
                                                <p className="text-sm text-gray-500">Date: {order.date}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                                'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {order.status}
                                            </span>
                                        </div>
                                        <p className="text-md font-medium text-[#333333] mb-2">Total: ${order.total.toFixed(2)}</p>
                                        <ul className="list-disc list-inside text-sm text-gray-600">
                                            {order.items.map((item, idx) => (
                                                <li key={idx}>{item.name} (x{item.qty})</li>
                                            ))}
                                        </ul>
                                        <button className="mt-4 px-4 py-2 bg-[#4682B4] text-white rounded-md hover:bg-blue-600 transition duration-300">
                                            View Details
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 py-8">You haven't placed any orders yet.</p>
                        )}
                    </div>
                );
            case 'payments':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Payment Methods</h2>
                        {dummyPaymentMethods.length > 0 ? (
                            <div className="space-y-4">
                                {dummyPaymentMethods.map(method => (
                                    <div key={method.id} className="bg-white p-4 rounded-lg shadow-sm border border-[#E0E0E0] flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold text-lg text-[#333333]">{method.type} ending in {method.lastFour}</p>
                                            <p className="text-sm text-gray-500">Expires: {method.expiry}</p>
                                            {method.default && <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full mt-1 inline-block">Default</span>}
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="text-[#4682B4] hover:underline">Edit</button>
                                            <button className="text-red-500 hover:underline">Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 py-8">No payment methods saved.</p>
                        )}
                        <button className="mt-6 px-6 py-2 bg-[#4682B4] text-white rounded-md hover:bg-blue-600 transition duration-300">
                            Add New Card
                        </button>
                    </div>
                );
            case 'wishlist':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Your Wishlist</h2>
                        {dummyWishlist.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {dummyWishlist.map(item => (
                                    <div key={item.id} className="bg-white rounded-lg shadow-sm border border-[#E0E0E0] overflow-hidden">
                                        <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-semibold text-lg text-[#333333] mb-1">{item.name}</h3>
                                            <p className="text-gray-600 text-md mb-3">${item.price.toFixed(2)}</p>
                                            <div className="flex space-x-2">
                                                <button className="flex-1 px-3 py-2 bg-[#4682B4] text-white rounded-md text-sm hover:bg-blue-600 transition duration-300">
                                                    Add to Cart
                                                </button>
                                                <button className="flex-1 px-3 py-2 border border-red-400 text-red-500 rounded-md text-sm hover:bg-red-50 hover:text-red-600 transition duration-300">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 py-8">Your wishlist is empty.</p>
                        )}
                    </div>
                );
            case 'manageProfile':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Manage Profile</h2>
                        <form className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-[#E0E0E0]">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="name" defaultValue="John Doe" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4682B4] focus:border-[#4682B4]" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="email" defaultValue="john.doe@example.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4682B4] focus:border-[#4682B4]" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="tel" id="phone" defaultValue="+91 98765 43210" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4682B4] focus:border-[#4682B4]" />
                            </div>
                            <button type="submit" className="px-6 py-2 bg-[#4682B4] text-white rounded-md hover:bg-blue-600 transition duration-300">
                                Save Changes
                            </button>
                        </form>
                        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-[#E0E0E0]">
                            <h3 className="text-xl font-semibold mb-4 text-[#333333]">Password Management</h3>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-300">
                                Change Password
                            </button>
                        </div>
                    </div>
                );
            case 'addresses':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Your Addresses</h2>
                        {dummyAddresses.length > 0 ? (
                            <div className="space-y-4">
                                {dummyAddresses.map(address => (
                                    <div key={address.id} className="bg-white p-4 rounded-lg shadow-sm border border-[#E0E0E0]">
                                        <p className="font-semibold text-lg text-[#333333]">{address.name}</p>
                                        <p className="text-gray-600">{address.street}</p>
                                        <p className="text-gray-600">{address.city}, {address.state} {address.zip}</p>
                                        {address.default && <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full mt-2 inline-block">Default Address</span>}
                                        <div className="mt-3 flex space-x-2">
                                            <button className="text-[#4682B4] hover:underline">Edit</button>
                                            <button className="text-red-500 hover:underline">Remove</button>
                                            {!address.default && (
                                                <button className="text-gray-600 hover:underline">Set as Default</button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 py-8">No addresses saved.</p>
                        )}
                        <button className="mt-6 px-6 py-2 bg-[#4682B4] text-white rounded-md hover:bg-blue-600 transition duration-300">
                            Add New Address
                        </button>
                    </div>
                );
            case 'notifications':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Notifications</h2>
                        <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-[#E0E0E0]">
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-[#4682B4]" defaultChecked />
                                    <span className="ml-2 text-gray-700">Order Status Updates</span>
                                </label>
                                <p className="text-sm text-gray-500 ml-7">Receive emails/SMS about your order status changes.</p>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-[#4682B4]" defaultChecked />
                                    <span className="ml-2 text-gray-700">Promotional Emails & Offers</span>
                                </label>
                                <p className="text-sm text-gray-500 ml-7">Get notified about new arrivals, sales, and exclusive discounts.</p>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-[#4682B4]" />
                                    <span className="ml-2 text-gray-700">Back-in-Stock Alerts</span>
                                </label>
                                <p className="text-sm text-gray-500 ml-7">Receive alerts when items you're interested in are back in stock.</p>
                            </div>
                            <button className="mt-4 px-6 py-2 bg-[#4682B4] text-white rounded-md hover:bg-blue-600 transition duration-300">
                                Save Preferences
                            </button>
                        </div>
                    </div>
                );
            case 'helpSupport':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Help & Support</h2>
                        <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-[#E0E0E0]">
                            <p className="text-gray-700">
                                Need assistance? We're here to help!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a href="/faq" className="block p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300 text-center font-medium text-[#4682B4]">
                                    Frequently Asked Questions (FAQ)
                                </a>
                                <a href="/contact" className="block p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300 text-center font-medium text-[#4682B4]">
                                    Contact Us
                                </a>
                                <a href="/returns" className="block p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300 text-center font-medium text-[#4682B4]">
                                    Returns & Exchange Policy
                                </a>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        // Added 'w-full' and 'h-screen' to make the entire page fill the viewport
        <div className=" bg-slate-100 py-10 px-4 sm:px-6 lg:px-8 w-full max-w-10xl mx-auto 
"> {/* Light slate-gray background */}
            <div className="max-w-9xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                {/* Sidebar Navigation - Dark slate gray retained for contrast */}
                <aside className="w-full md:w-64 bg-slate-600 text-[#F0F0F0] p-6 flex-shrink-0 max-w-10xl">
                    <h1 className="text-3xl font-bold mb-8 text-[#F0F0F0]">Your Profile</h1>
                    <nav>
                        <ul>
                            {[
                                { name: 'Order History', key: 'orderHistory' },
                                { name: 'Payments', key: 'payments' },
                                { name: 'Wishlist', key: 'wishlist' },
                                { name: 'Manage Profile', key: 'manageProfile' },
                                { name: 'Addresses', key: 'addresses' },
                                { name: 'Notifications', key: 'notifications' },
                                { name: 'Help & Support', key: 'helpSupport' },
                            ].map(section => (
                                <li key={section.key} className="mb-4">
                                    <button
                                        onClick={() => setActiveSection(section.key)}
                                        className={`w-full text-left py-2 px-4 rounded-md transition duration-200 ${
                                            activeSection === section.key
                                                ? 'bg-slate-400 text-white font-semibold' // Accent blue for active
                                                : 'text-[#BBBBBB] hover:text-white hover:bg-[#2F4F4F]/[0.8]' // Lighter gray for inactive, hover dark
                                        }`}
                                    >
                                        {section.name}
                                    </button>
                                </li>
                            ))}
                            <li className="mt-8 pt-4 border-t border-[#F0F0F0]/[0.2]">
                                <button
                                    onClick={() =>handleLogout()} 
                                    className="w-full text-left py-2 px-4 rounded-md text-slate-gray-400 hover:text-red-100 hover:bg-[#2F4F4F]/[0.8] transition duration-200"
                                >
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content Area - Very subtle light gray background for content container */}
                <main className="flex-grow bg-[#E0E0E0]/[0.4] p-4 md:p-8"> {/* Adjusted to a very light gray with subtle transparency */}
                    <h2 className="text-3xl font-bold mb-8 text-[#333333] hidden md:block">
                        Welcome back, <span className="text-[#4682B4]">John Doe!</span>
                    </h2>
                    <div className="bg-white rounded-lg shadow-md min-h-[600px] border border-[#E0E0E0]">
                        {renderSectionContent()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Profile;
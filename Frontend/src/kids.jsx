import React from "react";
import { motion } from "framer-motion";

const dummyKidsProducts = [
  {
    id: 1,
    name: "Cotton Baby Romper",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1602810317994-9fa2a1c1fc47?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Boys Cartoon T-Shirt",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1618354691217-7f2db0f0535f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Girls Printed Frock",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1589478580582-df3229f9003b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Unisex Soft Hoodie",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1619021832238-108cf2d93c3a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Colorful Baby Onesie",
    price: "₹349",
    image: "https://images.unsplash.com/photo-1586864387788-7f0e408a3aa1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Printed Skirt Set",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1619679227560-c1f0fce17d8f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Cute Pajama Set",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1589467150668-f804caa659b0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Winter Beanie Hat",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1603415526960-fbdb64758b12?auto=format&fit=crop&w=500&q=80",
  },
];

export default function kids() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-orange-50 px-4 py-12">
      <div className="text-center mb-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-pink-600"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🌈 Kids Collection
        </motion.h1>
        <p className="text-gray-600 mt-2">Adorable outfits and essentials for your little ones</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dummyKidsProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl cursor-pointer transition-all"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: product.id * 0.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-pink-500 font-bold">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

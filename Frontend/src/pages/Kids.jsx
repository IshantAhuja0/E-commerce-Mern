import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

const Kids = () => {
  // Dummy data for the main kids' clothing and accessories collection
  const kidsProducts = [
    {
      id: 1,
      name: "Adventure Tee",
      price: '$19.99',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Kids+Tee',
      category: 'Tops',
      description: 'Soft cotton tee for everyday adventures.',
      buttonText: 'Add to Cart'
    },
    {
      id: 2,
      name: "Sparkle Dress",
      price: '$34.50',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Kids+Dress',
      category: 'Dresses',
      description: 'Elegant dress with a touch of sparkle.',
      buttonText: 'View Details'
    },
    {
      id: 3,
      name: "Playful Shorts",
      price: '$17.00',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Kids+Shorts',
      category: 'Bottoms',
      description: 'Comfortable shorts for active play.',
      buttonText: 'Add to Cart'
    },
    {
      id: 4,
      name: "Cozy Hoodie",
      price: '$29.99',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Kids+Hoodie',
      category: 'Outerwear',
      description: 'Warm and soft hoodie for chilly days.',
      buttonText: 'View Details'
    },
    {
      id: 5,
      name: "Striped Leggings",
      price: '$15.00',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Kids+Leggings',
      category: 'Bottoms',
      description: 'Flexible leggings for all-day comfort.',
      buttonText: 'Add to Cart'
    },
    {
      id: 6,
      name: "Explorer Backpack",
      price: '$25.99',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Kids+Backpack',
      category: 'Accessories',
      description: 'Durable backpack for school or adventures.',
      buttonText: 'View Details'
    },
    {
      id: 7,
      name: "Sleepy Pajamas",
      price: '$22.00',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Kids+PJs',
      category: 'Sleepwear',
      description: 'Soft pajamas for a restful night.',
      buttonText: 'Add to Cart'
    },
    {
      id: 8,
      name: "Animal Puzzle",
      price: '$18.50',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Kids+Puzzle',
      category: 'Toys',
      description: 'Engaging puzzle for young minds.',
      buttonText: 'View Details'
    },
    {
      id: 9,
      name: "Artist Apron Set",
      price: '$21.00',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Kids+Apron',
      category: 'Role Play',
      description: 'Inspire creativity with this fun apron set.',
      buttonText: 'Add to Cart'
    },
  ];

  // Dummy data for limited-time deals (kids')
  const dealProductsKids = [
    {
      id: 101,
      name: "Building Blocks Set",
      originalPrice: '$40.00',
      price: '$29.99',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Blocks+Deal',
      description: 'Endless fun with colorful building blocks. Limited offer!',
      buttonText: 'Shop Deal'
    },
    {
      id: 102,
      name: "Kids' Rain Boots",
      originalPrice: '$30.00',
      price: '$19.99',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Rain+Boots+Deal',
      description: 'Splash in puddles with these vibrant and durable rain boots!',
      buttonText: 'Shop Deal'
    },
  ];

  // Dummy data for top picks/best sellers (kids')
  const topPicksKids = [
    {
      id: 201,
      name: "Soft Plush Toy",
      price: '$24.00',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Plush+Toy',
      category: 'Toys',
      description: 'Cuddly companion for your little one.',
      buttonText: 'Quick View'
    },
    {
      id: 202,
      name: "Kids' Sneakers",
      price: '$28.50',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Kids+Sneakers',
      category: 'Footwear',
      description: 'Comfortable and stylish for everyday play.',
      buttonText: 'Add to Cart'
    },
    {
      id: 203,
      name: "Storybook Set",
      price: '$35.00',
      imageUrl: 'https://placehold.co/300x400/F5F5F5/333333?text=Storybook+Set',
      category: 'Books',
      description: 'A delightful collection of bedtime stories.',
      buttonText: 'View Details'
    },
  ];

  // Data for the "Shop by Interest" section with minimal colors
  const interestCategories = [
    {
      name: "Adventure Zone",
      imageUrl: "https://placehold.co/400x300/E0E0E0/444444?text=Adventure",
      description: "Gear up for exciting journeys!",
      bgColor: "bg-gray-100",
      hoverColor: "hover:bg-gray-200",
      accentColor: "text-gray-800"
    },
    {
      name: "Dreamland Delights",
      imageUrl: "https://placehold.co/400x300/E0E0E0/444444?text=Dreamland",
      description: "Magical outfits for imaginative play!",
      bgColor: "bg-gray-100",
      hoverColor: "hover:bg-gray-200",
      accentColor: "text-gray-800"
    },
    {
      name: "Creative Corner",
      imageUrl: "https://placehold.co/400x300/E0E0E0/444444?text=Creative",
      description: "Unleash artistic talents with fun supplies!",
      bgColor: "bg-gray-100",
      hoverColor: "hover:bg-gray-200",
      accentColor: "text-gray-800"
    },
    {
      name: "Sporty Squad",
      imageUrl: "https://placehold.co/400x300/E0E0E0/444444?text=Sporty",
      description: "Activewear for little athletes!",
      bgColor: "bg-gray-100",
      hoverColor: "hover:bg-gray-200",
      accentColor: "text-gray-800"
    },
  ];

  // Product Card Component (reused with kids' specific styling)
  const ProductCard = ({ product, isDeal = false }) => (
    <div
      key={product.id}
      // Increased shadow, added top border, refined hover effects
      className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-103 hover:shadow-2xl border border-gray-200 border-t-4 border-t-indigo-300 hover:border-t-indigo-500 flex flex-col group"
    >
      {isDeal && (
        <span className="absolute top-5 left-5 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 animate-pulse"> {/* Reduced font size for badge */}
          DEAL!
        </span>
      )}
      <div className="relative w-full h-80 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          src={product.imageUrl}
          alt={product.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/300x400/E0E0E0/888888?text=Image+Error`;
          }}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between"> {/* Reduced padding */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate"> {/* Reduced font size, changed to semibold */}
            {product.name}
          </h3>
          {product.category && (
            <p className="text-sm text-gray-600 mb-1">{product.category}</p> 
          )}
          <p className="text-xs text-gray-700 mb-3 line-clamp-2"> {/* Reduced font size */}
            {product.description}
          </p>
          {isDeal ? (
            <div className="flex items-baseline space-x-1"> {/* Reduced space-x */}
              <p className="text-2xl font-extrabold text-red-600"> {/* Reduced font size */}
                {product.price}
              </p>
              <p className="text-base text-gray-500 line-through"> {/* Reduced font size */}
                {product.originalPrice}
              </p>
            </div>
          ) : (
            <p className="text-2xl font-extrabold text-gray-800"> {/* Reduced font size */}
              {product.price}
            </p>
          )}
        </div>
        <button className="mt-6 w-full bg-indigo-700 text-white py-2.5 px-5 rounded-xl font-medium text-base shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"> {/* Reduced padding, font size, changed to medium */}
          {product.buttonText || 'View Product'}
        </button>
      </div>
    </div>
  );

  return (
    // Main container for the entire Kids Page with a clean, minimal background
    <div className="min-h-screen bg-gray-50 font-sans antialiased">

      {/* Main Kids' Collection Section (now at the top) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12 tracking-tight leading-tight sm:text-4xl"> {/* Reduced font size */}
            Explore Our <span className="text-indigo-700">Kids Collection</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10"> {/* Reduced gap */}
            {kidsProducts.slice(0, 6).map((product) => ( // Display first 6 products (2 lines in 3-col grid)
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* "Shop by Interest" Section (now in the middle) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight leading-tight sm:text-5xl"> {/* Reduced font size */}
            Shop by <span className="text-gray-700">Their World</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interestCategories.map((category, index) => (
              <div
                key={index}
                // Increased shadow, added top border, refined hover effects
                className={`relative ${category.bgColor} rounded-3xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-103 ${category.hoverColor} group border border-gray-200 border-t-4 border-t-gray-400 hover:border-t-gray-600`}
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/400x300/E0E0E0/888888?text=Image+Error`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className={`text-xl font-bold ${category.accentColor} mb-2`}> {/* Reduced font size */}
                    {category.name}
                  </h3>
                  <p className="text-base text-gray-700 mb-4"> {/* Reduced font size */}
                    {category.description}
                  </p>
                  <button className={`inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600`}> {/* Reduced padding */}
                    Explore
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L12.586 12H4a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining Main Kids' Collection Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* No title here, as it's a continuation of the previous section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
            {kidsProducts.slice(6).map((product) => ( // Display remaining products
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Limited-Time Deals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight leading-tight sm:text-5xl">
            Limited-Time <span className="text-red-600">Deals</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {dealProductsKids.map((product) => (
              <ProductCard key={product.id} product={product} isDeal={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight leading-tight sm:text-5xl">
            Our <span className="text-gray-700">Top Picks</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
            {topPicksKids.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kids;

import React from "react"
import { useState,useEffect } from "react";
const Women=()=>
{
     const carouselImages = [
    'https://placehold.co/1400x700/FCE4EC/880E4F?text=Elegant+Women%27s+Wear',
    'https://placehold.co/1400x700/E1BEE7/4A148C?text=Chic+Collection',
    'https://placehold.co/1400x700/D1C4E9/311B92?text=Modern+Feminine',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % carouselImages.length
      );
    }, 2000); // Change image every 5 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, [carouselImages.length]);

  // Handle manual carousel navigation
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % carouselImages.length
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };
    const womenProducts = [
    {
      id: 1,
      name: "Elegant Floral Maxi Dress",
      price: '$89.99',
      imageUrl: 'https://placehold.co/300x400/F0F0F0/333333?text=Floral+Maxi+Dress',
      category: 'Dresses',
      description: 'A beautiful maxi dress with a vibrant floral print, perfect for summer.',
      buttonText: 'Add to Cart' // Unique button text
    },
    {
      id: 2,
      name: "High-Waist Skinny Jeans",
      price: '$69.50',
      imageUrl: 'https://placehold.co/300x400/F0F0F0/333333?text=Skinny+Jeans',
      category: 'Jeans',
      description: 'Comfortable and stylish high-waist skinny jeans for everyday wear.',
      buttonText: 'View Details' // Unique button text
    },
    {
      id: 3,
      name: "Chiffon Blouse with Ruffles",
      price: '$45.00',
      imageUrl: 'https://placehold.co/300x400/F0F0F0/333333?text=Chiffon+Blouse',
      category: 'Tops',
      description: 'Lightweight chiffon blouse with delicate ruffle details.',
      buttonText: 'Add to Cart'
    },
    {
      id: 4,
      name: "A-Line Midi Skirt",
      price: '$55.99',
      imageUrl: 'https://placehold.co/300x400/F0F0F0/333333?text=Midi+Skirt',
      category: 'Skirts',
      description: 'Versatile A-line midi skirt, suitable for casual or formal occasions.',
      buttonText: 'View Details'
    },
    {
      id: 5,
      name: "Cozy Knit Cardigan",
      price: '$75.00',
      imageUrl: 'https://placehold.co/300x400/F0F0F0/333333?text=Knit+Cardigan',
      category: 'Sweaters & Cardigans',
      description: 'Soft and warm knit cardigan, perfect for layering during cooler days.',
      buttonText: 'Add to Cart'
    },
    {
      id: 6,
      name: "Sporty Leggings with Pockets",
      price: '$39.99',
      imageUrl: 'https://placehold.co/300x400/F0F0F0/333333?text=Leggings',
      category: 'Activewear',
      description: 'High-performance leggings with convenient side pockets for your essentials.',
      buttonText: 'View Details'
    },
    {
      id: 7,
      name: "Classic White Button-Up Shirt",
      price: '$49.00',
      imageUrl: 'https://placehold.co/300x400/F0F0F0/333333?text=White+Shirt',
      category: 'Tops',
      description: 'A timeless classic, essential for any professional or casual wardrobe.',
      buttonText: 'Add to Cart'
    },
    {
      id: 8,
      name: "Denim Jacket with Embroidery",
      price: '$95.00',
      imageUrl: 'https://placehold.co/300x400/F0F0F0/333333?text=Denim+Jacket',
      category: 'Jackets',
      description: 'Stylish denim jacket featuring intricate floral embroidery.',
      buttonText: 'View Details'
    },
    {
      id: 9,
      name: "Comfortable Lounge Pants",
      price: '$34.00',
      imageUrl: 'https://placehold.co/300x400/F0F0F0/333333?text=Lounge+Pants',
      category: 'Loungewear',
      description: 'Ultra-soft lounge pants for ultimate comfort at home.',
      buttonText: 'Add to Cart'
    },
  ];

  // Dummy data for limited-time deals
  const dealProducts = [
    {
      id: 101,
      name: "Summer Breeze Sundress",
      originalPrice: '$65.00',
      price: '$39.99',
      imageUrl: 'https://placehold.co/300x400/FFD1DC/6A0572?text=Sundress+Deal',
      description: 'Lightweight and airy, perfect for sunny days. Limited stock!',
      buttonText: 'Shop Deal' // Unique button text for deals
    },
    {
      id: 102,
      name: "Yoga Flex Leggings",
      originalPrice: '$45.00',
      price: '$29.99',
      imageUrl: 'https://placehold.co/300x400/D8BFD8/4B0082?text=Yoga+Leggings+Deal',
      description: 'Ultimate comfort and flexibility for your workouts.',
      buttonText: 'Shop Deal'
    },
  ];

  // Dummy data for top picks/best sellers
  const topPicks = [
    {
      id: 201,
      name: "Signature Silk Scarf",
      price: '$29.99',
      imageUrl: 'https://placehold.co/300x400/E0BBE4/957DAD?text=Silk+Scarf',
      category: 'Accessories',
      description: 'Luxurious silk scarf, a perfect accent to any outfit.',
      buttonText: 'Quick View' // Unique button text
    },
    {
      id: 202,
      name: "Comfort Fit T-Shirt",
      price: '$22.50',
      imageUrl: 'https://placehold.co/300x400/C3B1E1/6A0572?text=Comfort+Tee',
      category: 'Tops',
      description: 'Soft cotton tee, essential for everyday comfort.',
      buttonText: 'Add to Cart'
    },
    {
      id: 203,
      name: "Elegant Pleated Skirt",
      price: '$68.00',
      imageUrl: 'https://placehold.co/300x400/A593E0/4B0082?text=Pleated+Skirt',
      category: 'Skirts',
      description: 'Flowy pleated skirt, adds a touch of sophistication.',
      buttonText: 'View Details'
    },
  ];

  // Product Card Component (reused for consistency)
  const ProductCard = ({ product, isDeal = false }) => (
    <div
      key={product.id}
      className="relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-indigo-300 flex flex-col group"
    >
      {isDeal && (
        <span className="absolute top-5 left-5 bg-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md z-10 animate-pulse">
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
      <div className="p-8 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 truncate"> {/* Reduced from text-2xl */}
            {product.name}
          </h3>
          {product.category && (
            <p className="text-base text-gray-600 mb-2">{product.category}</p>
          )}
          <p className="text-sm text-gray-700 mb-4 line-clamp-2">
            {product.description}
          </p>
          {isDeal ? (
            <div className="flex items-baseline space-x-2">
              <p className="text-3xl font-extrabold text-red-600"> {/* Reduced from text-4xl */}
                {product.price}
              </p>
              <p className="text-lg text-gray-500 line-through"> {/* Reduced from text-xl */}
                {product.originalPrice}
              </p>
            </div>
          ) : (
            <p className="text-3xl font-extrabold text-gray-800"> {/* Reduced from text-4xl */}
              {product.price}
            </p>
          )}
        </div>
        <button className="mt-10 w-full bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"> {/* Reduced text-xl to text-lg and py-4 to py-3 */}
          {product.buttonText || 'View Product'} {/* Dynamic button text */}
        </button>
      </div>
    </div>
  );

  return (
    // Main container for the entire Women's Page with a clean, minimal background
    <div className="min-h-screen bg-gray-50 font-sans antialiased">

      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={carouselImages[currentImageIndex]}
          alt="Women's Collection Hero"
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/1400x700/E0E0E0/888888?text=Image+Error`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> {/* More dramatic gradient overlay */}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={goToPrevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full z-20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button
          onClick={goToNextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full z-20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>

        <div className="relative z-10 p-8 max-w-5xl mx-auto">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl animate-fade-in-down">
            Radiate Confidence.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 opacity-90 drop-shadow-md animate-fade-in-up">
            Discover exquisite styles that empower your unique beauty.
          </p>
          <button className="bg-pink-600 text-white py-4 px-12 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-offset-2 animate-fade-in-up-delay">
            Shop Women's Collection
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Limited-Time Deals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight leading-tight sm:text-5xl"> {/* Reduced font size */}
            Limited-Time <span className="text-red-600">Deals</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {dealProducts.map((product) => (
              <ProductCard key={product.id} product={product} isDeal={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Women's Collection Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight leading-tight sm:text-5xl"> {/* Reduced font size */}
            Explore Our <span className="text-indigo-600">Collection</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight leading-tight sm:text-5xl"> {/* Reduced font size */}
            Our <span className="text-green-600">Top Picks</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
            {topPicks.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
    export default Women;
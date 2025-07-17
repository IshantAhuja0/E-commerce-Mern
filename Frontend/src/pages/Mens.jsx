import React from 'react';

// Main App component that will render the complete Men's Page
const Men = () => {
  // Dummy data for the main men's clothing collection
  const menProducts = [
    {
      id: 1,
      name: "Classic Fit Oxford Shirt",
      price: '$54.99',
      imageUrl: 'https://placehold.co/300x400/E8F0FE/1A202C?text=Oxford+Shirt',
      category: 'Shirts',
      description: 'A timeless staple for any wardrobe, offering comfort and style.',
      buttonText: 'Add to Cart'
    },
    {
      id: 2,
      name: "Straight Leg Dark Wash Jeans",
      price: '$79.00',
      imageUrl: 'https://placehold.co/300x400/E8F0FE/1A202C?text=Dark+Jeans',
      category: 'Jeans',
      description: 'Versatile jeans perfect for casual outings or smart-casual looks.',
      buttonText: 'View Details'
    },
    {
      id: 3,
      name: "Premium Cotton Polo Shirt",
      price: '$39.50',
      imageUrl: 'https://placehold.co/300x400/E8F0FE/1A202C?text=Polo+Shirt',
      category: 'Tops',
      description: 'Soft and breathable, ideal for everyday comfort and style.',
      buttonText: 'Add to Cart'
    },
    {
      id: 4,
      name: "Slim Fit Chino Pants",
      price: '$62.00',
      imageUrl: 'https://placehold.co/300x400/E8F0FE/1A202C?text=Chino+Pants',
      category: 'Pants',
      description: 'Modern fit chinos that combine comfort with a sleek silhouette.',
      buttonText: 'View Details'
    },
    {
      id: 5,
      name: "Lightweight Puffer Jacket",
      price: '$110.00',
      imageUrl: 'https://placehold.co/300x400/E8F0FE/1A202C?text=Puffer+Jacket',
      category: 'Jackets',
      description: 'Perfect for transitional weather, offering warmth without bulk.',
      buttonText: 'Add to Cart'
    },
    {
      id: 6,
      name: "Athletic Performance Shorts",
      price: '$34.99',
      imageUrl: 'https://placehold.co/300x400/E8F0FE/1A202C?text=Athletic+Shorts',
      category: 'Activewear',
      description: 'Designed for peak performance and ultimate comfort during workouts.',
      buttonText: 'View Details'
    },
    {
      id: 7,
      name: "Graphic Print T-Shirt",
      price: '$28.00',
      imageUrl: 'https://placehold.co/300x400/E8F0FE/1A202C?text=Graphic+Tee',
      category: 'Tops',
      description: 'Express your style with our unique and comfortable graphic tees.',
      buttonText: 'Add to Cart'
    },
    {
      id: 8,
      name: "Wool Blend Sweater",
      price: '$85.00',
      imageUrl: 'https://placehold.co/300x400/E8F0FE/1A202C?text=Wool+Sweater',
      category: 'Sweaters',
      description: 'Cozy and stylish, perfect for cooler evenings.',
      buttonText: 'View Details'
    },
    {
      id: 9,
      name: "Minimalist Leather Belt",
      price: '$45.00',
      imageUrl: 'https://placehold.co/300x400/E8F0FE/1A202C?text=Leather+Belt',
      category: 'Accessories',
      description: 'A sleek and durable accessory to complete any outfit.',
      buttonText: 'Add to Cart'
    },
  ];

  // Dummy data for limited-time deals (men's)
  const dealProductsMen = [
    {
      id: 101,
      name: "Adventure Cargo Shorts",
      originalPrice: '$55.00',
      price: '$32.99',
      imageUrl: 'https://placehold.co/300x400/D4EDDA/34495E?text=Cargo+Shorts+Deal',
      description: 'Durable and comfortable for your outdoor escapades. Limited stock!',
      buttonText: 'Shop Deal'
    },
    {
      id: 102,
      name: "Lightweight Running Jacket",
      originalPrice: '$90.00',
      price: '$59.99',
      imageUrl: 'https://placehold.co/300x400/D4EDDA/34495E?text=Running+Jacket+Deal',
      description: 'Stay dry and comfortable during your runs. Act fast!',
      buttonText: 'Shop Deal'
    },
  ];

  // Dummy data for top picks/best sellers (men's)
  const topPicksMen = [
    {
      id: 201,
      name: "Premium Denim Jacket",
      price: '$105.00',
      imageUrl: 'https://placehold.co/300x400/C8E6C9/2C3E50?text=Denim+Jacket',
      category: 'Jackets',
      description: 'A rugged yet stylish essential for every man.',
      buttonText: 'Quick View'
    },
    {
      id: 202,
      name: "Comfort Fit Hoodie",
      price: '$60.00',
      imageUrl: 'https://placehold.co/300x400/B2D8B2/1A202C?text=Comfort+Hoodie',
      category: 'Hoodies',
      description: 'Soft and warm, perfect for casual comfort.',
      buttonText: 'Add to Cart'
    },
    {
      id: 203,
      name: "Leather Chelsea Boots",
      price: '$130.00',
      imageUrl: 'https://placehold.co/300x400/9AD3BC/4B0082?text=Chelsea+Boots',
      category: 'Footwear',
      description: 'Sophisticated and versatile, ideal for smart-casual occasions.',
      buttonText: 'View Details'
    },
  ];

  // Product Card Component (reused for consistency but with distinct styling)
  const ProductCard = ({ product, isDeal = false }) => (
    <div
      key={product.id}
      className="relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-400 flex flex-col group"
    >
      {isDeal && (
        <span className="absolute top-5 left-5 bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md z-10 animate-pulse">
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
          <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
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
              <p className="text-3xl font-extrabold text-red-600">
                {product.price}
              </p>
              <p className="text-lg text-gray-500 line-through">
                {product.originalPrice}
              </p>
            </div>
          ) : (
            <p className="text-3xl font-extrabold text-gray-800">
              {product.price}
            </p>
          )}
        </div>
        <button className="mt-10 w-full bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
          {product.buttonText || 'View Product'}
        </button>
      </div>
    </div>
  );

  return (
    // Main container for the entire Men's Page with a clean, minimal background
    <div className="min-h-screen bg-gray-100 font-sans antialiased">

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1400x700/2C3E50/ECF0F1?text=Modern+Men%27s+Fashion')" }}> {/* Larger image, darker background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> {/* More dramatic gradient overlay */}
        <div className="relative z-10 p-8 max-w-5xl mx-auto"> {/* Wider max-width */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl animate-fade-in-down"> {/* Larger, bolder text, tighter tracking */}
            Elevate Your Style.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 opacity-90 drop-shadow-md animate-fade-in-up"> {/* Lighter text color */}
            Discover curated collections that define modern masculinity.
          </p>
          <button className="bg-blue-600 text-white py-4 px-12 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 animate-fade-in-up-delay"> {/* Stronger button color, larger padding */}
            Shop The Collection
          </button>
        </div>
      </section>

      {/* Limited-Time Deals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight leading-tight sm:text-5xl">
            Limited-Time <span className="text-red-600">Offers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {dealProductsMen.map((product) => (
              <ProductCard key={product.id} product={product} isDeal={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Men's Collection Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight leading-tight sm:text-5xl">
            Explore Our <span className="text-blue-700">Collection</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-tight leading-tight sm:text-5xl">
            Our <span className="text-green-700">Best Sellers</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
            {topPicksMen.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Men;

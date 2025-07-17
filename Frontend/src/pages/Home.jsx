import React from "react";
import { useState ,useEffect} from "react";
import LoginPopup from "./LoginPopup";

const motion = {
  div: ({
    children,
    initial,
    animate,
    transition,
    whileInView,
    viewport,
    ...rest
  }) => <div {...rest}>{children}</div>,
  h1: ({
    children,
    initial,
    animate,
    transition,
    whileInView,
    viewport,
    ...rest
  }) => <h1 {...rest}>{children}</h1>,
  p: ({
    children,
    initial,
    animate,
    transition,
    whileInView,
    viewport,
    ...rest
  }) => <p {...rest}>{children}</p>,
  button: ({
    children,
    initial,
    animate,
    transition,
    whileInView,
    viewport,
    ...rest
  }) => <button {...rest}>{children}</button>,
  h2: ({
    children,
    initial,
    animate,
    transition,
    whileInView,
    viewport,
    ...rest
  }) => <h2 {...rest}>{children}</h2>,
};

  
// Main App Component
const Home = () => {
  const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000); // 30 seconds

      return () => clearTimeout(timer); 
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Main Content */}
      {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Category Showcase Section (Women, Men, Kids) */}
        <CategoryShowcase />

        {/* Trending Now Section */}
        <TrendingNowSection />

        {/* Mid-Page Promotional Banner/Hero */}
        <MidPagePromo />

        {/* Promotions Section */}
        <PromotionsSection />
      </main>
    </div>
  );
};


  //Hero 
const HeroSection = () => {
  return (
    <section
      className="relative h-[700px] md:h-[800px] bg-cover bg-center flex items-center justify-center text-white rounded-lg m-4 shadow-xl overflow-hidden"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1596759714856-2e407077651c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      {" "}
      {/* New, more dynamic image for hero */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>{" "}
      {/* Increased opacity for deeper contrast */}
      <div className="relative z-10 text-center p-6 max-w-6xl w-full flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Main Text Content */}
        <div className="md:w-1/2 text-left md:pr-12 mb-8 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight tracking-tighter drop-shadow-3xl font-serif text-white"
          >
            Aura Threads
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-2xl md:text-4xl mb-6 opacity-95 font-light text-gray-200"
          >
            Curated Elegance. Unmatched Quality.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="bg-[#b8860b] text-white hover:bg-[#a57a09] font-semibold py-4 px-12 rounded-full shadow-xl transition duration-300 transform hover:scale-105 hover:shadow-2xl text-lg tracking-wide" // Gold button
          >
            Shop The Collection
          </motion.button>
        </div>
        {/* Image and Quote Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="md:w-1/2 flex flex-col items-center md:items-end text-right"
        >
          <div className="relative w-84 h-1000 md:w-100 md:h-136 rounded-xl overflow-hidden">
            {" "}
            {/* Gold border */}
            <img
              src="https://i.pinimg.com/originals/12/b8/0c/12b80c2bcb9a9d0d618faef866a2f7d0.png"
              alt="Fashion Model"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x800/CCCCCC/333333?text=Model+Image`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="text-lg md:text-2xl mt-8 opacity-90 font-light italic max-w-sm text-gray-200" // Light text
          >
            "Fashion is what you buy. Style is what you do with it."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

// Category Showcase Section Component
const CategoryShowcase = () => {
  const categories = [
    {
      name: "Women's Collection",
      imageUrl:
        "https://i.pinimg.com/736x/66/21/e2/6621e2ae2a9db992fe9f35c06902827a.jpg",
      link: "#",
    },
    {
      name: "Men's Collection",
      imageUrl:
        "https://i.pinimg.com/originals/91/ce/0c/91ce0c7ed91dfda2718b9a60ba71bd09.jpg",
      link: "#",
    },
    {
      name: "Kids' Apparel",
      imageUrl:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white rounded-lg m-4 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Shop By Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group aspect-[3/4]"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x800/CCCCCC/333333?text=Image+Unavailable`;
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end p-6 rounded-xl">
              <a
                href={category.link}
                className="text-white text-2xl font-semibold group-hover:underline"
              >
                {category.name}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Trending Now Section Component (New)
const TrendingNowSection = () => {
  const trendingProducts = [
    {
      name: "Velvet Dress",
      price: "$380",
      imageUrl:
        "https://images.unsplash.com/photo-1596759714856-2e407077651c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sculpted Blazer",
      price: "$220",
      imageUrl:
        "https://images.unsplash.com/photo-1551028020-f38b77622820?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Artisanal Knit Sweater",
      price: "$190",
      imageUrl:
        "https://images.unsplash.com/photo-1587588147779-1100234a49c6?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Luxury Silk Pyjamas",
      price: "$150",
      imageUrl:
        "https://images.unsplash.com/photo-1549298319-f9c9b1f7e1b0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50 rounded-lg m-4 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Trending Now
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trendingProducts.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/300x400/CCCCCC/333333?text=Image+Unavailable`;
              }}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-1 text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-700 font-medium">{product.price}</p>
              <button className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
//Mid page
const MidPagePromo = () => {
  return (
    <section
      className="relative h-[400px] md:h-[550px] bg-cover bg-center flex items-center justify-center text-white rounded-lg m-4 shadow-xl overflow-hidden"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      {" "}
      {/* New, more dynamic image for mid-page promo */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>{" "}
      {/* Increased opacity for text contrast */}
      <div className="relative z-10 text-center p-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg text-white"
        >
          Beyond Fashion, It's a Statement.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 opacity-90 text-white"
        >
          Discover pieces that reflect your individuality and elevate your
          presence.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-10 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Explore Our Story
        </motion.button>
      </div>
    </section>
  );
};

// Promotions Section Component
const PromotionsSection = () => {
  const promotions = [
    {
      title: "Summer Collection",
      description: "Lightweight fabrics and vibrant colors for the season.",
      imageUrl:
        "https://images.unsplash.com/photo-1529139574466-a3d68e639197?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Exclusive Offers",
      description:
        "Sign up for our newsletter and get 15% off your first order.",
      imageUrl:
        "https://images.unsplash.com/photo-1558769132-cb1171b34b67?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Sustainable Styles",
      description: "Fashion that cares. Explore our eco-friendly range.",
      imageUrl:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white rounded-lg m-4 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Current Promotions & Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {promotions.map((promo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src={promo.imageUrl}
              alt={promo.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/CCCCCC/333333?text=Image+Unavailable`;
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {promo.title}
              </h3>
              <p className="text-gray-700 mb-4">{promo.description}</p>
              <a
                href={promo.link}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition duration-300"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



export default Home;

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="relative w-full h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-6" 
        style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white max-w-3xl">
          <h1 className="text-5xl font-extrabold tracking-wide">KeshavVastram</h1>
          <p className="mt-4 text-lg md:text-xl">Crafting Timeless Style, One Tee at a Time</p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          At KeshavVastram, we believe fashion should be more than just clothing – it should be an expression of individuality.
          Our journey began with a vision to redefine comfort and style with premium-quality T-shirts designed for trendsetters.
        </p>
      </motion.section>
      
      {/* Key Features */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">Why Choose Us?</h2>
        <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Premium Fabrics", text: "Crafted from the finest materials for unmatched comfort." },
            { title: "Unique Designs", text: "Fashion-forward styles to keep you ahead of the trend." },
            { title: "Eco-Friendly", text: "Sustainable processes with a commitment to the environment." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">What Our Customers Say</h2>
        <div className="mt-8 max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg italic text-gray-700">“KeshavVastram T-shirts are the perfect blend of style and comfort. I love the fit and quality!”</p>
          <p className="mt-4 text-gray-900 font-semibold">- Happy Customer</p>
        </div>
      </motion.section>
      
      {/* CTA */}
      <div className="text-center py-12">
        <motion.a 
          href="/shop"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition">
          Explore Our Collection
        </motion.a>
      </div>
    </div>
  );
};

export default AboutPage;

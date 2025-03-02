import { motion } from "framer-motion";

const fashionItems = [
  { id: 1, name: "", img: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-red-moon-rider-graphic-printed-oversized-t-shirt-502017-1737092523-1.jpg&w=3840&q=75" },
  { id: 2, name: "", img: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-white-wander-geometry-graphic-printed-oversized-t-shirt-519178-1737724076-1.jpg&w=3840&q=75" },
  { id: 3, name: "", img: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-brown-fire-and-blood-graphic-printed-t-shirt-642530-1738831735-1.jpg&w=3840&q=75" },
  { id: 4, name: "", img: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-hangin-astronaut-graphic-printed-oversized-t-shirt-504166-1731501888-1.jpg&w=3840&q=75" },
  { id: 5, name: "", img: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-green-yeah-whatever-graphic-printed-t-shirt-646659-1732021547-1.jpg&w=3840&q=75" },
  { id: 6, name: "", img: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-green-frenimies-forever-graphic-printed-oversized-t-shirt-662700-1739524850-1.jpg&w=3840&q=75" },
];

// Duplicate for seamless effect
const items = [...fashionItems, ...fashionItems];

const ScrollingCarousel = () => {
  return (
    <div className="overflow-hidden w-full bg-white py-6">
        <h2 class='font-serif text-4xl text-center mb-20'>Some of Our Product</h2>
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }} // Move smoothly from 0% to -50%
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Adjust speed
          ease: "linear",
        }}
        style={{ width: "max-content" }} // Removes unwanted gaps
      >
        {items.map((item, index) => (
          <div key={index} className="w-[calc(100vw/3)] flex-shrink-0 px-2 flex flex-col items-center">
            <img src={item.img} alt={item.name} className="w-80 h-auto rounded-lg shadow-lg" />
            <p className="mt-2 font-semibold text-lg">{item.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingCarousel;

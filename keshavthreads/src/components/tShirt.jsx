import React from "react";
import { FaHeart } from "react-icons/fa";

const tshirts = [
  {
    id: 1, 
    name: "Classic Black Tee",
    price: "Rs 1400",
    image: "https://theclassictshirt.com/cdn/shop/files/DSC00834.png?v=1716713712&width=700",
    hoverImage: "https://theclassictshirt.com/cdn/shop/files/DSC00850.png?v=1716713712&width=700",
    description: "A comfortable black T-shirt for all occasions. Made from 100% cotton, it offers a relaxed fit and is perfect for casual wear."
  },
  {
    id: 2,
    name: "White Cotton Tee",
    price: "Rs 2100",
    image: "https://theclassictshirt.com/cdn/shop/files/DSC02430.png?v=1716746420&width=700",
    hoverImage: "https://theclassictshirt.com/cdn/shop/files/DSC02433.png?v=1716746420&width=700",
    description: "Soft and breathable white cotton T-shirt. Lightweight and perfect for summer days, it keeps you cool and stylish."
  },
  {
    id: 3,
    name: "Graphic Print Tee",
    price: "Rs 1500",
    image: "https://theclassictshirt.com/cdn/shop/files/DSC02553.png?v=1716747656&width=700",
    hoverImage: "https://theclassictshirt.com/cdn/shop/files/DSC02558.png?v=1716747656&width=700",
    description: "Trendy T-shirt with a unique graphic print. A perfect blend of fashion and comfort, making it a must-have for your wardrobe."
  },
  {
    id: 4,
    name: "Anime Print Tee",
    price: "Rs 1500",
    image: "https://images.bewakoof.com/t1080/men-s-bird-egg-green-naruto-graphic-printed-oversized-t-shirt-647095-1724145006-1.jpg",
    hoverImage: "https://images.bewakoof.com/t1080/men-s-bird-egg-green-naruto-graphic-printed-oversized-t-shirt-647095-1724145018-4.jpg",
    description: "Trendy T-shirt with a unique graphic print. A perfect blend of fashion and comfort, making it a must-have for your wardrobe."
  },
  {
    id: 5,
    name: "Cartoon Print Tee",
    price: "Rs 1500",
    image: "https://images.bewakoof.com/t1080/women-s-red-thug-jerry-graphic-printed-boyfriend-t-shirt-624128-1739169799-1.jpg",
    hoverImage: "https://images.bewakoof.com/t1080/women-s-red-thug-jerry-graphic-printed-boyfriend-t-shirt-624128-1739169807-3.jpg",
    description: "Trendy T-shirt with a unique graphic print. A perfect blend of fashion and comfort, making it a must-have for your wardrobe."
  },
  {
    id: 6,
    name: "The Latest Print Tee",
    price: "Rs 2500",
    image: "https://images.bewakoof.com/t1080/men-s-black-warriors-graphic-printed-oversized-t-shirt-519149-1679048419-3.jpg",
    hoverImage: "https://images.bewakoof.com/t1080/men-s-black-warriors-graphic-printed-oversized-t-shirt-519149-1728641249-1.jpg",
    description: "Trendy T-shirt with a unique graphic print. A perfect blend of fashion and comfort, making it a must-have for your wardrobe."
  }
];

const TShirtCard = ({ tshirt }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow h-auto flex flex-col justify-between overflow-hidden relative">
      <div className="relative w-full h-70">
        <img 
          src={tshirt.image} 
          alt={tshirt.name} 
          className="w-full h-full object-cover rounded-md transition-opacity duration-300 hover:opacity-0"
        />
        <img 
          src={tshirt.hoverImage} 
          alt={tshirt.name} 
          className="w-full h-full object-cover rounded-md absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
        />
      </div>
      <div className="p-2 flex-grow">
        <h2 className="text-lg font-semibold mt-2 whitespace-nowrap overflow-hidden text-ellipsis">{tshirt.name}</h2>
        <p className="text-gray-600 text-sm overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{tshirt.description}</p>
      </div>
      <div className="flex items-center mt-2">
      <span className="text-xl font-bold line-through text-gray-500">Rs 5000</span>
<span className=" ml-2 text-xl font-bold">{tshirt.price}</span>

        {/* <div className="flex space-x-2">
          <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Add to Cart</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Buy Now</button>
        </div> */}
      </div>
      <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:text-red-500 transition-colors">
          <FaHeart size={22} />
        </button>
    </div>
  );
};

const TShirtGrid = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 font-serif text-center">Best Selling</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tshirts.map((tshirt) => (
          <TShirtCard key={tshirt.id} tshirt={tshirt} />
        ))}
      </div>
    </div>
  );
};

export default TShirtGrid;

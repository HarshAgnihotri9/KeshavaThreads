import { useState } from "react";

const productData = {
  product: {
    brand: "Keshav Vastram",
    name: "Men's Blue Rider Vroom Panda Graphic Printed T-shirt",
    price: {
      original: 1099,
      discounted: 449,
      discount_percentage: 59
    },
    purchase_stats: {
      recent_purchases: 91,
      days: 7
    },
    features: ["BUY 2 FOR 799", "100% COTTON"],
    colors: [
      {
        name: "Navy Blue",
        hex: "#1A2530"
      },
      {
        name: "White",
        hex: "#FFFFFF"
      }
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    ratings: {
      stars: 4.7,
      reviews_count: 120
    },
    images: {
      main: "https://images.bewakoof.com/t1080/men-s-blue-rider-vroom-panda-t-shirt-387282-1655748080-2.jpg",
      thumbnails: [
        "https://images.bewakoof.com/t1080/men-s-blue-rider-vroom-panda-t-shirt-387282-1655748085-3.jpg",
        "https://images.bewakoof.com/t1080/men-s-blue-rider-vroom-panda-t-shirt-387282-1655748101-6.jpg",
        "https://images.bewakoof.com/t1080/men-s-blue-rider-vroom-panda-t-shirt-387282-1655748090-4.jpg",
        "https://images.bewakoof.com/t1080/men-s-blue-rider-vroom-panda-t-shirt-387282-1655748095-5.jpg",
        "https://images.bewakoof.com/t1080/men-s-blue-rider-vroom-panda-t-shirt-387282-1655748080-2.jpg"
      ]
    }
  }
};

export default function ProductPage() {
  const { product } = productData;
  const [selectedImage, setSelectedImage] = useState(product.images.main);
  
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row md:justify-center mt-20 gap-3">
      {/* Left: Product Images */}
      <div className="flex-row gap-5 mt-4">
          {product.images.thumbnails.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover cursor-pointer rounded border"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      <div className="flex flex-row items-center md:items-start ">
        <div className="w-96 h-full">
          <img src={selectedImage} alt="Product" className="w-full h-full object-cover rounded-lg" />
        </div>
       
      </div>

      {/* Right: Product Details */}
      <div className="ml-10 flex flex-col space-y-4">
        <h2 className="text-xl font-bold">{product.brand}</h2>
        <p className="text-lg">{product.name}</p>

        {/* Price Section */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold">₹{product.price.discounted}</span>
          <span className="text-gray-500 line-through">₹{product.price.original}</span>
          <span className="text-green-600 font-semibold">{product.price.discount_percentage}% OFF</span>
        </div>

        <p className="text-blue-600">
          🛒 {product.purchase_stats.recent_purchases} people bought this in the last {product.purchase_stats.days} days
        </p>

        {/* Features */}
        <div className="flex gap-2">
          {product.features.map((feature, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 rounded text-sm">{feature}</span>
          ))}
        </div>

        {/* Color Options */}
        <div>
          <h3 className="text-md font-semibold">Colour Options:</h3>
          <div className="flex gap-3 mt-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border-2 cursor-pointer"
                style={{ backgroundColor: color.hex }}
              ></div>
            ))}
          </div>
        </div>

        {/* Size Options */}
        <div>
          <h3 className="text-md font-semibold">Select Size</h3>
          <div className="flex gap-2 mt-2">
            {product.sizes.map((size, index) => (
              <button key={index} className="border px-4 py-2 rounded text-sm hover:bg-gray-200">{size}</button>
            ))}
          </div>
        </div>

        {/* Ratings and Reviews */}
        <div className="flex items-center">
          <span className="text-yellow-500 text-lg">⭐ {product.ratings.stars}</span>
          <span className="text-blue-500 ml-2 cursor-pointer">{product.ratings.reviews_count} Reviews</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded flex items-center gap-2">
            🛍️ ADD TO BAG
          </button>
          <button className="border px-6 py-3 rounded flex items-center gap-2">
            ❤️ WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
}

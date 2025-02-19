import React from "react";

const SummerCollection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-10 py-20 bg-white">
      {/* Left Text Section */}
      <div className="max-w-lg text-left">
        <h1 className="text-5xl font-bold text-gray-900">
          Summer styles are finally here
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn't care if you live or die.
        </p>
      </div>

      {/* Right Image Collage */}
      <div className="grid grid-cols-3 gap-4 mt-10 lg:mt-16">
        {/* First Column */}
        <div className="flex flex-col gap-4">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Dresses-women-1736156063.jpg"
            alt="Fashion 1"
            className="rounded-xl object-cover w-full h-[400px]"
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-1735908017.jpg"
            alt="Fashion 2"
            className="rounded-xl object-cover w-full h-[300px]"
          />
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-4">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Boyfriend-Tee-Trending-Category-Icon--1--1736168508.jpg"
            alt="Fashion 3"
            className="rounded-xl object-cover w-full h-[300px]"
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Jackets-women-1735907987.jpg"
            alt="Fashion 4"
            className="rounded-xl object-cover w-full h-[400px]"
          />
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-4">
          <img
            src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-white-mood-of-the-day-panda-graphic-printed-oversized-t-shirt-519193-1709215078-1.jpg&w=3840&q=75"
            alt="Fashion 5"
            className="rounded-xl object-cover w-full h-[250px]"
          />
          <img
            src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fwomen-s-green-oversized-t-shirt-502793-1737092540-1.jpg&w=3840&q=75"
            alt="Fashion 6"
            className="rounded-xl object-cover w-full h-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default SummerCollection;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Technology",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const MainPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 23, minutes: 59, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar (Hidden on Small Screens) */}
      <aside className="hidden md:block w-1/5 bg-white p-6 border-r">
        <ul className="space-y-4">
          {categories.map((category, index) => (
            <li key={index} className="text-lg font-medium text-gray-700 hover:text-black cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 flex flex-col items-center">
        {/* Banner */}
        <div className="relative w-full bg-black text-white rounded-xl overflow-hidden p-10 flex flex-col items-center md:flex-row justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">T shirt of your own style</h2>
            <p className="text-xl mt-2">Up to 10% off Voucher</p>
            <button className="mt-4 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
              Shop Now →
            </button>
          </div>
          <img src="/boy.png" alt="iPhone 14" className="w-2/3 md:w-1/2" />
        </div>

        {/* Flash Sales Timer */}
        <div className="mt-8 text-center w-full bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Flash Sales</h3>
          <div className="mt-2 flex justify-center space-x-4 text-xl font-semibold text-red-500">
            <span>{timeLeft.days} Days</span>
            <span>{timeLeft.hours} Hours</span>
            <span>{timeLeft.minutes} Minutes</span>
            <span>{timeLeft.seconds} Seconds</span>
          </div>
        </div>
      </main>

      {/* Navigation Arrows */}
      <div className="hidden md:flex absolute bottom-8 right-8 space-x-4">
        <button className="rounded-full p-2 border border-gray-400 hover:bg-gray-200 transition">
          <ChevronLeft />
        </button>
        <button className="rounded-full p-2 border border-gray-400 hover:bg-gray-200 transition">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MainPage;

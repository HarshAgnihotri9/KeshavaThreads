import React, { useState, useEffect } from "react";
import TShirtGrid from "./tShirt";
import KeshavVastramGallery from "./KeshavVastramGallery";
import SummerCollection from "./SummerCollection";
import ScrollingCarousel from "./ScrollingCorousel";

const MainPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 23, minutes: 59, seconds: 30 });
  const [isTall, setIsTall] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTall(window.innerHeight >= 700);
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <>
      <div className="flex flex-col md:flex-row bg-white mt-20">
        {/* Sidebar - Hidden on Small Screens */}
        <aside className="hidden md:flex flex-col w-1/5 bg-white p-6 border-r justify-between items-center">
          <ul className="space-y-4">
            {["Graphic Tees", "Plain Tees", "Oversized Tees", "V-Neck Tees", "Polo Shirts", "Long Sleeve Tees", "Henley Tees", "Sleeveless Tees", "Athletic Tees"].map((category, index) => (
              <li key={index} className="text-lg font-medium text-gray-700 cursor-pointer transform transition-all duration-300 ease-in-out hover:text-black hover:translate-x-10 hover:underline">
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center">
          {/* Banner */}
          <div className="relative w-full h-auto md:h-96 bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-0 rounded-xl overflow-hidden">
            {/* Banner Text */}
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold">T-Shirts of Your Own Style</h2>
              <p className="text-lg md:text-2xl font-medium">Up to 10% Off Voucher</p>
              <button className="mt-4 px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
                Shop Now →
              </button>
            </div>

            {/* Banner Image */}
            <img 
              src="/girl3.png" 
              alt="T-shirt Model" 
              className="w-2/3 md:w-1/2 max-w-xs md:max-w-lg transition-transform duration-300 ease-in-out"
            />
          </div>
        </main>
      </div>
      <section>
    <div
      className={`flex flex-col items-start space-y-0 sm:space-y-0 p-0 ml-0 sm:pl-20  mt-10 ${isTall ? 'pl-0' : ''}`}
    >
    {/* Today's Flash Sales Header */}
    <div className="flex items-center space-x-2">
      <div className="bg-red-500 w-6 h-8 rounded"></div>
      <span className="bg-blue-200 text-red-500 font-bold px-2 py-1 rounded">Today's</span>
    </div>

    {/* Flash Sales Title */}
    <h2 className="text-3xl font-bold sm:text-2xl md:text-3xl">Flash Sales</h2>

    {/* Countdown Timer */}
    <div className="flex flex-wrap space-x-0 text-lg font-semibold justify-center md:space-x-0 sm:flex-row sm:space-x-0 sm:space-y-0 ">
      <div className="flex flex-col items-center mb-0 md:mb-0 sm:flex-row sm:items-center sm:mb-0">
        <span className="text-black text-3xl">{timeLeft.days}</span>
        <span className="text-gray-500 sm:ml-2">Days</span>
      </div>
      <span className="text-red-500 text-3xl sm:px-2 md:px-4">:</span>
      <div className="flex flex-col items-center mb-0 md:mb-0 sm:flex-row sm:items-center sm:mb-0">
        <span className="text-black text-3xl">{timeLeft.hours}</span>
        <span className="text-gray-500 sm:ml-2">Hours</span>
      </div>
      <span className="text-red-500 text-3xl sm:px-2 md:px-4">:</span>
      <div className="flex flex-col items-center mb-0 md:mb-0 sm:flex-row sm:items-center sm:mb-0">
        <span className="text-black text-3xl">{timeLeft.minutes}</span>
        <span className="text-gray-500 sm:ml-2">Minutes</span>
      </div>
      <span className="text-red-500 text-3xl sm:px-2 md:px-4">:</span>
      <div className="flex flex-col items-center sm:flex-row sm:items-center">
        <span className="text-black text-3xl">{timeLeft.seconds}</span>
        <span className="text-gray-500 sm:ml-2">Seconds</span>
      </div>
    </div>
  </div>
</section>

      {/* Other Sections */}
      <TShirtGrid />
      <KeshavVastramGallery />
      <SummerCollection />
      <ScrollingCarousel />
    </>
  );
};

export default MainPage;

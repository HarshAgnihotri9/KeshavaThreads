export default function KeshavVastramGallery() {
    return (
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="relative w-full md:w-1/2 h-full overflow-hidden">
          <img 
            src="https://images.bewakoof.com/t1080/men-s-black-goosebumps-graphic-printed-oversized-t-shirt-564612-1739174362-1.jpg" 
            alt="Left Image" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute bottom-10 left-10 bg-white bg-opacity-75 px-6 py-3 rounded-lg shadow-lg">
            <p className="text-black text-xl font-bold">Exclusive Collection</p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 h-full overflow-hidden">
          <img 
            src="https://images.bewakoof.com/t1080/men-s-blue-rider-vroom-panda-graphic-printed-t-shirt-387282-1738831748-1.jpg" 
            alt="Right Image" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute bottom-10 left-10 bg-white bg-opacity-75 px-6 py-3 rounded-lg shadow-lg">
            <p className="text-black text-xl font-bold">New Arrivals</p>
          </div>
        </div>
      </div>
    );
  }
  
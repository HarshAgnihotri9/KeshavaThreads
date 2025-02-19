export default function KeshavVastramBanner() {
    return (
      <div className="relative w-full h-[180px] md:h-[220px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white shadow-lg overflow-hidden">
        <img 
          src="/images/banner.jpg" 
          alt="Keshav Vastram Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm" 
        />
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide uppercase drop-shadow-lg">Keshav Vastram</h1>
          <p className="mt-2 md:mt-3 text-base md:text-lg font-light italic text-gray-300 drop-shadow-md">
            Elevate Your Wardrobe with Timeless Elegance
          </p>
        </div>
      </div>
    );
  }
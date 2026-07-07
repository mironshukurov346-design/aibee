import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";

export default function Sec1() {
  const [selectedIndex, setSelectedIndex] = useState(null);

const products = [
  { img: "/public/honey.png", alt: "product 19" },
  { img: "/public/honey1.png", alt: "product 10" },
  { img: "/public/honey2.png", alt: "product 17" },
  { img: "/public/honey3.png", alt: "product 08" },
  { img: "/public/honey4.png", alt: "product 05" },
];
  const showNext = useCallback(() => {
    setSelectedIndex((prev) => (prev < products.length - 1 ? prev + 1 : prev));
  }, [products.length]);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  const handleBuyClick = (index) => {
    setSelectedIndex(index);
    // bu yerga buyurtma / checkout logikasi qo'shiladi
  };

  return (
    <div className="pb-20 relative">
      <div className="text-center my-14">
        <h1 className="font-serif text-2xl md:text-3xl text-gray-800 mb-3">
          What Do You Want To Create Today?
        </h1>

        <p className="font-sans text-3xl md:text-4xl font-bold text-black">
          Design Your Own...
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-10 px-4 justify-items-center">
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer transition-transform duration-300 hover:scale-105 w-full min-w-0 max-w-[160px] sm:max-w-[180px] md:max-w-[220px] [&>*]:w-full [&_img]:w-full [&_img]:h-auto [&_img]:max-w-full"
          >
            <ProductCard
              img={product.img}
              alt={product.alt}
              onBuyClick={() => handleBuyClick(index)}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md px-2"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-8 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            onClick={() => setSelectedIndex(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {selectedIndex > 0 && (
            <button
              className="absolute left-1 sm:left-2 md:left-8 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div
            className="inline-flex flex-col items-stretch gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={products[selectedIndex].img}
              alt={products[selectedIndex].alt}
              className="w-auto max-w-[92vw] sm:max-w-[85vw] md:max-w-[400px] max-h-[70vh] object-contain rounded-md shadow-2xl animate-in zoom-in duration-300"
            />

            <button
              onClick={() => {
              
              }}
              className="w-full bg-[#FFD82F] cursor-pointer text-black py-2.5 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-gray-800 hover:text-white transition-colors duration-300"
            >
              buy
            </button>
          </div>

          {selectedIndex < products.length - 1 && (
            <button
              className="absolute right-1 sm:right-2 md:right-8 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
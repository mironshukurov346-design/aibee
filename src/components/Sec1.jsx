import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";

export default function Sec1() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const products = [
    { img: "https://aibee.live/wp-content/uploads/2023/10/19-1-303x500.webp", alt: "product 19" },
    { img: "https://aibee.live/wp-content/uploads/2023/10/10-1-303x500.webp", alt: "product 10" },
    { img: "https://aibee.live/wp-content/uploads/2023/10/17-1-303x500.webp", alt: "product 17" },
    { img: "https://aibee.live/wp-content/uploads/2023/10/08-1-303x500.jpg", alt: "product 08" },
    { img: "https://aibee.live/wp-content/uploads/2023/10/05-1-303x500.jpg", alt: "product 05" },
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

      <div className="flex justify-center gap-10 flex-wrap px-4">
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <ProductCard img={product.img} alt={product.alt} />
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

          <img
            src={products[selectedIndex].img}
            alt={products[selectedIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="w-auto max-w-[92vw] sm:max-w-[85vw] md:max-w-[90vw] max-h-[85vh] object-contain rounded-md shadow-2xl animate-in zoom-in duration-300"
          />

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
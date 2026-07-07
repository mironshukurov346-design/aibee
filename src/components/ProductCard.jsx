export default function ProductCard({ img, alt, onBuyClick }) {
  return (
    <div className="w-[200px] p-1 bg-white border border-[#E5E7EB] rounded-sm overflow-hidden font-sans shadow-sm">
      <div className="w-full h-[330px] bg-[#F7F7F7] rounded-sm flex items-center justify-center p-4">
        <img
          src={img}
          alt={alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onBuyClick?.();
        }}
        className="w-full mt-2 mb-1 bg-[#FFD82F] cursor-pointer text-black py-2.5 rounded-full font-bold text-[10px] tracking-widest uppercase transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        buy
      </button>
    </div>
  );
}
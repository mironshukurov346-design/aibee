export default function ProductCard({ img, alt }) {
  return (
    <div className="w-[200px] p-1 bg-white border border-[#E5E7EB] rounded-sm overflow-hidden font-sans shadow-sm">
      <div className="w-full h-[330px] bg-[#F7F7F7] rounded-sm flex items-center justify-center p-4">
        <img
          src={img}
          alt={alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}

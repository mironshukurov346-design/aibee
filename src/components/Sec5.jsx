import { Dot } from "lucide-react";

export default function Sec5() {
  return (
    <div>
      <div className="flex flex-col items-center py-20 px-8 max-w-[1300px] mx-auto w-full">
        <h3 className="text-2xl font-serif italic mb-2 text-gray-800">
          From The Blog
        </h3>
        <h2 className="text-[2.5rem] font-bold mb-12 text-black">
          Our Latest Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-b pb-22">
          <div className="flex flex-col items-start">
            <img
              src="public/post3.jpg"
              alt="Organic Social Media Marketing"
              className="w-full aspect-[16/9] object-cover rounded-md mb-5"
            />
            <div className="flex items-center text-[11px] font-bold text-black tracking-wider uppercase mb-3">
              <p>06/16/2026</p>
              <Dot size={18} className="mx-0.5 text-black" />
              <p>K AIBEE</p>
            </div>
            <h4 className="text-lg font-bold text-black mb-3 leading-snug line-clamp-2">
              Organic Social Media Marketing For Small...
            </h4>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-5 line-clamp-3">
              The cost of paid customer acquisition continues to rise year after
              year. As a result,...
            </p>
            <a
              href="#"
              className="text-[12px] font-bold text-black uppercase underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors"
            >
              ЧИТАТЬ ДАЛЕЕ
            </a>
          </div>

          <div className="flex flex-col items-start">
            <img
              src="public/post2.jpg"
              alt="Businesses Moving Away From AI"
              className="w-full aspect-[16/9] object-cover rounded-md mb-5"
            />
            <div className="flex items-center text-[11px] font-bold text-black tracking-wider uppercase mb-3">
              <p>04/19/2026</p>
              <Dot size={18} className="mx-0.5 text-black" />
              <p>K AIBEE</p>
            </div>
            <h4 className="text-lg font-bold text-black mb-3 leading-snug line-clamp-2">
              Why Businesses Are Moving Away From AI...
            </h4>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-5 line-clamp-3">
              In 2025–2026, artificial intelligence has become an essential part
              of marketing. Almost every company —...
            </p>
            <a
              href="#"
              className="text-[12px] font-bold text-black uppercase underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors"
            >
              ЧИТАТЬ ДАЛЕЕ
            </a>
          </div>

          <div className="flex flex-col items-start">
            <img
              src="public/post1.jpg"
              alt="AI In Personalized Marketing"
              className="w-full aspect-[16/9] object-cover rounded-md mb-5"
            />
            <div className="flex items-center text-[11px] font-bold text-black tracking-wider uppercase mb-3">
              <p>04/11/2026</p>
              <Dot size={18} className="mx-0.5 text-black" />
              <p>K AIBEE</p>
            </div>
            <h4 className="text-lg font-bold text-black mb-3 leading-snug line-clamp-2">
              AI In Personalized Marketing: How Artificial...
            </h4>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-5 line-clamp-3">
              Personalized marketing is one of the most powerful tools for
              increasing sales and customer loyalty....
            </p>
            <a
              href="#"
              className="text-[12px] font-bold text-black uppercase underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors"
            >
              ЧИТАТЬ ДАЛЕЕ
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[url('public/images2.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-[160px] py-16 flex flex-col items-center justify-center">
        <h1>Winning Ad Templates</h1>
      </div>
    </div>
  );
}
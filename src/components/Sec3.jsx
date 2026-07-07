export default function Sec3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-5 md:py-20 md:px-40 gap-10 items-center">
      <div>
        <img
          src="public/image_improved.png"
          alt="Advertisement template"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="text-xl md:text-2xl font-serif italic mb-2 text-gray-800">
          What Is Proposed?
        </h3>

        <h2 className="text-2xl md:text-[2.5rem] leading-[1.2] font-bold mb-6 text-black">
          Generate Your Advertisement
          <br className="hidden md:inline" />
          From A Template In Seconds
          <br className="hidden md:inline" />
          Using The Power Of AI
        </h2>

        <p className="text-gray-500 mb-10 text-[15px] leading-relaxed pr-0 md:pr-8">
          Create conversion-focused ad creatives in seconds with AI. Create your
          own from provided templates without hiring additional designers.
          Everything is created in seconds with just a few clicks.
        </p>

        <div className="flex flex-col md:flex-row gap-5 md:gap-8 mb-10 pr-0 md:pr-8 w-full">
          <div className="flex flex-col flex-1">
            <h4 className="font-bold text-black mb-2">Customizable Outputs</h4>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              You get the result you want and with your data.
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <h4 className="font-bold text-black mb-2">Any Ad Asset</h4>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Choose the advertising material you need from our entire
              collection and use it.
            </p>
          </div>
        </div>

        <button className="px-8 cursor-pointer py-3 rounded-full bg-[#fdd03b] hover:bg-[#e6bb34] transition-colors font-semibold flex items-center gap-2 text-black text-sm tracking-wide w-full md:w-auto justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          SHOP
        </button>
      </div>
    </div>
  );
}

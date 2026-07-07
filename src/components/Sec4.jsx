export default function Sec4() {
  return (
    <div className="bg-[url('public/images2.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-[632px] py-16 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-serif italic mb-2 text-gray-800 text-center">
        Our Testimonials
      </h3>

      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center tracking-tight">
        Our Client's Feedback
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 md:px-40 max-w-[1400px] w-full">
        <div className="bg-white p-6 md:p-10 rounded-[4px] flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 shadow-sm text-center md:text-left">
          <img
            src="public/author-1.webp"
            alt="Lawrence L. Nones"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover flex-shrink-0 bg-gray-100 mx-auto md:mx-0"
          />
          <div className="flex flex-col justify-center">
            <h4 className="text-[17px] font-bold text-black mb-3 leading-snug">
              “Reliable Product, Consistently Delivers.”
            </h4>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
              This tool provides an easy way to create your own collage with
              professional-looking text, and the results look like they were
              edited in a studio.
            </p>
            <p className="font-bold text-black text-[14px]">
              Lawrence L. Nones
            </p>
          </div>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-[4px] flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 shadow-sm text-center md:text-left">
          <img
            src="public/author-2.webp"
            alt="Augusta Wind"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover flex-shrink-0 bg-gray-100 mx-auto md:mx-0"
          />
          <div className="flex flex-col justify-center">
            <h4 className="text-[17px] font-bold text-black mb-3 leading-snug">
              “Excellent Product, A+ Customer Service.”
            </h4>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
              AiBee uses a template-based approach to collage creation, and the
              best part is, you don't have to be a professional graphic designer
              to create images that look "professional."
            </p>
            <p className="font-bold text-black text-[14px]">Augusta Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}
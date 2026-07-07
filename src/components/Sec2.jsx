import Whychoosecard from "./Whychoosecard";

  export default function Sec2() {
    return (
      <div className="bg-[url('/why-choose-1.webp')] bg-cover bg-center bg-no-repeat w-full min-h-[832px] py-16 md:py-0 md:h-[832px] flex flex-col items-center justify-center gap-10 md:gap-15">
        <h1 className="font-sans text-3xl md:text-4xl font-bold text-black text-center px-4">
          Why Choose AiBee?
        </h1>
        <div>
          <Whychoosecard />
        </div>
      </div>
    );
  }
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaHome, FaBullhorn, FaBookmark } from "react-icons/fa";
import Hero from "./Hero";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-[url('/MainBanner.png')] bg-cover bg-center bg-no-repeat w-full px-4 sm:px-8 pt-6 pb-16 h-auto sm:h-207">
      <nav className="max-w-6xl mx-auto flex items-center justify-between bg-white rounded-full shadow-md px-6 sm:px-8 py-3 relative">
        <a href="/">
          <img src="/logo.png" alt="aiboo logo" className="h-8 w-auto" />
        </a>

        <ul className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-800">
          <li>
            <a
              href="/"
              className="flex items-center gap-1.5 hover:text-yellow-600 transition-colors"
            >
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a
              href="/collection"
              className="font-semibold text-black hover:text-yellow-600 transition-colors"
            >
              Collection
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="flex items-center gap-1.5 hover:text-yellow-600 transition-colors"
            >
              <FaBullhorn />
              Blog
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="flex items-center gap-1.5 hover:text-yellow-600 transition-colors"
            >
              <FaBookmark />
              About Us
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-black"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {isOpen && (
          <ul className="sm:hidden absolute top-full left-0 mt-3 w-full bg-white rounded-2xl shadow-md flex flex-col items-start gap-4 p-6 text-sm font-medium text-gray-800 z-50">
            <li>
              <a
                href="/"
                className="flex items-center gap-1.5 hover:text-yellow-600 transition-colors"
              >
                <FaHome />
                Home
              </a>
            </li>
            <li>
              <a
                href="/collection"
                className="font-semibold text-black hover:text-yellow-600 transition-colors"
              >
                Collection
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="flex items-center gap-1.5 hover:text-yellow-600 transition-colors"
              >
                <FaBullhorn />
                Blog
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="flex items-center gap-1.5 hover:text-yellow-600 transition-colors"
              >
                <FaBookmark />
                About Us
              </a>
            </li>
          </ul>
        )}
      </nav>

      <Hero />
    </div>
  );
}
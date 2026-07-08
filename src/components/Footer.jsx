import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-[#555555] font-sans pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <div className="flex flex-col gap-5">
          <h3 className="text-black font-bold text-lg">About Our Store</h3>
          <p className="text-sm leading-relaxed text-[#777777]">
            Discover premium ad templates categorized by industry, customize
            them to suit your needs, and then use them in your advertising
            campaign. High-ROI ad creatives in seconds.
          </p>
          <Link to="/">
            <img
              src="/logo.png"
              alt="aibee logo"
              className="mt-2 h-10 w-auto object-contain object-left"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-black font-bold text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href="/contact"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                Sitemap
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                FAQs
              </a>
            </li>
            <li>
              <Link to="/terms">
                <p
                  href="#"
                  className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
                >
                  Terms / Legal
                </p>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-black font-bold text-lg">Your Account</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                Product Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                Checkout
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                License Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                Affiliate
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                Locality
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                Order Tracking
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-black font-bold text-lg">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <FiMapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
              <span>
                15G Sherif Khimshiashvili St
                <br />
                Batumi 6010, Georgia
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FiPhone className="w-5 h-5 text-gray-400 shrink-0" />
              <span>(+49)-176 43438531</span>
            </li>

            <li className="flex items-center gap-3">
              <FiMail className="w-5 h-5 text-gray-400 shrink-0" />
              <a
                href="mailto:info@aibee.live"
                className="hover:text-black hover:underline decoration-black decoration-[1.5px] underline-offset-[5px] transition-all"
              >
                info@aibee.live
              </a>
            </li>
          </ul>

          <div className="flex gap-3 mt-2">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-gray-100 flex justify-center text-sm text-[#777777]">
        <p>© 2026 aibee.live</p>
      </div>
    </footer>
  );
}

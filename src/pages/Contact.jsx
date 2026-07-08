import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FaHome, FaBullhorn, FaBookmark } from 'react-icons/fa'
import { MdOutlineCollections } from 'react-icons/md'

export default function Contact({ pageTitle = 'Contact Us' }) {
  const [isOpen, setIsOpen] = useState(false)

  const contentItems = [
    {
      title: 'Передача лидов',
      text: 'Эффективная система постбэка для сбора информации о лидах, кликах и других взаимодействиях пользователей, обеспечивающая точное отслеживание и бесшовную интеграцию с другими платформами для оптимизации производительности кампании.'
    },
    {
      title: 'Передача лидов',
      text: 'Эффективная система постбэка для сбора информации о лидах, кликах и других взаимодействиях пользователей, обеспечивающая точное отслеживание и бесшовную интеграцию с другими платформами для оптимизации производительности кампании.'
    },
    {
      title: 'Передача лидов',
      text: 'Эффективная система постбэка для сбора информации о лидах, кликах и других взаимодействиях пользователей, обеспечивающая точное отслеживание и бесшовную интеграцию с другими платформами для оптимизации производительности кампании.'
    }
  ]

  return (
    <div>
      <div className='bg-[url("/bg.jpg")] bg-[length:160%] sm:bg-cover bg-[right_top] sm:bg-center bg-no-repeat w-full px-4 sm:px-8 pt-6 pb-16 sm:pb-24'>
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
                className="flex items-center gap-1.5 font-semibold text-black hover:text-yellow-600 transition-colors"
              >
                <MdOutlineCollections />
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
                  className="flex items-center gap-1.5 font-semibold text-black hover:text-yellow-600 transition-colors"
                >
                  <MdOutlineCollections />
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

        <div className="text-center mt-10 sm:mt-14">
          <p className="text-sm text-gray-800 mb-2">
            <a href="/" className="hover:text-yellow-700">Home</a> / {pageTitle}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-black">{pageTitle}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col gap-8 max-w-5xl">
          {contentItems.map((item, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-base font-bold text-gray-900 tracking-wide">
                {item.title}
              </h2>
              <p className="text-sm text-gray-800 leading-relaxed font-normal">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
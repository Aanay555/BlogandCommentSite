'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container w-full mx-auto flex justify-between items-center px-4">
      <Image src="/logo.png" 
      alt="Logo"
     width={60}
     height={60}

      />
        {/* <h1 className="text-xl font-bold">My Blog</h1> */}
        <button
          className="text-white block lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-blue-600 lg:static lg:w-auto lg:flex lg:space-y-0 space-y-4 lg:space-x-6 lg:items-center`}
        >
          <li className="text-center lg:text-left">
            <Link href="/" className="block py-2 hover:text-blue-400">
              Home
            </Link>
          </li>
          <li className="text-center lg:text-left">
            <Link href="/about" className="block py-2 hover:text-blue-400">
              About
            </Link>
          </li>
          <li className="text-center lg:text-left">
            <Link href="/contact" className="block py-2 hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
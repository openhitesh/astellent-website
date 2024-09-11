'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/Astellent-Logo.svg" 
              alt="Astellent Logo" 
              width={300} 
              height={60} 
              className="h-16 w-auto"
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              <li><Link href="/product" className="text-xl font-light hover:text-yellow-300 transition duration-300">Product</Link></li>
              <li><Link href="/ai" className="text-xl font-light hover:text-yellow-300 transition duration-300">AI</Link></li>
              <li><Link href="/cloud" className="text-xl font-light hover:text-yellow-300 transition duration-300">Cloud</Link></li>
              <li><Link href="/software" className="text-xl font-light hover:text-yellow-300 transition duration-300">Software</Link></li>
              <li><Link href="/security" className="text-xl font-light hover:text-yellow-300 transition duration-300">Security</Link></li>
              <li><Link href="/about" className="text-xl font-light hover:text-yellow-300 transition duration-300">About</Link></li>
            </ul>
          </nav>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={32} />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-6 md:hidden">
            <ul className="flex flex-col space-y-4">
              <li><Link href="/product" className="block text-xl font-light hover:text-yellow-300 transition duration-300">Product</Link></li>
              <li><Link href="/ai" className="block text-xl font-light hover:text-yellow-300 transition duration-300">AI</Link></li>
              <li><Link href="/cloud" className="block text-xl font-light hover:text-yellow-300 transition duration-300">Cloud</Link></li>
              <li><Link href="/software" className="block text-xl font-light hover:text-yellow-300 transition duration-300">Software</Link></li>
              <li><Link href="/security" className="block text-xl font-light hover:text-yellow-300 transition duration-300">Security</Link></li>
              <li><Link href="/about" className="block text-xl font-light hover:text-yellow-300 transition duration-300">About</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
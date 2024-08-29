'use client'

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Astellent</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/product" className="hover:text-yellow-300">Product</Link></li>
              <li><Link href="/ai" className="hover:text-yellow-300">AI</Link></li>
              <li><Link href="/cloud" className="hover:text-yellow-300">Cloud</Link></li>
              <li><Link href="/software" className="hover:text-yellow-300">Software</Link></li>
              <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
            </ul>
          </nav>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link href="/product" className="block hover:text-yellow-300">Product</Link></li>
              <li><Link href="/ai" className="block hover:text-yellow-300">AI</Link></li>
              <li><Link href="/cloud" className="block hover:text-yellow-300">Cloud</Link></li>
              <li><Link href="/software" className="block hover:text-yellow-300">Software</Link></li>
              <li><Link href="/about" className="block hover:text-yellow-300">About</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
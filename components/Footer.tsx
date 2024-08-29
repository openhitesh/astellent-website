import React from 'react';
import Link from 'next/link';
import { Twitter, Github, Linkedin, BookOpen, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">© 2023 ASTELLENT INC.</p>
          <div className="flex space-x-4">
            <Link href="https://twitter.com/astellent" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
            <Link href="https://github.com/astellent" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </Link>
            <Link href="https://www.linkedin.com/company/astellent/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
            <Link href="https://medium.com/@astellent" target="_blank" rel="noopener noreferrer" aria-label="Medium">
              <BookOpen size={20} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCjAAyhbrTd09aL4tPFmE3Rg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={20} />
            </Link>
            <Link href="https://www.facebook.com/astellent" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </Link>
          </div>
          <Link href="/privacy-policy" className="text-sm hover:text-yellow-300">PRIVACY POLICY</Link>
        </div>
      </div>
    </footer>
  );
}
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'Features', href: '/#features' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'About', href: '/#about' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-[#0F2C76]/95 backdrop-blur-md shadow-lg' : 'bg-[#0F2C76]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-2.5">
          <Image
            src='/logo.png'
            alt="TradeFlow Logo"
            width={1000}
            height={1000}
            className='h-10 w-10'
          />
          <span className="text-white font-bold text-xl tracking-tight">TradeFlow</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/75 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="https://play.google.com/store/apps/details?id=com.tradeflow"
            className="bg-white text-[#0F2C76] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
          >
            Download Free
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0F2C76] px-6 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/75 hover:text-white text-base font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://play.google.com/store/apps/details?id=com.tradeflow"
            className="mt-2 bg-white text-[#0F2C76] text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-blue-50 transition-colors duration-200"
          >
            Download Free
          </Link>
        </div>
      )}
    </header>
  );
}

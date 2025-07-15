'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full p-6 bg-[#0F2C76]">
      <nav className="flex flex-row justify-between items-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row gap-10">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-white text-lg hover:underline">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}> 
            {menuOpen ? (
              <XMarkIcon className="h-8 w-8 text-white cursor-pointer" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white cursor-pointer" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-white text-lg hover:underline">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

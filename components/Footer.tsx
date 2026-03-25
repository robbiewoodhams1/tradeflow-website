'use client';

import Link from 'next/link';
import TikTok from '@/assets/tiktok.svg';
import Instagram from '@/assets/instagram.svg';
import ContactForm from './contact-form';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'Features', href: '/#features' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'About', href: '/#about' },
];

const learnItems = [
  { name: 'FAQs', href: '/FAQs' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Delete Data & Account', href: '/delete' },
];

const socialLinks = [
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@tradeflow.app?_t=ZN-8zZAtZpjdos&_r=1',
    Icon: TikTok,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/tradeflow_app?igsh=MXRwcHBxaGFmN293Mg==',
    Icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A1A4A] px-8 py-16 flex flex-col items-center gap-12">
      {/* Main content row */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-12">
        {/* Nav columns */}
        <div className="flex flex-row gap-16 flex-shrink-0">
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-xs uppercase tracking-widest mb-1">
              Navigate
            </p>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/55 hover:text-white text-sm transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-xs uppercase tracking-widest mb-1">
              Legal
            </p>
            {learnItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/55 hover:text-white text-sm transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="w-full max-w-md bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#001F4D] mb-6">Contact Us</h3>
          <ContactForm />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-6xl border-t border-white/10" />

      {/* Bottom row */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-2">
          <Image
            src='/logo.png'
            alt="TradeFlow Logo"
            width={1000}
            height={1000}
            className='h-10 w-10'
          />
          <span className="text-white font-bold text-lg">TradeFlow</span>
        </Link>

        {/* Social icons */}
        <div className="flex gap-4 items-center">
          {socialLinks.map(({ name, href, Icon }) => (
            <Link key={name} href={href} aria-label={name}>
              <Icon className="w-6 h-6 fill-white/50 hover:fill-white transition-colors duration-200" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-white/40 text-sm text-center">
          <span>&copy; 2025 TradeFlow. All rights reserved.</span>
          <span className="hidden md:inline">&middot;</span>
          <a
            href="https://woodhamssoftware.com"
            className="hover:text-white/70 transition-colors duration-200"
          >
            Created by Woodhams Software
          </a>
        </div>
      </div>
    </footer>
  );
}

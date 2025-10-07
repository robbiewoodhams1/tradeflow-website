'use client';

import Link from 'next/link';
import TikTok from '@/assets/tiktok.svg';
import Instagram from '@/assets/instagram.svg';
import ContactForm from "./contact-form";


export default function Footer() {

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Features', href: '/#features' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const learnItems = [
    { name: 'FAQs', href: '/FAQs' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Delete Data & Account', href: '/delete' },
  ];



  return (
    <footer className="w-full p-10 bg-[#5F609C] flex flex-col items-center gap-20">

      <div className="w-full flex flex-col md:flex-row justify-between">
        <nav className="flex flex-row gap-20 items-start">

          <div className="flex flex-col gap-10">
            <p className="text-xl font-bold">Navigate</p>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-white text-lg hover:underline">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-10">
            <p className="text-xl font-bold">Learn</p>
            {learnItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-white text-lg hover:underline">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="w-full max-w-xl p-8 bg-white rounded-2xl shadow-md md:mt-0 mt-20">
          <h2 className="text-3xl font-bold text-[#001F4D] mb-6 text-center">Contact Us</h2>
          
          <ContactForm/>
        </div>
      </div>


      <div className="w-full flex flex-row items-center justify-center gap-10">
        {[{ name: 'TikTok', href: 'https://www.tiktok.com/@tradeflow.app?_t=ZN-8zZAtZpjdos&_r=1', Icon: TikTok },
          { name: 'Instagram', href: 'https://www.instagram.com/tradeflow_app?igsh=MXRwcHBxaGFmN293Mg==', Icon: Instagram }]
          .map(({ name, href, Icon }) => (
            <Link key={name} href={href}>
              <Icon className="w-12 h-12 fill-white hover:fill-blue-300 transition duration-300" />
            </Link>
        ))}
      </div>


      <div className="w-full flex md:flex-row flex-col justify-around items-center gap-10">
        <a 
          href="#home"
          className="text-white text-md hover:underline cursor-pointer"
        >
          <h3>&copy; 2025 TradeFlow. All rights reserved.</h3>
        </a>
        <a 
          href="https://woodhamssoftware.com"
          className="text-white text-md hover:underline cursor-pointer"
        >
          <h3>Created by Woodhams Software</h3>
        </a>
      </div>
      

    </footer>
  );
}
 
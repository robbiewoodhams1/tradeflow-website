'use client';

import { useState } from "react";
import Link from 'next/link';
import TikTok from '@/assets/tiktok.svg';
import Instagram from '@/assets/instagram.svg';



export default function Footer() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

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
          {/* Desktop Nav */}
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
          
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#0F2C76]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-[#0F2C76] focus:border-[#0F2C76] placeholder-gray-400 text-black"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#0F2C76]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-[#0F2C76] focus:border-[#0F2C76 placeholder-gray-400 text-black]"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#0F2C76]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-[#0F2C76] focus:border-[#0F2C76] placeholder-gray-400 text-black"
                placeholder="Write your message..."
                required
              />
            </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#0F2C76] font-semibold py-3 rounded-full hover:bg-blue-900 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-700 text-center mt-2">
              Your message has been sent!
            </p>
          )}
          </form>
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
 
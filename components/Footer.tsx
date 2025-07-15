'use client';

import Link from 'next/link';

export default function Footer() {

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

    const learnItems = [
    { name: 'FAQs', href: '/FAQs' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Delete Data & Account', href: '/delete' },
  ];

  return (
    <footer className="w-full p-10 bg-[#0F2C76] flex flex-col items-center gap-20">

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
          
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#001F4D] text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      <div className="w-full flex md:flex-row flex-col justify-around items-center gap-10">
        <a 
          href="/signin"
          className="text-white text-md hover:underline cursor-pointer"
        >
          <h3>&copy; 2025 ClassFlow. All rights reserved.</h3>
        </a>
        <a 
          href="/signin"
          className="text-white text-md hover:underline cursor-pointer"
        >
          <h3>Created by Woodhams Software</h3>
        </a>
      </div>
      

    </footer>
  );
}
 
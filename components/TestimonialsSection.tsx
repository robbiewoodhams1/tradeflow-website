import TestimonialCard from "./TestimonialCard";
import Image1 from '@/public/splash/Bricklayer-rafiki.png';
import Image2 from '@/public/splash/Prototyping process-rafiki.png';
import Image3 from '@/public/splash/Mail sent-rafiki.png';

export default function TestimonialsSection() {
  const TestimonialCards = [
    {
      name: 'Nicolas Bell',
      info: 'Mechanic',
      description:
        "TradeFlow saves me a ton of time. I can send out quotes and invoices without messing around on a laptop. It’s all there on my phone, quick and easy.",
      image: Image1,
    },
    {
      name: 'Dan Jimitsky',
      info: 'Electrician',
      description:
        "I used to dread the paperwork after a job. Now I get it sorted before I even leave the site. Customers love how professional it looks too.",
      image: Image2,
    },
    {
      name: 'Charlie Woodhams',
      info: 'Carpenter',
      description:
        "It’s made my workflow smoother. I just reuse previous quotes and update the details. No more typing the same thing out over and over.",
      image: Image3,
    },
    {
      name: 'Jamie Woodhams',
      info: 'Joiner',
      description:
        "I’ve tried a few apps, but this is the first one that actually fits how I work. Everything is straight to the point and easy to use on-site.",
      image: Image1,
    },
    {
      name: 'Ricki Mansel',
      info: 'Plumber',
      description:
        "What used to take me 15 minutes now takes 1. I can create a quote, send it, and move on to the next job. Couldn’t ask for more.",
      image: Image2,
    },
    {
      name: 'Joe Decoine',
      info: 'Mechanic',
      description:
        "I’ve got templates for different services now. It’s fast, looks professional, and means I spend less time on admin and more time in the garage.",
      image: Image3,
    },
  ];

  return (
    <div className="bg-white min-h-screen md:px-20 py-20 px-5 flex flex-col items-center gap-20">
      <h3 className="text-3xl text-[#001F4D] font-semibold text-center">What our customers say</h3>

      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mx-auto place-items-center">
        {TestimonialCards.map((card, index) => (
          <TestimonialCard
            key={index}
            name={card.name}
            info={card.info}
            image={card.image}
            description={card.description}
          />
        ))} 
      </div>

      {/* <h3 className="text-xl text-[#001F4D] font-semibold cursor-pointer hover:text-blue-700 mt-10">
        Explore all Testimonials
      </h3> */}
    </div>
  );
}

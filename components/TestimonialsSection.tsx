import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Nicolas Bell',
    info: 'Mechanic',
    description:
      "TradeFlow saves me a ton of time. I can send out quotes and invoices without messing around on a laptop. It's all there on my phone, quick and easy.",
  },
  {
    name: 'Dan Jimitsky',
    info: 'Electrician',
    description:
      "I used to dread the paperwork after a job. Now I get it sorted before I even leave the site. Customers love how professional it looks too.",
  },
  {
    name: 'Charlie Woodhams',
    info: 'Carpenter',
    description:
      "It's made my workflow smoother. I just reuse previous quotes and update the details. No more typing the same thing out over and over.",
  },
  {
    name: 'Jamie Woodhams',
    info: 'Joiner',
    description:
      "I've tried a few apps, but this is the first one that actually fits how I work. Everything is straight to the point and easy to use on-site.",
  },
  {
    name: 'Ricki Mansel',
    info: 'Plumber',
    description:
      "What used to take me 15 minutes now takes 1. I can create a quote, send it, and move on to the next job. Couldn't ask for more.",
  },
  {
    name: 'Joe Decoine',
    info: 'Mechanic',
    description:
      "I've got templates for different services now. It's fast, looks professional, and means I spend less time on admin and more time in the garage.",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="bg-[#EEF3FF] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        <div className="text-center flex flex-col gap-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-[#001F4D]">What Tradespeople Say</h2>
          <p className="text-gray-500 text-lg">
            Join hundreds of tradespeople saving time and winning more work with TradeFlow.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((card) => (
            <TestimonialCard
              key={card.name}
              name={card.name}
              info={card.info}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

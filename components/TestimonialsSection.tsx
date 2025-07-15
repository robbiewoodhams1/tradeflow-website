import TestimonialCard from "./TestimonialCard";
import Image1 from '@/public/splash/Writing a letter-rafiki.png';
import Image2 from '@/public/splash/Teacher student-rafiki.png';
import Image3 from '@/public/splash/Online test-rafiki.png';

export default function TestimonialsSection() {
  const TestimonialCards = [
    {
      name: 'Joe Woodhams',
      school: 'Knole Academy',
      description:
        "Instantly adapt any lesson or resource to match your students' reading level. Just paste your content, select a reading age, and let AI simplify the text — with options to bold keywords, add glossaries, and more.",
      image: Image1,
    },
    {
      name: 'Jane Doe',
      school: 'Oakfield School',
      description:
        "This tool has revolutionised how I prepare materials. My students are more engaged, and I'm saving hours every week.",
      image: Image2,
    },
    {
      name: 'Emily Smith',
      school: 'Greenhill Primary',
      description:
        "I love how easy it is to customise content for different ability levels. It’s like having a teaching assistant powered by AI.",
      image: Image3,
    },
        {
      name: 'Joe Woodhams',
      school: 'Knole Academy',
      description:
        "Instantly adapt any lesson or resource to match your students' reading level. Just paste your content, select a reading age, and let AI simplify the text — with options to bold keywords, add glossaries, and more.",
      image: Image1,
    },
    {
      name: 'Jane Doe',
      school: 'Oakfield School',
      description:
        "This tool has revolutionised how I prepare materials. My students are more engaged, and I'm saving hours every week.",
      image: Image2,
    },
    {
      name: 'Emily Smith',
      school: 'Greenhill Primary',
      description:
        "I love how easy it is to customise content for different ability levels. It’s like having a teaching assistant powered by AI.",
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
            school={card.school}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>

      <h3 className="text-xl text-[#001F4D] font-semibold cursor-pointer hover:text-blue-700 mt-10">
        Explore all Testimonials
      </h3>
    </div>
  );
}

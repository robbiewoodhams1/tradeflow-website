import FeatureCard from "./FeatureCard";
import Image1 from '@/public/splash/Bricklayer-rafiki.png';
import Image2 from '@/public/splash/Prototyping process-rafiki.png';
import Image3 from '@/public/splash/Mail sent-rafiki.png';

export default function FeaturesSection() {
  
  const FeatureCards = [
    {
      title: 'Fast Quote Builder',
      description:
        "Create professional job quotes in under 2 minutes. Simply select tasks, adjust quantities, and send.",
      image: Image1, 
    },
    {
      title: 'Save Quote Templates',
      description:
        "Create and reuse job templates to speed up quoting for common tasks.",
      image: Image2,
    },
    {
      title: 'Send Quotes Instantly',
      description:
        'Email quotes directly to customers from the app, or export as PDF to send manually.',
      image: Image3,
    },
  ];

  return (
    <div className="bg-[#C3D5FF] min-h-screen md:px-20 py-20 px-5 flex flex-col items-center justify-center gap-30">
      <h3 className="text-3xl text-[#001F4D] font-semibold text-center">Our Features & Services</h3>

      <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {FeatureCards.map((card, index) => (
          <FeatureCard
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
          />
        ))}
      </div>

      <h3 className="text-xl text-[#001F4D] font-semibold cursor-pointer hover:text-blue-700">Explore all Features and Services</h3>

    </div>
  );
}

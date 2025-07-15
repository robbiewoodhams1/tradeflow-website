import FeatureCard from "./FeatureCard";
import Image1 from '@/public/splash/Writing a letter-rafiki.png';
import Image2 from '@/public/splash/Teacher student-rafiki.png';
import Image3 from '@/public/splash/Online test-rafiki.png';

export default function FeaturesSection() {
  
  const FeatureCards = [
    {
      title: 'Text Simplifiers',
      description:
        "Instantly adapt any lesson or resource to match your students' reading level. Just paste your content, select a reading age, and let AI simplify the text — with options to bold keywords, add glossaries, and more.",
      image: Image1, 
    },
    {
      title: 'Automated Marking',
      description:
        "Save hours every week by letting AI mark work for you. Customisable to your marking scheme with detailed feedback generation.",
      image: Image2,
    },
    {
      title: 'Lesson Generator',
      description:
        'Create full lessons from a topic in seconds — with activities, explanations, key questions, and assessment points.',
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

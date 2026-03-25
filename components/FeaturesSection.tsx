import FeatureCard from './FeatureCard';
import { BoltIcon, DocumentDuplicateIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const featureCards = [
  {
    title: 'Fast Quote Builder',
    description:
      'Create professional job quotes in under 2 minutes. Simply select tasks, adjust quantities, and send.',
    Icon: BoltIcon,
  },
  {
    title: 'Save Quote Templates',
    description:
      'Create and reuse job templates to speed up quoting for common tasks — no more starting from scratch.',
    Icon: DocumentDuplicateIcon,
  },
  {
    title: 'Send Quotes Instantly',
    description:
      'Email quotes directly to customers from the app, or export as PDF to send manually. Right from the job site.',
    Icon: EnvelopeIcon,
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-[#EEF3FF] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        <div className="text-center flex flex-col gap-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-[#001F4D]">Features Built for Trades</h2>
          <p className="text-gray-500 text-lg">
            Everything you need to quote faster, look more professional, and win more work.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

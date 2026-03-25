import Image from 'next/image';
import Image1 from '@/public/splash/Team goals-rafiki.png';
import { CheckIcon } from '@heroicons/react/24/solid';

const points = [
  'Built with real tradespeople — plumbers, mechanics, builders, and more',
  'Lightning-fast quote creation with reusable templates',
  'Professional PDF quotes sent right from the job site',
  'Simple enough to use between jobs, powerful enough to run your admin',
];

export default function AboutSection() {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={Image1}
            alt="About TradeFlow"
            width={480}
            height={480}
            className="rounded-2xl object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-[#001F4D]">About TradeFlow</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We understand the daily pressure tradespeople face — quoting jobs, chasing approvals,
              managing customers, and actually doing the work. There&apos;s no admin team, no spare
              time, just you, your tools, and a growing pile of paperwork.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              That&apos;s why we built TradeFlow: a simple, powerful quoting tool made specifically
              for busy tradespeople. Our mission is simple — let traders focus on the job while
              TradeFlow handles the admin.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EEF3FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-3 h-3 text-[#0F2C76]" />
                </div>
                <span className="text-gray-600 text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

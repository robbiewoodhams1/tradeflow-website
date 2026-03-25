import { ArrowDownTrayIcon, PencilSquareIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import type { ComponentType } from 'react';

const steps: {
  number: string;
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
}[] = [
  {
    number: '01',
    title: 'Download TradeFlow',
    description:
      'Get the app for free on iOS or Android. Set up your profile and add your business details in minutes.',
    Icon: ArrowDownTrayIcon,
  },
  {
    number: '02',
    title: 'Build Your Quote',
    description:
      'Add line items, quantities, and pricing using our fast quote builder or save templates for common jobs.',
    Icon: PencilSquareIcon,
  },
  {
    number: '03',
    title: 'Send to Customer',
    description:
      'Email a professional PDF quote directly to your customer — right from the job site, before you leave.',
    Icon: PaperAirplaneIcon,
  },
];

export default function HowItWorksSection() {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        <div className="text-center flex flex-col gap-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-[#001F4D]">How It Works</h2>
          <p className="text-gray-500 text-lg">
            Get up and running in minutes. No training needed, no complicated setup — just faster quoting.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connecting line between steps on desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] h-px bg-[#C3D5FF]" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-5">
              <div className="w-20 h-20 bg-[#0F2C76] rounded-2xl flex items-center justify-center z-10 relative flex-shrink-0">
                <step.Icon className="w-9 h-9 text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-[#0F2C76]/40 tracking-widest uppercase">
                  Step {step.number}
                </span>
                <h3 className="text-xl font-semibold text-[#001F4D]">{step.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

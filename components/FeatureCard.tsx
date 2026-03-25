import type { ComponentType } from 'react';

type FeatureCardProps = {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export default function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-5 hover:shadow-2xl hover:scale-102 transition-all ease-in-out duration-200">
      <div className="w-12 h-12 bg-[#EEF3FF] rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#0F2C76]" />
      </div>
      <h3 className="text-xl font-semibold text-[#0F2C76]">{title}</h3>
      <p className="text-gray-500 text-base leading-relaxed">{description}</p>
    </div>
  );
}
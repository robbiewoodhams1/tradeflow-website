'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  items: FAQItem[];
}

export default function FAQsButton({ items }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:w-[70%] w-[90%] pb-40 space-y-4 items-center">
      {items?.map((item, index) => (
        <div
          key={index}
          className=" rounded-lg p-4 bg-white shadow-sm"
        >
          <button
            className="w-full text-left flex gap-10 items-center"
            onClick={() => toggleIndex(index)}
          >
            <span className="text-gray-600">
              {openIndex === index ? <ChevronUpIcon height={24} width={24} color={'black'}/> : <ChevronDownIcon height={24} width={24} color={'black'}/>}
            </span>
            <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-700 text-base">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

import type { StaticImageData } from 'next/image';
import Image from "next/image";

type TestimonialCardProps = {
  image: StaticImageData;
  name: string;
  school: string;
  description: string;
};

export default function TestimonialCard({ image, name, school, description }: TestimonialCardProps) {
  return (
    <div className="bg-blue-300 rounded-2xl p-6 py-10 w-full max-w-md shadow-md flex flex-col gap-4">
      <div className="flex flex-row items-center gap-5 mb-4">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold text-[#0F2C76]">{name}</h4>
          <h5 className="text-xl font-semibold text-[#0F2C76]">{school}</h5>
        </div>
      </div>

      <p className="text-[#333] text-base">{description}</p>
    </div>
  );
}

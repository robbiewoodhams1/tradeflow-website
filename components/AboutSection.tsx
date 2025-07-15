import Image from 'next/image';
import Image1 from '@/public/splash/Self confidence-rafiki.png';

export default function AboutSection() {
  return (
    <div className="bg-[#C3D5FF] min-h-screen md:px-20 py-20 px-5 flex flex-col items-center gap-20">
      <h3 className="text-3xl text-[#001F4D] font-semibold text-center">About ClassFlow</h3>

      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-[1400px]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={Image1}
            alt="About ClassFlow"
            width={600}
            height={600}
            className="rounded-xl object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 text-black text-lg leading-relaxed space-y-5">
          <p>
            Here at <strong>ClassFlow</strong>, we know how hard it is to balance teaching,
            marking, planning, and life. The workload never ends — and teachers are often left doing
            the impossible with limited time and resources.
          </p>

          <p>
            That’s why we created <strong>ClassFlow</strong>: an AI-powered toolkit built
            specifically to make teachers&apos; lives easier.
          </p>

          <p>
            We’ve teamed up with real teachers at every stage to ensure our features are not only
            powerful, but genuinely useful in a real classroom. Every tool — from the Text
            Simplifier to the Starter Generator to the Marking Assistant — is designed to save time,
            reduce stress, and support great teaching.
          </p>

          <p>
            Our mission is simple: help teachers focus on what they do best — teaching — by handling
            the repetitive tasks that drain their energy.
          </p>

          <p>
            Whether you&apos;re adapting content for mixed reading levels or trying to mark 30 books
            before dinner, <strong>ClassFlow</strong> is here to help.
          </p>
        </div>
      </div>

      <h3 className="text-xl text-[#001F4D] font-semibold cursor-pointer hover:text-blue-700 mt-10">
        Learn More
      </h3>
    </div>
  );
}

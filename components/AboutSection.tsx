import Image from 'next/image';
import Image1 from '@/public/splash/Team goals-rafiki.png';

export default function AboutSection() {
  return (
    <div className="bg-[#C3D5FF] min-h-screen md:px-20 py-20 px-5 flex flex-col items-center gap-20">
      <h3 className="text-3xl text-[#001F4D] font-semibold text-center">About TradeFlow</h3>

      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-[1400px]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={Image1}
            alt="About TradeFlow"
            width={600}
            height={600}
            className="rounded-xl object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 text-black text-lg leading-relaxed space-y-5">
          <p>
            At <strong>TradeFlow</strong>, we understand the daily pressure tradespeople face such as quoting jobs, chasing approvals, managing customers, and actually doing the work. There&apos;s no admin team and no spare time, it&apos;s just you, your tools, and a growing pile of paperwork.
          </p>

          <p>
            That&apos;s why we built <strong>TradeFlow</strong>: a simple, powerful quoting tool made specifically for busy tradesmen and women.
          </p>

          <p>
            We&apos;ve worked directly with real tradespeople, plumbers, mechanics, builders, and more, to ensure every feature actually makes your day easier. From lightning-fast quote creation to customer tracking and reusable templates, TradeFlow is designed to save you time, reduce stress, and help you win more work.
          </p>

          <p>
            Our mission is simple: let traders focus on the job while TradeFlow handles the admin.
          </p>

          <p>
            Whether you&apos;re quoting a small repair or a full renovation, <strong>TradeFlow</strong> helps you look professional, get quotes out fast, and get paid quicker ... no fluff, just the tools you need.
          </p>
        </div>
      </div>

      <h3 className="text-xl text-[#001F4D] font-semibold cursor-pointer hover:text-blue-700 mt-10">
        Learn More
      </h3>
    </div>
  );
}

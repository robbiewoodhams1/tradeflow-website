import Image from 'next/image';
import Image1 from '@/public/splash/Phones.png';
import Google from '@/public/splash/GetItOnGooglePlay_Badge_Web_color_English.png';
import Apple from '@/public/splash/5a902db97f96951c82922874.png';

export default function HeroSection() {
  return (
    <div className="bg-[#0F2C76] py-20 px-6 flex justify-center items-center min-h-[calc(100vh-72px)]">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* Text content */}
        <div className="flex flex-col gap-8 items-start max-w-xl">
          <div className="bg-white/15 text-white text-sm font-medium px-4 py-1.5 rounded-full border border-white/20">
            Free to Download
          </div>

          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            Built for Trades.<br />
            <span className="text-blue-200">Optimised</span> for Speed.
          </h1>

          <p className="text-white/70 text-lg leading-relaxed">
            Create professional quotes in under 2 minutes. Send them instantly. Save hours every week — all from your phone.
          </p>

          <div className="flex flex-row gap-4 flex-wrap">
            <a
              href="https://play.google.com/store/apps/details?id=com.tradeflow"
              className="relative w-[160px] h-[50px]"
            >
              <Image
                src={Google}
                alt="Get it on Google Play"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/tradeflow-app/id6748545161"
              className="relative w-[160px] h-[50px]"
            >
              <Image
                src={Apple}
                alt="Download on the App Store"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </a>
          </div>
        </div>

        {/* Phone image */}
        <div className="lg:w-[580px] lg:h-[580px] w-[300px] h-[300px] relative flex-shrink-0">
          <Image
            src={Image1}
            alt="TradeFlow app running on a phone"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import Image1 from '@/public/splash/Phones.png';
import Google from '@/public/splash/GetItOnGooglePlay_Badge_Web_color_English.png';
import Apple from '@/public/splash/5a902db97f96951c82922874.png';

export default function HeroSection() {
  return (
    <div className="bg-[#0F2C76] min-h-screen px-6 flex justify-center items-center">
      <div className="max-w-[2000px] w-full flex flex-col lg:flex-row justify-around items-center gap-10">
        {/* Text content */}
        <div className="flex flex-col gap-10 items-start">
          <h1 className="text-white md:text-5xl text-4xl font-bold leading-snug">
            Built for Trades.<br />
            Optimised for Speed.<br />
            Save Hours Every Week.
          </h1>
          <h3 className="text-xl text-white">Download TradeFlow for free today!</h3>
          <div className="flex flex-row gap-10">
            <a href="https://play.google.com/store/apps/details?id=com.tradeflow" className="relative w-[160px] h-[50px]">
              <Image
                src={Google}
                alt="Google Play"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </a>
            <a href="https://apps.apple.com/us/app/tradeflow-app/id6748545161" className="relative w-[160px] h-[50px]">
              <Image
                src={Apple}
                alt="App Store"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-[700px] lg:h-[700px] w-[400px] h-[400px] relative">
          <Image
            src={Image1}
            alt="Welcome illustration"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}

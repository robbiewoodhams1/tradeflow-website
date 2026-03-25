import Image from 'next/image';
import Google from '@/public/splash/GetItOnGooglePlay_Badge_Web_color_English.png';
import Apple from '@/public/splash/5a902db97f96951c82922874.png';

export default function CTASection() {
  return (
    <div className="bg-[#0F2C76] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Start Quoting Faster Today
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Download TradeFlow for free and send your first professional quote in under 2 minutes.
            No subscription, no hidden fees.
          </p>
        </div>

        <div className="flex flex-row gap-4 flex-wrap justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.tradeflow"
            className="relative w-[160px] h-[50px]"
          >
            <Image
              src={Google}
              alt="Get it on Google Play"
              fill
              style={{ objectFit: 'contain' }}
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
            />
          </a>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import Image1 from '@/public/splash/Classroom-rafiki.png';
import Google from '@/public/splash/GetItOnGooglePlay_Badge_Web_color_English.png';
import Apple from '@/public/splash/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

export default function HeroSection() {
  return (
    <div className="bg-[#0F2C76] min-h-screen px-6 flex justify-center items-center">
      <div className="max-w-[2000px] w-full flex flex-col lg:flex-row justify-around items-center gap-10">
        {/* Text content */}
        <div className="flex flex-col gap-10 items-start">
          <h1 className="text-white md:text-5xl text-3xl font-bold leading-snug">
            Simplify Lessons.<br />
            Speed Up Marking.<br />
            Save Hours Every Week.
          </h1>
          <h3 className="text-xl text-white">Download for free today!</h3>
          <div className="flex flex-row gap-10">
            <a href="/signup" className="relative w-[160px] h-[50px]">
              <Image
                src={Google}
                alt="Google Play"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </a>
            <a href="/signup" className="relative w-[160px] h-[50px]">
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

import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 top-[-180px] h-full w-full rotate-180 object-cover -z-20 sm:top-[-240px] lg:top-[-340px]"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};

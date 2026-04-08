import { GradientDots } from '@/components/ui/gradient-dots';
import { orangeShinyButtonStyle } from '@/components/ui/shiny-button-presets';
import { ShinyButton } from '@/components/ui/shiny-button';
import { BOOK_CALL_PATH } from '@/lib/site';
import { StaggerGroup, StaggerItem } from './StaggerGroup';
import SectionReveal from './SectionReveal';

function CTASection() {
  return (
    <SectionReveal id="book-call" className="bg-[#070707] px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-[1080px]">
        <div className="relative overflow-hidden rounded-[16px] border border-[#8a310b] bg-[#591B00] px-6 py-20 sm:px-10 sm:py-24">
          <GradientDots
            dotSize={6}
            spacing={18}
            duration={34}
            backgroundColor="#591B00"
            gradientColors={['rgba(164,72,28,0.34)', 'rgba(122,42,10,0.28)', 'rgba(196,98,44,0.22)', 'rgba(92,27,0,0.18)']}
            animateHue={false}
            className="opacity-28"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.09),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.08))]" />
          <StaggerGroup className="relative mx-auto max-w-[520px] text-center" staggerDelay={0.12} childDelay={0.06}>
            <StaggerItem>
              <h2 className="text-[32px] font-bold tracking-[-0.05em] text-white sm:text-[40px]">
                Let&apos;s Build Something Bold
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mx-auto mt-3 max-w-[420px] text-[14px] leading-7 text-white/82">
                Tell us what you&apos;re working on and we&apos;ll shape the right creative direction to help
                you grow faster.
              </p>
            </StaggerItem>
            <StaggerItem className="mt-6">
              <ShinyButton href={BOOK_CALL_PATH} style={orangeShinyButtonStyle} showArrow>
                Book a Call
              </ShinyButton>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </SectionReveal>
  );
}

export default CTASection;

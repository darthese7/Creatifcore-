import { motion } from 'framer-motion';
import { orangeShinyButtonStyle } from '@/components/ui/shiny-button-presets';
import { ShinyButton } from '@/components/ui/shiny-button';
import { BOOK_CALL_PATH } from '@/lib/site';

type HeroTool = {
  name: string;
  src: string;
  angle: number;
  orbitSize: number;
  duration: number;
  direction?: 1 | -1;
  sizeClassName?: string;
};

type HeroProps = {
  tools: HeroTool[];
  orbitSrc: string;
  centerSrc: string;
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#FFF"
        d="M17.58 6.38A7.78 7.78 0 0 0 12.06 4a7.86 7.86 0 0 0-6.79 11.83L4 20l4.3-1.13a7.82 7.82 0 0 0 3.76.96 7.87 7.87 0 0 0 5.52-13.45Zm-5.52 12.1a6.5 6.5 0 0 1-3.32-.9l-.24-.14-2.55.67.68-2.48-.16-.26a6.51 6.51 0 1 1 5.59 3.11Zm3.57-4.88c-.2-.1-1.17-.58-1.35-.64-.18-.06-.31-.1-.44.1-.13.2-.5.64-.62.78-.11.13-.23.14-.43.04-.2-.1-.82-.3-1.56-.95-.58-.5-.97-1.13-1.08-1.33-.11-.19-.01-.29.08-.39.08-.09.19-.21.28-.32.09-.11.12-.19.19-.32.06-.12.03-.23-.02-.32-.05-.1-.44-1.05-.6-1.45-.16-.38-.32-.33-.44-.33h-.37c-.13 0-.34.04-.52.24-.18.19-.68.65-.68 1.6s.69 1.87.79 2c.1.14 1.35 2.07 3.28 2.9.46.2.81.32 1.09.4.46.15.87.13 1.2.08.37-.06 1.17-.47 1.33-.94.16-.46.16-.84.11-.93-.05-.08-.18-.13-.38-.23Z"
      />
    </svg>
  );
}

function Hero({ tools, orbitSrc, centerSrc }: HeroProps) {
  const orbitDuration = tools[0]?.duration ?? 30;
  const orbitRotation = tools[0]?.direction === -1 ? -360 : 360;

  return (
    <section id="home" className="bg-[#101010]">
      <div className="w-full">
        <div className="grid min-h-[760px] gap-10 border border-white/6 bg-[#101010] px-6 pb-10 pt-[112px] shadow-[0_30px_80px_rgba(0,0,0,0.3)] sm:min-h-[820px] sm:px-10 sm:pb-12 sm:pt-[120px] lg:grid-cols-[minmax(0,1.42fr)_minmax(280px,0.58fr)] lg:items-center lg:px-12 lg:pb-14 lg:pt-[128px]">
          <div className="max-w-[540px] lg:max-w-none">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#77c7a1]/22 bg-[#2f6548]/72 px-3 py-1.5 text-[11px] font-medium text-[#73ffb4] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#d7ffea]/55 bg-[#b6ffd7]/28">
                <span className="relative block h-2 w-2">
                  <motion.span
                    animate={{ scale: [1, 1.9, 1], opacity: [0.55, 0, 0.55] }}
                    transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full bg-[#7effb7]"
                  />
                  <span className="absolute inset-0 rounded-full bg-[#7effb7] shadow-[0_0_10px_rgba(126,255,183,0.75)]" />
                </span>
              </span>
              Actively open for jobs
            </span>

            <h1 className="mt-4 max-w-[16ch] text-balance text-[clamp(40px,5.2vw,58px)] font-bold leading-[0.95] tracking-[-0.06em] text-white sm:max-w-[18ch] lg:max-w-[760px]">
              Because your brand deserves more than just pretty visuals
            </h1>

            <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-cc-muted sm:max-w-[560px] sm:text-[15px] lg:max-w-[760px]">
              At Creatif Core, we design with purpose. Branding, UI/UX, social media, motion, and
              web experiences built to elevate your image and connect your audience.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <motion.a
                href="#footer"
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="secondary-cta transition-[transform,border-color,background-color,box-shadow] duration-300 hover:border-white/18 hover:bg-white hover:shadow-[0_14px_34px_rgba(255,255,255,0.08)]"
              >
                <WhatsAppIcon />
                Chat with us
              </motion.a>

              <ShinyButton href={BOOK_CALL_PATH} style={orangeShinyButtonStyle} showArrow>
                Book a Call
              </ShinyButton>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid h-[320px] w-[320px] place-items-center sm:h-[380px] sm:w-[380px] lg:h-[292px] lg:w-[292px] xl:h-[356px] xl:w-[356px]"
            >
              <img
                src={orbitSrc}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full select-none opacity-90"
              />
              <div className="absolute h-[88px] w-[88px] rounded-full bg-[#ff5a1f]/18 blur-[28px] sm:h-[110px] sm:w-[110px] lg:h-[84px] lg:w-[84px] xl:h-[104px] xl:w-[104px]" />

              <img
                src={centerSrc}
                alt="Creatif Core mark"
                className="relative z-10 h-[82px] w-[82px] drop-shadow-[0_18px_44px_rgba(255,90,31,0.22)] sm:h-[92px] sm:w-[92px] lg:h-[66px] lg:w-[66px] xl:h-[82px] xl:w-[82px]"
              />

              <motion.div
                animate={{ rotate: orbitRotation }}
                transition={{ duration: orbitDuration, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                className="absolute inset-0"
              >
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="absolute inset-0"
                    style={{ transform: `rotate(${tool.angle}deg)` }}
                  >
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        width: `${tool.orbitSize}%`,
                        height: `${tool.orbitSize}%`,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -orbitRotation }}
                        transition={{ duration: orbitDuration, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                        whileHover={{ y: -4, scale: 1.03 }}
                        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                        title={tool.name}
                      >
                        <img
                          src={tool.src}
                          alt={tool.name}
                          className={
                            tool.sizeClassName ??
                            'h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] lg:h-[44px] lg:w-[44px] xl:h-[52px] xl:w-[52px]'
                          }
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

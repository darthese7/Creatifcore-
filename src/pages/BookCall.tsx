import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CalendlyInlineWidget from '../components/CalendlyInlineWidget';
import { GridVignetteBackground } from '../components/ui/vignette-grid-background';
import logoSrc from '../assets/logo-cc.svg';
import { BOOK_CALL_PATH, BOOKING_NAVIGATION, CALENDLY_URL } from '../lib/site';

function BookingPulseBadge() {
  return (
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
  );
}

function BookCall() {
  return (
    <div className="overflow-x-clip bg-black">
      <Header
        links={BOOKING_NAVIGATION}
        logoSrc={logoSrc}
        logoHref="/"
        ctaHref={BOOK_CALL_PATH}
      />

      <main className="bg-black pt-[96px] sm:pt-[110px]">
        <section className="relative isolate overflow-hidden bg-black px-4 pb-16 sm:px-6 md:pb-20">
          <div className="mx-auto max-w-[1080px]">
            <div className="relative z-10 px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-16 md:px-10 md:pb-20 md:pt-20">
              <div className="relative mx-auto max-w-[760px] text-center">
                <div className="pointer-events-none absolute inset-x-[-48px] top-[-28px] h-[220px] overflow-hidden sm:inset-x-[-72px] sm:h-[250px] md:inset-x-[-92px] md:h-[280px]">
                  <GridVignetteBackground
                    className="[--muted-foreground:rgba(255,255,255,0.22)] opacity-65"
                    size={36}
                    x={50}
                    y={28}
                    intensity={72}
                    horizontalVignetteSize={74}
                    verticalVignetteSize={56}
                  />
                </div>
                <BookingPulseBadge />
                <h1 className="mx-auto mt-5 max-w-[15ch] text-balance text-[30px] font-bold leading-[1.02] tracking-[-0.05em] text-white sm:max-w-[18ch] sm:text-[38px] md:max-w-none md:whitespace-nowrap md:text-[42px]">
                  Start Your Project With A Quick Intro Call
                </h1>
              </div>

              <div className="relative mx-auto mt-12 max-w-[430px]">
                <div className="relative overflow-hidden rounded-[18px] border border-white/8 bg-[#111111] p-1 shadow-[0_24px_60px_rgba(0,0,0,0.34)]">
                  <div className="overflow-hidden rounded-[14px] bg-[#111111]">
                  <CalendlyInlineWidget
                    url={CALENDLY_URL}
                    className="w-full"
                    minWidth={320}
                    height={700}
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default BookCall;

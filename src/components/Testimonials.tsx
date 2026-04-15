import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { StaggerGroup, StaggerItem } from './StaggerGroup';
import SectionReveal from './SectionReveal';

type Testimonial = {
  company: string;
  person: string;
  role: string;
  quote: string;
  tags: string[];
};

type TestimonialsProps = {
  items: Testimonial[];
};

function Testimonials({ items }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeItem = items[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  };

  useEffect(() => {
    if (items.length <= 1 || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, [items.length, isPaused]);

  return (
    <SectionReveal id="testimonials" className="bg-[#090909] px-4 pb-0 pt-20 sm:px-6 md:pb-0 md:pt-28">
      <div className="mx-auto max-w-[1080px] pb-20 md:pb-28">
        <StaggerGroup className="mx-auto max-w-[430px] text-center">
          <StaggerItem>
            <span className="section-pill">Testimonials</span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="section-title mt-3">What Clients Say</h2>
          </StaggerItem>
          <StaggerItem>
            <p className="section-copy mt-2">
              A glimpse into how the work feels from the client side, not just the design side.
            </p>
          </StaggerItem>
        </StaggerGroup>

        <div
          className="mt-10 flex flex-col items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="h-[260px] w-full max-w-[760px] overflow-hidden rounded-[14px] border border-white/8 bg-[#111111] p-5 sm:h-[280px] sm:p-6">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeIndex}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.22 }}
                aria-live="polite"
                className="flex h-full flex-col"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-[#2463eb] text-[13px] font-semibold text-white">
                      {activeItem.company.slice(0, 1)}
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-white">{activeItem.company}</p>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/56">{activeItem.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/76"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-5 max-h-[156px] overflow-hidden text-[14px] leading-7 text-white/84 sm:max-h-[170px] sm:text-[15px]">
                  &ldquo;{activeItem.quote}&rdquo;
                </p>
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  {activeItem.person}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <motion.button
              type="button"
              aria-label="Previous testimonial"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => move(-1)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-black"
            >
              <ArrowLeft className="h-4 w-4" />
            </motion.button>
            <motion.button
              type="button"
              aria-label="Next testimonial"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => move(1)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-black"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default Testimonials;

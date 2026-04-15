import { motion } from 'framer-motion';
import { StaggerGroup, StaggerItem } from './StaggerGroup';
import SectionReveal from './SectionReveal';

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageClassName?: string;
};

type ProcessProps = {
  steps: ProcessStep[];
};

function Process({ steps }: ProcessProps) {
  return (
    <SectionReveal id="process" className="bg-[#0c0c0c] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <StaggerGroup className="mx-auto max-w-[430px] text-center">
          <StaggerItem>
            <span className="section-pill">Process</span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="section-title mt-3">How We Work</h2>
          </StaggerItem>
          <StaggerItem>
            <p className="section-copy mt-2">
              Simple, clear, and built for speed. We keep collaboration efficient so you can move
              from idea to impact.
            </p>
          </StaggerItem>
        </StaggerGroup>

        <div className="mx-auto mt-10 grid max-w-[960px] gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center rounded-[18px] border border-white/8 bg-[#121212] px-4 py-5 text-center"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-[13px] font-bold tracking-[0.12em] text-white">
                {step.number}
              </span>
              <img
                src={step.imageSrc}
                alt={`${step.title} preview`}
                className={`mt-4 w-full rounded-[14px] object-center ${step.imageClassName ?? 'h-[150px] object-cover'}`}
              />
              <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.04em] text-white">{step.title}</h3>
              <p className="mt-2 max-w-[240px] text-[12px] leading-5 text-cc-muted">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Process;

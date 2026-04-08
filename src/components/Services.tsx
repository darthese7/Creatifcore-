import { motion } from 'framer-motion';
import { orangeShinyButtonStyle } from '@/components/ui/shiny-button-presets';
import { ShinyButton } from '@/components/ui/shiny-button';
import { GlowCard } from '@/components/ui/spotlight-card';
import { BOOK_CALL_PATH } from '@/lib/site';
import { StaggerGroup, StaggerItem } from './StaggerGroup';
import SectionReveal from './SectionReveal';

type Service = {
  title: string;
  description: string;
  preview: 'branding' | 'uiux' | 'social' | 'motion';
  bodyClassName: string;
  previewClassName: string;
  previewImageSrc?: string;
  logoSrc: string;
  glowColor: 'blue' | 'purple' | 'green' | 'red' | 'orange';
};

type ServicesProps = {
  services: Service[];
};

function DeviceColumn({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-[112px] w-[52px] flex-col gap-2 rounded-[14px] border border-black/8 bg-white p-2 shadow-[0_10px_24px_rgba(0,0,0,0.08)] ${className ?? ''}`}
    >
      <span className="h-1.5 w-5 rounded-full bg-slate-300" />
      <span className="h-12 rounded-[10px] bg-slate-100" />
      <span className="h-1.5 rounded-full bg-slate-200" />
      <span className="h-1.5 w-8 rounded-full bg-slate-200" />
    </div>
  );
}

function ServicePreview({ service }: { service: Service }) {
  if (service.preview === 'branding') {
    return (
      <div className={`relative flex h-[180px] items-center justify-center overflow-hidden ${service.previewClassName}`}>
        <div className="absolute h-24 w-24 rounded-full bg-[#ff5a1f]/22 blur-2xl" />
        <img src={service.logoSrc} alt="Creatif Core brand preview" className="relative z-10 w-[148px]" />
      </div>
    );
  }

  if (service.previewImageSrc) {
    return (
      <div className={`relative h-[180px] overflow-hidden ${service.previewClassName}`}>
        <img
          src={service.previewImageSrc}
          alt={`${service.title} project preview`}
          className="h-full w-full object-cover object-center"
        />
      </div>
    );
  }

  if (service.preview === 'uiux') {
    return (
      <div className={`relative flex h-[180px] items-end justify-center gap-2 overflow-hidden px-4 pb-4 ${service.previewClassName}`}>
        <DeviceColumn className="translate-y-3" />
        <DeviceColumn />
        <DeviceColumn className="translate-y-4" />
        <DeviceColumn className="hidden sm:flex" />
      </div>
    );
  }

  if (service.preview === 'social') {
    return (
      <div className={`relative grid h-[180px] grid-cols-2 gap-2 overflow-hidden p-4 ${service.previewClassName}`}>
        <div className="rounded-[12px] bg-white/90 p-3 shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
          <span className="mb-2 block h-2 w-14 rounded-full bg-[#2f8f5d]" />
          <span className="mb-2 block h-10 rounded-[10px] bg-[#d6f0df]" />
          <span className="mb-1 block h-2 rounded-full bg-[#9dc3ad]" />
          <span className="block h-2 w-12 rounded-full bg-[#9dc3ad]" />
        </div>
        <div className="rounded-[12px] bg-white/88 p-3 shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
          <span className="mb-2 block h-2 w-11 rounded-full bg-[#206c49]" />
          <span className="mb-2 block h-10 rounded-[10px] bg-[#c4e8d2]" />
          <span className="mb-1 block h-2 rounded-full bg-[#8fb9a0]" />
          <span className="block h-2 w-14 rounded-full bg-[#8fb9a0]" />
        </div>
        <div className="rounded-[12px] bg-white/88 p-3 shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
          <span className="mb-2 block h-2 w-12 rounded-full bg-[#287750]" />
          <span className="mb-2 block h-10 rounded-[10px] bg-[#d0efdb]" />
          <span className="mb-1 block h-2 rounded-full bg-[#9dc3ad]" />
          <span className="block h-2 w-10 rounded-full bg-[#9dc3ad]" />
        </div>
        <div className="rounded-[12px] bg-white/90 p-3 shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
          <span className="mb-2 block h-2 w-14 rounded-full bg-[#236f4c]" />
          <span className="mb-2 block h-10 rounded-[10px] bg-[#d6f0df]" />
          <span className="mb-1 block h-2 rounded-full bg-[#9dc3ad]" />
          <span className="block h-2 w-12 rounded-full bg-[#9dc3ad]" />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative flex h-[180px] items-end justify-center gap-2 overflow-hidden px-4 pb-4 ${service.previewClassName}`}>
      <DeviceColumn className="translate-y-4" />
      <DeviceColumn />
      <DeviceColumn className="hidden sm:flex translate-y-2" />
    </div>
  );
}

function Services({ services }: ServicesProps) {
  return (
    <SectionReveal id="services" className="px-4 pb-20 pt-0 sm:px-6 md:pb-28 md:pt-0">
      <div className="mx-auto max-w-[1080px] pt-20 md:pt-28">
        <StaggerGroup className="mx-auto max-w-[420px] text-center">
          <StaggerItem>
            <span className="section-pill">Services</span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="section-title mt-3">What We Do</h2>
          </StaggerItem>
          <StaggerItem>
            <p className="section-copy mt-2">
              Design solutions that make your brand seen, remembered, and chosen.
            </p>
          </StaggerItem>
        </StaggerGroup>

        <div className="mx-auto mt-10 grid max-w-[720px] gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="rounded-[14px]"
            >
              <GlowCard customSize glowColor={service.glowColor} className="rounded-[14px]">
                <article className="relative z-10 overflow-hidden rounded-[14px] border border-white/8 bg-[#101010]">
                  <ServicePreview service={service} />
                  <div className={`px-4 py-3 text-center ${service.bodyClassName}`}>
                    <h3 className="text-[18px] font-semibold tracking-[-0.04em]">{service.title}</h3>
                    <p className="mt-1 text-[12px] leading-5 text-black/72">{service.description}</p>
                  </div>
                </article>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <ShinyButton href={BOOK_CALL_PATH} style={orangeShinyButtonStyle} showArrow>
            Book a Call
          </ShinyButton>
        </div>
      </div>
    </SectionReveal>
  );
}

export default Services;

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Process from '../components/Process';
import CTASection from '../components/CTASection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import logoSrc from '../assets/logo-cc.svg';
import uiUxPreviewSrc from '../assets/ui-ux-preview.png';
import socialMediaPreviewSrc from '../assets/social-media-preview.png';
import process01Src from '../assets/process-01.png';
import process02Src from '../assets/process-02.png';
import process03Src from '../assets/process-03.png';
import heroOrbitSrc from '../assets/hero-orbit.svg';
import heroCenterFrameSrc from '../assets/hero-center-frame.svg';
import heroFigmaFrameSrc from '../assets/hero-figma-frame.svg';
import heroWebflowFrameSrc from '../assets/hero-webflow-frame.svg';
import heroPhotoshopFrameSrc from '../assets/hero-photoshop-frame.svg';
import heroIllustratorFrameSrc from '../assets/hero-illustrator-frame.svg';
import heroPremiereFrameSrc from '../assets/hero-premiere-frame.svg';
import heroAfterEffectsFrameSrc from '../assets/hero-after-effects-frame.svg';
import { BOOK_CALL_PATH, HOME_NAVIGATION } from '../lib/site';

const HERO_ORBIT_DURATION = 42;

const heroTools = [
  {
    name: 'After Effects',
    src: heroAfterEffectsFrameSrc,
    angle: 78,
    orbitSize: 62,
    duration: HERO_ORBIT_DURATION,
    direction: 1 as const,
    sizeClassName: 'h-[40px] w-[40px] sm:h-[46px] sm:w-[46px] lg:h-[38px] lg:w-[38px] xl:h-[46px] xl:w-[46px]',
  },
  {
    name: 'Figma',
    src: heroFigmaFrameSrc,
    angle: 18,
    orbitSize: 90,
    duration: HERO_ORBIT_DURATION,
    direction: 1 as const,
    sizeClassName: 'h-[46px] w-[46px] sm:h-[54px] sm:w-[54px] lg:h-[44px] lg:w-[44px] xl:h-[54px] xl:w-[54px]',
  },
  {
    name: 'Premiere Pro',
    src: heroPremiereFrameSrc,
    angle: 138,
    orbitSize: 90,
    duration: HERO_ORBIT_DURATION,
    direction: 1 as const,
    sizeClassName: 'h-[46px] w-[46px] sm:h-[54px] sm:w-[54px] lg:h-[44px] lg:w-[44px] xl:h-[54px] xl:w-[54px]',
  },
  {
    name: 'Photoshop',
    src: heroPhotoshopFrameSrc,
    angle: 198,
    orbitSize: 62,
    duration: HERO_ORBIT_DURATION,
    direction: 1 as const,
    sizeClassName: 'h-[40px] w-[40px] sm:h-[46px] sm:w-[46px] lg:h-[38px] lg:w-[38px] xl:h-[46px] xl:w-[46px]',
  },
  {
    name: 'Webflow',
    src: heroWebflowFrameSrc,
    angle: 318,
    orbitSize: 62,
    duration: HERO_ORBIT_DURATION,
    direction: 1 as const,
    sizeClassName: 'h-[40px] w-[40px] sm:h-[46px] sm:w-[46px] lg:h-[38px] lg:w-[38px] xl:h-[46px] xl:w-[46px]',
  },
  {
    name: 'Illustrator',
    src: heroIllustratorFrameSrc,
    angle: 258,
    orbitSize: 90,
    duration: HERO_ORBIT_DURATION,
    direction: 1 as const,
    sizeClassName: 'h-[46px] w-[46px] sm:h-[54px] sm:w-[54px] lg:h-[44px] lg:w-[44px] xl:h-[54px] xl:w-[54px]',
  },
];

const services = [
  {
    title: 'Branding',
    description: 'Brand identities that clarify your value and make your business feel memorable.',
    preview: 'branding' as const,
    bodyClassName: 'bg-[#fee6d8] text-black',
    previewClassName: 'bg-[#0f0f0f]',
    logoSrc,
    glowColor: 'orange' as const,
  },
  {
    title: 'CRO and UI/UX',
    description: 'Conversion-first experiences that guide users, reduce friction, and lift results.',
    preview: 'uiux' as const,
    bodyClassName: 'bg-[#f8e8ef] text-black',
    previewClassName: 'bg-[linear-gradient(180deg,#a8d8ff_0%,#d8eeff_100%)]',
    previewImageSrc: uiUxPreviewSrc,
    logoSrc,
    glowColor: 'purple' as const,
  },
  {
    title: 'Social Media Design',
    description: 'Keep your feed organized with content that feels current and brand-consistent.',
    preview: 'social' as const,
    bodyClassName: 'bg-[#d8fbf2] text-black',
    previewClassName: 'bg-[linear-gradient(180deg,#9cd9ba_0%,#d9fff0_100%)]',
    previewImageSrc: socialMediaPreviewSrc,
    logoSrc,
    glowColor: 'green' as const,
  },
  {
    title: 'Website Design and Development',
    description: 'High-performing sites built to convert, load fast, and reflect your brand with precision.',
    preview: 'motion' as const,
    bodyClassName: 'bg-[#e0efff] text-black',
    previewClassName: 'bg-[linear-gradient(180deg,#acd3ff_0%,#dcecff_100%)]',
    previewImageSrc: uiUxPreviewSrc,
    logoSrc,
    glowColor: 'blue' as const,
  },
];

const projects = [
  {
    title: 'Luxewear Brand',
    summary:
      'Data talks louder when represented in visuals well thought out. Complex brands become easier to trust and purchase from.',
    tags: ['Branding', 'Social Media'],
    metrics: ['SaaS', 'CRM'],
    accentClassName: 'bg-[linear-gradient(90deg,#ff5a1f,transparent)]',
  },
  {
    title: 'Luxewear Brand',
    summary:
      'Data talks louder when represented in visuals well thought out. Complex brands become easier to trust and purchase from.',
    tags: ['Branding', 'Social Media'],
    metrics: ['SaaS', 'CRM'],
    accentClassName: 'bg-[linear-gradient(90deg,#8b74ff,transparent)]',
  },
  {
    title: 'Luxewear Brand',
    summary:
      'Data talks louder when represented in visuals well thought out. Complex brands become easier to trust and purchase from.',
    tags: ['Branding', 'Social Media'],
    metrics: ['SaaS', 'CRM'],
    accentClassName: 'bg-[linear-gradient(90deg,#4dd1a8,transparent)]',
  },
  {
    title: 'Luxewear Brand',
    summary:
      'Data talks louder when represented in visuals well thought out. Complex brands become easier to trust and purchase from.',
    tags: ['Branding', 'Social Media'],
    metrics: ['SaaS', 'CRM'],
    accentClassName: 'bg-[linear-gradient(90deg,#5b7cff,transparent)]',
  },
  {
    title: 'Luxewear Brand',
    summary:
      'Data talks louder when represented in visuals well thought out. Complex brands become easier to trust and purchase from.',
    tags: ['Branding', 'Social Media'],
    metrics: ['SaaS', 'CRM'],
    accentClassName: 'bg-[linear-gradient(90deg,#f2b05b,transparent)]',
  },
  {
    title: 'Luxewear Brand',
    summary:
      'Data talks louder when represented in visuals well thought out. Complex brands become easier to trust and purchase from.',
    tags: ['Branding', 'Social Media'],
    metrics: ['SaaS', 'CRM'],
    accentClassName: 'bg-[linear-gradient(90deg,#2bd3d6,transparent)]',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Book a quick intro chat',
    description: 'We learn your business, goals, and audience in a tight discovery session.',
    imageSrc: process01Src,
  },
  {
    number: '02',
    title: 'Align the vision',
    description: 'You tell us what success looks like and we align the visual direction before execution.',
    imageSrc: process02Src,
  },
  {
    number: '03',
    title: 'We start delivering',
    description: 'We move fast and shape the design into launch-ready assets and interfaces.',
    imageSrc: process03Src,
    imageClassName: 'object-contain',
  },
];

const testimonials = [
  {
    company: 'Upwork',
    person: 'Geoffrey Wise',
    role: 'Social Media Campaign',
    quote:
      'The CreatifCore team is excellent — creative, professional, and always fast with delivery. Their work consistently exceeded expectations, and communication was smooth and reliable. I’m very grateful for everything they contributed and highly recommend them.',
    tags: ['Social', 'Design'],
  },
  {
    company: 'Upwork',
    person: 'Alvaro Anspach',
    role: 'Social Media Posts',
    quote:
      'Worked with the CreatifCore team on 9 social media posts. Could not recommend more. Strong design sense and they created beautiful on-brand posts without a lot of guidance. They move quickly, communicate well, and stay professional. Feedback was incorporated fast and we wrapped in two days. Highly recommend.',
    tags: ['Social', 'Brand'],
  },
  {
    company: 'Upwork',
    person: 'Success Oyekan',
    role: 'UI/UX Project',
    quote:
      'I have hired the CreatifCore team on more than three graphic design projects, and each time the outcome was remarkable. When I engaged them for my UI/UX project, the results exceeded all expectations. The level of excellence achieved was simply unparalleled.',
    tags: ['UI/UX', 'Product'],
  },
  {
    company: 'Upwork',
    person: 'Kody Lukens',
    role: 'Kickstarter Campaign',
    quote:
      'The CreatifCore team is excellent. Their graphics took our Kickstarter campaign to the next level. Wouldn’t hesitate to hire them again.',
    tags: ['Campaign', 'Graphics'],
  },
  {
    company: 'Upwork',
    person: 'Saumitra Purohit',
    role: 'Brand Design',
    quote:
      'The CreatifCore team was an absolute delight to work with. Great design sensibilities and attention to detail. They got the job done on time and were open to suggestions. Will definitely work with them again.',
    tags: ['Brand', 'Design'],
  },
];

function Home() {
  return (
    <div className="overflow-x-clip">
      <Header links={HOME_NAVIGATION} logoSrc={logoSrc} ctaHref={BOOK_CALL_PATH} />
      <main>
        <Hero tools={heroTools} orbitSrc={heroOrbitSrc} centerSrc={heroCenterFrameSrc} />
        <Services services={services} />
        <Projects projects={projects} />
        <Process steps={processSteps} />
        <CTASection />
        <Testimonials items={testimonials} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { orangeShinyButtonStyle } from '@/components/ui/shiny-button-presets';
import { ShinyButton } from '@/components/ui/shiny-button';

type NavLink = {
  href: string;
  label: string;
};

type HeaderProps = {
  links: NavLink[];
  logoSrc: string;
  ctaHref: string;
  logoHref?: string;
};

function Header({ links, logoSrc, ctaHref, logoHref = '#home' }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <div className="mx-auto max-w-[780px]">
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-3 backdrop-blur-2xl transition-all duration-300 sm:px-6 ${
            scrolled
              ? 'border-white/14 bg-black/45 shadow-[0_24px_55px_rgba(0,0,0,0.32)]'
              : 'border-white/8 bg-white/[0.05] shadow-[0_16px_38px_rgba(0,0,0,0.18)]'
          }`}
        >
          <a href={logoHref} aria-label="Creatif Core home">
            <img src={logoSrc} alt="Creatif Core" className="w-[96px] sm:w-[112px]" />
          </a>

          <nav
            className="hidden items-center gap-8 text-[10px] font-medium uppercase tracking-[0.24em] text-white/70 lg:flex"
            aria-label="Primary navigation"
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors duration-200 hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ShinyButton href={ctaHref} style={orangeShinyButtonStyle} showArrow>
              Book a Call
            </ShinyButton>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white lg:hidden"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mt-3 lg:hidden"
          >
            <div className="mx-auto max-w-[780px]">
              <nav
                className="grid gap-3 rounded-[28px] border border-white/10 bg-black/45 px-4 py-4 backdrop-blur-2xl sm:px-6"
                aria-label="Mobile navigation"
              >
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white/85"
                  >
                    {link.label}
                  </a>
                ))}
                <ShinyButton
                  href={ctaHref}
                  onClick={() => setOpen(false)}
                  className="mt-1 w-full"
                  style={orangeShinyButtonStyle}
                  showArrow
                >
                  Book a Call
                </ShinyButton>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Header;

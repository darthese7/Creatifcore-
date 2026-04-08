import { motion } from 'framer-motion';
import footerLogoMarkSrc from '@/assets/footer-logo-mark.svg';
import behanceIconSrc from '@/assets/footer-behance.svg';
import xIconSrc from '@/assets/footer-x.svg';
import instagramIconSrc from '@/assets/footer-instagram.svg';

function Footer() {
  const socialLinks = [
    { href: '#footer', label: 'Behance', iconSrc: behanceIconSrc, sizeClassName: 'h-7 w-7' },
    { href: '#footer', label: 'X', iconSrc: xIconSrc, sizeClassName: 'h-7 w-7' },
    { href: '#footer', label: 'Instagram', iconSrc: instagramIconSrc, sizeClassName: 'h-8 w-8' },
  ];

  return (
    <footer id="footer" className="bg-[#060606] pb-12 pt-0 md:pb-16">
      <div className="w-full border-t border-white/8 px-12 pt-16 sm:px-20 md:px-36 md:pt-20">
        <div className="grid items-center gap-10 text-center md:grid-cols-[1fr_auto_1fr] md:gap-7 md:text-left">
          <p className="justify-self-center text-[13px] text-white/56 md:justify-self-start">
            &copy; CreatifCore {new Date().getFullYear()}. All rights reserved.
          </p>

          <a href="#home" aria-label="Creatif Core home" className="justify-self-center">
            <img src={footerLogoMarkSrc} alt="Creatif Core" className="w-[66px] sm:w-[72px]" />
          </a>

          <div className="flex items-center justify-center gap-8 md:justify-self-end" aria-label="Social platforms">
            {socialLinks.map(({ href, label, iconSrc, sizeClassName }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                className="grid place-items-center opacity-88 transition-[opacity,filter] duration-200 hover:opacity-100 hover:[filter:drop-shadow(0_0_10px_rgba(255,255,255,0.12))]"
              >
                <img src={iconSrc} alt="" aria-hidden="true" className={sizeClassName} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

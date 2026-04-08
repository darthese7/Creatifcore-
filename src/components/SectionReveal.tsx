import { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type SectionRevealProps = HTMLMotionProps<'section'> & {
  children: ReactNode;
  delay?: number;
};

function SectionReveal({
  children,
  className,
  delay = 0,
  ...props
}: SectionRevealProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default SectionReveal;

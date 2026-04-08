import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type StaggerGroupProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
  staggerDelay?: number;
  childDelay?: number;
};

type StaggerItemProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function StaggerGroup({
  children,
  className,
  staggerDelay = 0.1,
  childDelay = 0.04,
  ...props
}: StaggerGroupProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        staggerChildren: staggerDelay,
        delayChildren: childDelay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className, ...props }: StaggerItemProps) {
  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export { StaggerGroup, StaggerItem };

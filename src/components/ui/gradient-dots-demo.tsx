import { GradientDots } from '@/components/ui/gradient-dots';

export default function GradientDotsDemo() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center">
      <GradientDots duration={20} />
      <h1 className="z-10 text-center text-6xl font-extrabold">Gradient Dots</h1>
    </main>
  );
}

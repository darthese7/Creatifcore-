import { GlowCard } from '@/components/ui/spotlight-card';

export function SpotlightCardDemo() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-10">
      <GlowCard glowColor="orange" />
      <GlowCard glowColor="purple" />
      <GlowCard glowColor="green" />
    </div>
  );
}

"use client";

import { useReveal } from "@/hooks/useReveal";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { value: 500, suffix: "+", label: "Empresas aseguradas" },
  { value: 8, suffix: "", label: "Aseguradoras aliadas" },
  { value: 15, suffix: "+", label: "Años de experiencia" },
  { value: 98, suffix: "%", label: "Clientes que renuevan" },
];

function StatItem({ value, suffix, label, active, delay }: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const count = useCounter(value, 2000, active);

  return (
    <div
      className={`text-center transition-all duration-700 ease-out ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-gold">
        {count}{suffix}
      </div>
      <p className="mt-2 text-sm sm:text-base text-navy-400 font-medium">{label}</p>
    </div>
  );
}

export default function Stats() {
  const { ref, visible } = useReveal(0.3);

  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              active={visible}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

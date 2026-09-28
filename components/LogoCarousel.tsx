"use client";

const insurers = [
  "Mapfre",
  "HDI Seguros",
  "Zurich",
  "Liberty",
  "BCI Seguros",
  "Sura",
  "Chubb",
  "Consorcio",
];

export default function LogoCarousel() {
  // Duplicate for seamless loop
  const items = [...insurers, ...insurers];

  return (
    <div className="mt-20 pt-12 border-t border-navy-100">
      <p className="text-center text-xs font-medium tracking-[0.15em] uppercase text-navy-300 mb-8">
        Trabajamos con las principales aseguradoras del mercado
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-navy-50/80 via-navy-50/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-navy-50/80 via-navy-50/40 to-transparent z-10 pointer-events-none" />

        <div className="logo-scroll flex items-center gap-12 sm:gap-16">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex-shrink-0 text-sm sm:text-base font-semibold tracking-wide text-navy-300 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

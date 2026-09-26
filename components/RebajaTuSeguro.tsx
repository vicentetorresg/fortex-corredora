import Image from "next/image";

export default function RebajaTuSeguro() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="https://www.rebajatuseguro.cl"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl bg-navy-700 p-6 sm:p-8 hover:bg-navy-600 transition-colors duration-300"
        >
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
            <div className="flex-shrink-0 text-center sm:text-left">
              <Image
                src="/rebajatuseguro-logo-white.svg"
                alt="Rebaja Tu Seguro"
                width={180}
                height={36}
                className="h-8 sm:h-9 w-auto"
              />
              <p className="text-[10px] text-white/70 font-bold mt-1 tracking-wide">Una empresa de Fortex</p>
            </div>
            <div className="h-px sm:h-10 w-12 sm:w-px bg-white/10 flex-shrink-0" />
            <p className="text-sm font-semibold text-white/90 text-center sm:text-left leading-relaxed">
              ¿Tienes un crédito con seguro asociado? Portamos tu seguro para
              que pagues menos cada mes, sin perder cobertura.
            </p>
            <svg
              className="w-5 h-5 text-gold-400 flex-shrink-0 hidden sm:block group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}

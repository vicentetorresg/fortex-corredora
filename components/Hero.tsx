import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(154,117,53,0.06)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(27,42,78,0.03)_0%,_transparent_60%)]" />
      </div>

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold text-navy-700 leading-[1.1] tracking-tight">
              Seguros que se adaptan
              <br />
              <span className="text-gradient-gold">a su empresa</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-navy-400 max-w-xl leading-relaxed">
              Asesoría integral en gestión de riesgos y seguros corporativos.
              Diseñamos programas a la medida con las mejores aseguradoras del
              mercado.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#contacto"
                className="px-8 py-4 text-base font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-600/20 hover:shadow-gold-500/30 hover:-translate-y-0.5"
              >
                Solicitar Cotización
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 text-base font-semibold text-navy-500 border border-navy-200 rounded-xl hover:border-gold-400 hover:text-gold-600 transition-all duration-300"
              >
                Conocer Servicios
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap gap-8">
              {[
                { value: "10+", label: "Años de experiencia" },
                { value: "500+", label: "Clientes protegidos" },
                { value: "24/7", label: "Soporte siniestros" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-navy-700">
                    {value}
                  </div>
                  <div className="text-xs text-navy-300 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Logo / Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-gold-100/40 via-transparent to-navy-50/30 rounded-full blur-3xl" />
              <Image
                src="/fortex-logo.png"
                alt="Fortex Corredora de Seguros"
                width={420}
                height={420}
                className="relative w-[380px] h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-100 to-transparent" />
    </section>
  );
}

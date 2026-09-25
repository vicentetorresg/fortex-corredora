export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-700">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(154,117,53,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(228,199,126,0.08)_0%,_transparent_60%)]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-600/10 border border-gold-600/20 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-xs font-medium text-gold-300 tracking-wider uppercase">
            Corredora de seguros registrada CMF
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
          Protección patrimonial
          <br />
          <span className="text-gradient-gold">con respaldo y confianza</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Soluciones de seguros corporativos y personales diseñadas a la medida
          de su empresa. Más de una década protegiendo lo que más importa.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="px-8 py-4 text-base font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-600/25 hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            Solicitar Cotización
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 text-base font-semibold text-white/80 border border-white/15 rounded-xl hover:border-gold-600/40 hover:text-gold-300 transition-all duration-300"
          >
            Conocer Servicios
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "10+", label: "Años de experiencia" },
            { value: "500+", label: "Clientes protegidos" },
            { value: "98%", label: "Tasa de renovación" },
            { value: "24/7", label: "Soporte en siniestros" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-gold">
                {value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-white/40">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

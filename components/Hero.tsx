import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(154,117,53,0.06)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(27,42,78,0.03)_0%,_transparent_60%)]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left - Copy */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold text-navy-700 leading-[1.1] tracking-tight">
              El seguro ideal,
              <br />
              <span className="text-gradient-gold">pensado para tu negocio</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-navy-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Comparamos por ti en el mercado para encontrar la mejor opción.
              Asesoría profesional, independiente y sin costo.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              {[
                { icon: "⚡", text: "Respuesta el mismo día" },
                { icon: "🤝", text: "Asesoría independiente" },
                { icon: "✓", text: "Inscrita en la CMF" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs sm:text-sm text-navy-500">
                  <span className="text-sm sm:text-base">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-3">
              <a
                href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20cotizar%20un%20seguro%20con%20Fortex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-600/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-navy-500 border border-navy-200 rounded-xl hover:border-gold-400 hover:text-gold-600 transition-all duration-300"
              >
                Ver todos los seguros
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <QuoteForm />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-100 to-transparent" />
    </section>
  );
}

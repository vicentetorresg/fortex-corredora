import QuoteForm from "./QuoteForm";

export default function BottomCTA() {
  return (
    <section className="py-16 sm:py-24 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-700 tracking-tight leading-tight">
              Cotiza tu seguro
              <br />
              <span className="text-gradient-gold">en menos de 2 minutos</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-navy-400 leading-relaxed">
              Completa el formulario y recibe tu cotización personalizada.
              Sin compromiso, sin letra chica.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  step: "1",
                  title: "Cuéntanos qué necesitas",
                  desc: "Selecciona el tipo de seguro y cuéntanos los detalles.",
                },
                {
                  step: "2",
                  title: "Comparamos por ti",
                  desc: "Cotizamos con múltiples aseguradoras para darte la mejor opción.",
                },
                {
                  step: "3",
                  title: "Contratas y te acompañamos",
                  desc: "Te guiamos en todo el proceso y te apoyamos ante cualquier siniestro.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center text-xs font-bold text-gold-400">
                    {step}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-700">{title}</h4>
                    <p className="text-sm text-navy-400 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <QuoteForm id="cotizar-abajo" />
        </div>
      </div>
    </section>
  );
}

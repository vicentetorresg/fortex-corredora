export default function RebajaTuSeguro() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-navy-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-navy-700 p-6 sm:p-10 lg:p-14">
          {/* Background accents */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(228,199,126,0.08)_0%,_transparent_60%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-600/10 border border-gold-600/20 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span className="text-[11px] sm:text-xs font-medium text-gold-300 tracking-wider uppercase">
                  Línea de negocio
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Rebaja Tu Seguro
              </h2>

              <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed max-w-lg">
                Nuestra plataforma especializada en{" "}
                <strong className="text-white/80">portabilidad de seguros</strong>.
                Si tienes un crédito de consumo o automotriz, podrías estar
                pagando de más por tu seguro asociado. Analizamos tu caso y
                gestionamos el cambio para que ahorres sin perder cobertura.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Simulación gratuita en minutos",
                  "Sin costo para el cliente",
                  "Ahorro promedio de $50.000 al mes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.rebajatuseguro.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 text-sm font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-600/20"
                >
                  Simular mi ahorro
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <a
                  href="https://www.rebajatuseguro.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 text-sm font-medium text-white/70 border border-white/15 rounded-xl hover:border-gold-600/40 hover:text-gold-300 transition-all"
                >
                  Conocer más
                </a>
              </div>
            </div>

            {/* Right - Visual card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-white/[0.05] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-600/20">
                    <svg className="w-8 h-8 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">¿Cuánto podrías ahorrar?</h3>
                  <p className="mt-2 text-sm text-white/50">
                    Miles de chilenos ya portaron su seguro y están ahorrando
                    cada mes.
                  </p>
                  <div className="mt-6 py-4 px-5 rounded-xl bg-white/[0.05] border border-white/10">
                    <div className="text-3xl font-bold text-gradient-gold">$600.000</div>
                    <div className="text-xs text-white/40 mt-1">ahorro promedio al año</div>
                  </div>
                  <p className="mt-4 text-[11px] text-white/30">
                    Operado por Fortex Corredora de Seguros SpA · CMF N° 10275
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

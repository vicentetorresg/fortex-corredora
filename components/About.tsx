export default function About() {
  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-navy-700 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(228,199,126,0.06)_0%,_transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400">
              Quiénes Somos
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Una corredora con{" "}
              <span className="text-gradient-gold">visión estratégica</span>
            </h2>
            <div className="mt-6 space-y-4 text-white/60 leading-relaxed">
              <p>
                <strong className="text-white/80">Fortex Corredora de Seguros SpA</strong> nace
                con el propósito de ofrecer asesoría integral en gestión de
                riesgos y seguros para empresas de diversos sectores productivos
                en Chile.
              </p>
              <p>
                Nuestro enfoque combina un profundo conocimiento técnico con un
                compromiso genuino por la protección patrimonial de nuestros
                clientes. Trabajamos de la mano con las principales compañías
                aseguradoras del mercado para diseñar programas de seguros
                eficientes y competitivos.
              </p>
              <p>
                Desde nuestra sede en Las Condes, Santiago, atendemos clientes a
                lo largo de todo Chile, con una cobertura nacional que nos
                permite estar presentes donde nuestros clientes nos necesiten.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex-1 h-px bg-gradient-to-r from-gold-600/30 to-transparent" />
              <span className="text-xs text-gold-400/60 tracking-wider uppercase">
                RUT 78.452.756-5
              </span>
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Asesoría Personalizada",
                description:
                  "Cada empresa tiene riesgos únicos. Diseñamos programas de seguros específicos para su operación, industria y presupuesto.",
              },
              {
                number: "02",
                title: "Gestión Integral de Siniestros",
                description:
                  "Acompañamiento completo en caso de siniestros: desde la denuncia hasta la liquidación, velando por sus intereses en cada paso.",
              },
              {
                number: "03",
                title: "Red de Aseguradoras",
                description:
                  "Acceso a las principales compañías aseguradoras del mercado chileno, garantizando las mejores condiciones y coberturas disponibles.",
              },
              {
                number: "04",
                title: "Transparencia Total",
                description:
                  "Corredora registrada ante la CMF. Operamos con total transparencia, ética profesional y cumplimiento normativo.",
              },
            ].map((value) => (
              <div
                key={value.number}
                className="group flex gap-5 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-gold-600/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <span className="flex-shrink-0 text-2xl font-bold text-gradient-gold font-display">
                  {value.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/50 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

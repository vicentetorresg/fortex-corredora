export default function Contact() {
  return (
    <section id="contacto" className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
          Contacto
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-700 tracking-tight">
          ¿Necesitas asesoría?
        </h2>
        <p className="mt-4 text-lg text-navy-400 leading-relaxed max-w-2xl mx-auto">
          Escríbenos por WhatsApp o envíanos un correo. Te respondemos el mismo
          día.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20cotizar%20un%20seguro%20con%20Fortex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-600/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir por WhatsApp
          </a>
          <a
            href="mailto:contacto@fortexseguros.cl"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-navy-500 border border-navy-200 rounded-xl hover:border-gold-400 hover:text-gold-600 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            contacto@fortexseguros.cl
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            {
              label: "Dirección",
              value: "Apoquindo 6410, Of. 1404\nLas Condes, Santiago",
            },
            {
              label: "Horario",
              value: "Lunes a Viernes\n9:00 - 18:00 hrs",
            },
            {
              label: "Empresa",
              value: "Fortex Corredora de Seguros SpA\nRUT 78.452.756-5 · CMF N° 10275",
            },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-xs font-semibold tracking-wider uppercase text-gold-600 mb-2">
                {label}
              </p>
              <p className="text-sm text-navy-400 whitespace-pre-line">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";

const insuranceTypes = [
  "Seguro de Vehículo",
  "Seguro de Incendio",
  "Todo Riesgo Construcción",
  "Responsabilidad Civil",
  "Seguro de Vida",
  "Seguro de Salud Colectivo",
  "Garantías y Boletas",
  "Seguro de Transporte",
  "D&O (Directores y Ejecutivos)",
  "Otro",
];

function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full px-4 py-3.5 rounded-xl bg-white border text-left text-sm transition-all flex items-center justify-between gap-2 ${
          open ? "border-gold-400 ring-2 ring-gold-400/30" : "border-navy-200 hover:border-navy-300"
        } ${value ? "text-navy-700" : "text-navy-300"}`}
      >
        <span>{value || placeholder}</span>
        <svg className={`w-4 h-4 text-navy-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-20 mt-1.5 w-full bg-white border border-navy-200 rounded-xl shadow-xl shadow-navy-900/10 py-1.5 max-h-56 overflow-auto">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                value === opt ? "bg-gold-50 text-gold-700 font-medium" : "text-navy-600 hover:bg-navy-50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState("");
  const [perfil, setPerfil] = useState<"personal" | "empresa">("empresa");
  const [detalle, setDetalle] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const canNext1 = tipo !== "";
  const canNext3 = nombre && telefono && email && acepta;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(154,117,53,0.06)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(27,42,78,0.03)_0%,_transparent_60%)]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold text-navy-700 leading-[1.1] tracking-tight">
              El seguro ideal,
              <br />
              <span className="text-gradient-gold">pensado para tu negocio</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-navy-400 max-w-xl leading-relaxed">
              Comparamos por ti en el mercado para encontrar la mejor opción.
              Asesoría profesional, independiente y sin costo.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { icon: "⚡", text: "Respuesta el mismo día" },
                { icon: "🤝", text: "Asesoría independiente" },
                { icon: "✓", text: "Corredora inscrita en la CMF" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-navy-500">
                  <span className="text-base">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-3">
              <a
                href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20cotizar%20un%20seguro%20con%20Fortex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-600/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-navy-500 border border-navy-200 rounded-xl hover:border-gold-400 hover:text-gold-600 transition-all duration-300"
              >
                Ver todos los seguros
              </a>
            </div>
          </div>

          {/* Right - Multi-step form */}
          <div className="bg-white border border-navy-200 rounded-2xl shadow-xl shadow-navy-900/5 p-6 sm:p-8">
            {enviado ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy-700">Solicitud recibida</h3>
                <p className="mt-2 text-sm text-navy-400">Te contactaremos a la brevedad con tu cotización.</p>
              </div>
            ) : (
              <>
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        step >= s ? "bg-gradient-to-br from-gold-400 to-gold-600 text-navy-700" : "bg-navy-100 text-navy-400"
                      }`}>
                        {s}
                      </div>
                      {s < 3 && <div className={`w-8 h-0.5 rounded ${step > s ? "bg-gold-400" : "bg-navy-100"}`} />}
                    </div>
                  ))}
                  <span className="ml-auto text-xs text-navy-300">Paso {step} de 3</span>
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-lg font-bold text-navy-700">¿Qué quieres asegurar?</h3>
                      <p className="text-sm text-navy-400 mt-1">Selecciona el tipo de seguro que necesitas.</p>
                    </div>

                    <div className="flex gap-2">
                      {(["personal", "empresa"] as const).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPerfil(p)}
                          className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                            perfil === p
                              ? "bg-navy-700 text-white"
                              : "bg-navy-50 text-navy-500 hover:bg-navy-100"
                          }`}
                        >
                          {p === "personal" ? "Para mí" : "Para mi empresa"}
                        </button>
                      ))}
                    </div>

                    <CustomSelect
                      value={tipo}
                      onChange={setTipo}
                      options={insuranceTypes}
                      placeholder="Selecciona un tipo de seguro"
                    />

                    <button
                      type="button"
                      disabled={!canNext1}
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 text-sm font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-600/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Continuar
                    </button>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-lg font-bold text-navy-700">Cuéntanos un poco más</h3>
                      <p className="text-sm text-navy-400 mt-1">Opcional: agrega detalles para una cotización más precisa.</p>
                    </div>

                    <div className="p-3 rounded-lg bg-navy-50 text-sm text-navy-600">
                      <span className="font-medium">{perfil === "empresa" ? "Empresa" : "Personal"}</span> · {tipo}
                    </div>

                    <textarea
                      value={detalle}
                      onChange={(e) => setDetalle(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400 transition-all text-sm resize-none"
                      placeholder="Ej: Tengo una flota de 5 camiones, necesito cobertura todo riesgo..."
                    />

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-3.5 text-sm font-medium text-navy-500 border border-navy-200 rounded-xl hover:bg-navy-50 transition-all cursor-pointer"
                      >
                        Atrás
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 py-3.5 text-sm font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-600/20 cursor-pointer"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-navy-700">Tus datos de contacto</h3>
                      <p className="text-sm text-navy-400 mt-1">Te enviaremos tu cotización por email o WhatsApp.</p>
                    </div>

                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400 transition-all text-sm"
                      placeholder="Tu nombre"
                    />

                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      required
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400 transition-all text-sm"
                      placeholder="Teléfono (WhatsApp)"
                    />

                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400 transition-all text-sm"
                      placeholder="Correo electrónico"
                    />

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acepta}
                        onChange={(e) => setAcepta(e.target.checked)}
                        required
                        className="mt-0.5 w-4 h-4 rounded border-navy-300 accent-gold-600 cursor-pointer"
                      />
                      <span className="text-xs text-navy-400 leading-relaxed">
                        Acepto los{" "}
                        <a href="/terminos" target="_blank" className="text-gold-600 hover:underline font-medium">términos y condiciones</a>{" "}
                        y la{" "}
                        <a href="/privacidad" target="_blank" className="text-gold-600 hover:underline font-medium">política de privacidad</a>
                        , y autorizo el tratamiento de mis datos personales.
                      </span>
                    </label>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-5 py-3.5 text-sm font-medium text-navy-500 border border-navy-200 rounded-xl hover:bg-navy-50 transition-all cursor-pointer"
                      >
                        Atrás
                      </button>
                      <button
                        type="submit"
                        disabled={!canNext3}
                        className="flex-1 py-3.5 text-sm font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-600/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                      >
                        Quiero mi cotización
                      </button>
                    </div>

                    <p className="text-[11px] text-navy-300 text-center">
                      No compartimos tus datos. Solo los usamos para tu cotización.
                    </p>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-100 to-transparent" />
    </section>
  );
}

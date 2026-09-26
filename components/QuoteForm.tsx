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
}: {
  value: string;
  onChange: (v: string) => void;
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
        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border text-left text-sm transition-all flex items-center justify-between gap-2 ${
          open ? "border-gold-400 ring-2 ring-gold-400/30" : "border-navy-200 hover:border-navy-300"
        } ${value ? "text-navy-700" : "text-navy-300"}`}
      >
        <span className="truncate">{value || "Selecciona un tipo de seguro"}</span>
        <svg className={`w-4 h-4 text-navy-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-20 mt-1.5 w-full bg-white border border-navy-200 rounded-xl shadow-xl shadow-navy-900/10 py-1.5 max-h-56 overflow-auto">
          {insuranceTypes.map((opt) => (
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

export default function QuoteForm({ id }: { id?: string }) {
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
    <div id={id} className="bg-white border border-navy-200 rounded-2xl shadow-xl shadow-navy-900/5 p-5 sm:p-8">
      {enviado ? (
        <div className="flex flex-col items-center justify-center text-center py-8 sm:py-10">
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
          <div className="flex items-center gap-1.5 sm:gap-2 mb-5 sm:mb-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-1.5 sm:gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  step >= s ? "bg-gradient-to-br from-gold-400 to-gold-600 text-navy-700" : "bg-navy-100 text-navy-400"
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-5 sm:w-8 h-0.5 rounded ${step > s ? "bg-gold-400" : "bg-navy-100"}`} />}
              </div>
            ))}
            <span className="ml-auto text-xs text-navy-300">Paso {step}/3</span>
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-4 sm:space-y-5">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-navy-700">¿Qué quieres asegurar?</h3>
                <p className="text-sm text-navy-400 mt-1">Selecciona el tipo de seguro que necesitas.</p>
              </div>

              <div className="flex gap-2">
                {(["personal", "empresa"] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPerfil(p)}
                    className={`flex-1 py-2.5 px-3 sm:px-4 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      perfil === p
                        ? "bg-navy-700 text-white"
                        : "bg-navy-50 text-navy-500 hover:bg-navy-100"
                    }`}
                  >
                    {p === "personal" ? "Para mí" : "Para mi empresa"}
                  </button>
                ))}
              </div>

              <CustomSelect value={tipo} onChange={setTipo} />

              <button
                type="button"
                disabled={!canNext1}
                onClick={() => setStep(2)}
                className="w-full py-3 sm:py-3.5 text-sm font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-600/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Continuar
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-4 sm:space-y-5">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-navy-700">Cuéntanos un poco más</h3>
                <p className="text-sm text-navy-400 mt-1">Opcional: agrega detalles para una cotización más precisa.</p>
              </div>

              <div className="p-3 rounded-lg bg-navy-50 text-sm text-navy-600">
                <span className="font-medium">{perfil === "empresa" ? "Empresa" : "Personal"}</span> · {tipo}
              </div>

              <textarea
                value={detalle}
                onChange={(e) => setDetalle(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400 transition-all text-sm resize-none"
                placeholder="Ej: Tengo una flota de 5 camiones, necesito cobertura todo riesgo..."
              />

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 sm:px-5 py-3 sm:py-3.5 text-sm font-medium text-navy-500 border border-navy-200 rounded-xl hover:bg-navy-50 transition-all cursor-pointer"
                >
                  Atrás
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 sm:py-3.5 text-sm font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-600/20 cursor-pointer"
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
              className="space-y-3 sm:space-y-4"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-navy-700">Tus datos de contacto</h3>
                <p className="text-sm text-navy-400 mt-1">Te enviaremos tu cotización por email o WhatsApp.</p>
              </div>

              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400 transition-all text-sm"
                placeholder="Tu nombre"
              />

              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400 transition-all text-sm"
                placeholder="Teléfono (WhatsApp)"
              />

              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400 transition-all text-sm"
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
                  className="px-4 sm:px-5 py-3 sm:py-3.5 text-sm font-medium text-navy-500 border border-navy-200 rounded-xl hover:bg-navy-50 transition-all cursor-pointer"
                >
                  Atrás
                </button>
                <button
                  type="submit"
                  disabled={!canNext3}
                  className="flex-1 py-3 sm:py-3.5 text-sm font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-600/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
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
  );
}

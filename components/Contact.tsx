"use client";

import { useState, useRef, useEffect } from "react";

const insuranceTypes = [
  "Seguro Vehículos",
  "Seguro Incendio",
  "Todo Riesgo Construcción",
  "Responsabilidad Civil",
  "Seguros de Vida y Salud",
  "Garantías y Boletas",
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
        className={`w-full px-4 py-3 rounded-lg bg-white border text-left text-sm transition-all flex items-center justify-between gap-2 ${
          open
            ? "border-gold-400 ring-2 ring-gold-400/50"
            : "border-navy-200 hover:border-navy-300"
        } ${value ? "text-navy-700" : "text-navy-300"}`}
      >
        <span>{value || "Seleccione un tipo de seguro"}</span>
        <svg
          className={`w-4 h-4 text-navy-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-20 mt-1.5 w-full bg-white border border-navy-200 rounded-xl shadow-xl shadow-navy-900/10 py-1.5 max-h-64 overflow-auto">
          {insuranceTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                onChange(type);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                value === type
                  ? "bg-gold-50 text-gold-700 font-medium"
                  : "text-navy-600 hover:bg-navy-50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600">
              Contacto
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-700 tracking-tight">
              Conversemos sobre
              <br />
              <span className="text-gradient-gold">su protección</span>
            </h2>
            <p className="mt-4 text-lg text-navy-400 leading-relaxed">
              Solicite una cotización sin compromiso. Nuestro equipo le
              contactará dentro de las próximas 24 horas hábiles.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  ),
                  label: "Dirección",
                  value: "Apoquindo 6410, Of. 1404, Las Condes, Santiago",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "Email",
                  value: "contacto@fortexseguros.cl",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ),
                  label: "Horario de Atención",
                  value: "Lunes a Viernes, 9:00 - 18:00 hrs",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-gold-600 flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-700">{label}</p>
                    <p className="text-sm text-navy-400">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-navy-50/50 border border-navy-100 rounded-2xl p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-700">Mensaje enviado</h3>
                <p className="mt-2 text-navy-400">Nos pondremos en contacto a la brevedad.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm"
                      placeholder="Su nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="organization"
                      autoComplete="organization"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm"
                      placeholder="correo@empresa.cl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    Tipo de Seguro
                  </label>
                  <CustomSelect value={selectedType} onChange={setSelectedType} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-navy-200 text-navy-700 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm resize-none"
                    placeholder="Cuéntenos sobre lo que necesita asegurar..."
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="accept_terms"
                    required
                    className="mt-0.5 w-4 h-4 rounded border-navy-300 text-gold-600 focus:ring-gold-400/50 accent-gold-600 cursor-pointer"
                  />
                  <span className="text-xs text-navy-400 leading-relaxed">
                    Acepto los{" "}
                    <a href="/terminos" target="_blank" className="text-gold-600 hover:underline font-medium">
                      términos y condiciones
                    </a>{" "}
                    y la{" "}
                    <a href="/privacidad" target="_blank" className="text-gold-600 hover:underline font-medium">
                      política de privacidad
                    </a>
                    , y autorizo el tratamiento de mis datos personales conforme a la Ley N° 19.628.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-600/20 cursor-pointer"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

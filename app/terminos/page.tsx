import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Fortex Corredora de Seguros",
  description:
    "Términos y condiciones de uso del sitio web de Fortex Corredora de Seguros SpA.",
};

export default function Terminos() {
  return (
    <main className="min-h-dvh bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gold-600 font-medium mb-8 hover:text-gold-500 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Volver al inicio
        </Link>

        <h1 className="text-3xl font-bold text-navy-700 font-display mb-2">
          Términos y Condiciones
        </h1>
        <p className="text-sm text-navy-300 mb-10">
          Última actualización: septiembre 2026
        </p>

        <div className="prose-legal">
          <h2>1. Identificación</h2>
          <p>
            Este sitio web es operado por{" "}
            <strong>Fortex Corredora de Seguros SpA</strong>, RUT 78.452.756-5,
            Código CMF N° 10275, con domicilio en Apoquindo 6410, Of. 1404,
            Las Condes, Santiago, Chile. Corredora de seguros registrada y
            fiscalizada por la{" "}
            <strong>Comisión para el Mercado Financiero (CMF)</strong>.
          </p>

          <h2>2. Objeto del servicio</h2>
          <p>
            Fortex Corredora de Seguros SpA es una corredora de seguros que
            actúa como intermediaria entre sus clientes y las compañías
            aseguradoras autorizadas para operar en Chile. Nuestros servicios
            incluyen la asesoría en gestión de riesgos, la cotización, colocación
            y administración de pólizas de seguros, y la asistencia en la
            gestión de siniestros.
          </p>

          <h2>3. Naturaleza de las cotizaciones</h2>
          <p>
            Las cotizaciones entregadas a través de este sitio web o por
            cualquier otro medio constituyen{" "}
            <strong>estimaciones referenciales</strong> basadas en la información
            proporcionada por el usuario. Las condiciones definitivas de cada
            póliza serán determinadas por la compañía aseguradora
            correspondiente tras la evaluación formal del riesgo.
          </p>

          <h2>4. Obligaciones del usuario</h2>
          <p>Al utilizar nuestros servicios, el usuario se compromete a:</p>
          <ul>
            <li>Proporcionar información veraz, completa y actualizada</li>
            <li>
              Declarar todos los hechos relevantes para la evaluación del riesgo
            </li>
            <li>
              Revisar las condiciones de las pólizas antes de su aceptación
            </li>
            <li>Cumplir con las obligaciones establecidas en cada póliza</li>
            <li>
              Notificar oportunamente cualquier siniestro conforme a los plazos
              establecidos
            </li>
          </ul>

          <h2>5. Intermediación de seguros</h2>
          <p>
            Fortex Corredora de Seguros SpA actúa exclusivamente como
            intermediario. La cobertura de seguros es proporcionada por las
            compañías aseguradoras con las que trabajamos. La corredora no asume
            responsabilidad por las obligaciones propias de las compañías
            aseguradoras, incluyendo el pago de indemnizaciones.
          </p>

          <h2>6. Remuneración</h2>
          <p>
            La corredora recibe su remuneración a través de comisiones pagadas
            por las compañías aseguradoras, conforme a lo establecido en la
            normativa vigente. Esta remuneración no genera costo adicional para
            el cliente. El cliente tiene derecho a conocer el monto de la
            comisión si así lo solicita.
          </p>

          <h2>7. Código de conducta CMF</h2>
          <p>
            Fortex Corredora de Seguros SpA se rige por el Código de Conducta
            establecido por la Comisión para el Mercado Financiero (CMF) para
            corredores de seguros, comprometiéndose a:
          </p>
          <ul>
            <li>
              Actuar con diligencia, lealtad y en el mejor interés de sus
              clientes
            </li>
            <li>
              Informar de manera clara y oportuna sobre las condiciones de las
              pólizas
            </li>
            <li>
              Mantener la confidencialidad de la información de sus clientes
            </li>
            <li>
              Evitar conflictos de interés y, cuando existan, declararlos
              oportunamente
            </li>
            <li>
              Cumplir con todas las disposiciones legales y reglamentarias
              aplicables
            </li>
            <li>
              Mantener una conducta ética y profesional en todas sus
              operaciones
            </li>
          </ul>
          <p>
            El texto completo del Código de Conducta CMF aplicable a nuestra
            operación se encuentra disponible para consulta de nuestros clientes.
            Para solicitar una copia, puede contactarnos a{" "}
            <a href="mailto:contacto@fortexseguros.cl">
              contacto@fortexseguros.cl
            </a>
            .
          </p>

          <h2>8. Responsabilidad</h2>
          <p>Fortex Corredora de Seguros SpA no será responsable por:</p>
          <ul>
            <li>
              Información incorrecta o incompleta proporcionada por el usuario
            </li>
            <li>
              Decisiones de las compañías aseguradoras respecto a la aceptación
              o rechazo de riesgos
            </li>
            <li>
              Diferencias entre las cotizaciones estimadas y las condiciones
              definitivas
            </li>
            <li>
              La solvencia o capacidad de pago de las compañías aseguradoras
            </li>
            <li>
              Interrupciones del servicio por causas de fuerza mayor o
              mantenimiento técnico
            </li>
          </ul>

          <h2>9. Propiedad intelectual</h2>
          <p>
            Todo el contenido de este sitio web, incluyendo textos, diseños,
            logotipos, marcas y software, es propiedad de Fortex Corredora de
            Seguros SpA o de sus licenciantes y está protegido por la
            legislación de propiedad intelectual vigente en Chile.
          </p>

          <h2>10. Protección de datos</h2>
          <p>
            El tratamiento de datos personales se rige por nuestra{" "}
            <Link href="/privacidad" className="text-gold-600 hover:underline">
              Política de Privacidad
            </Link>
            , la cual forma parte integral de estos términos y condiciones,
            conforme a la Ley N° 19.628 sobre Protección de la Vida Privada.
          </p>

          <h2>11. Legislación aplicable</h2>
          <p>
            Estos términos y condiciones se rigen por las leyes de la República
            de Chile, en particular por el DFL 251 de 1931 sobre Compañías de
            Seguros y la normativa emitida por la CMF. Cualquier controversia
            será sometida a la jurisdicción de los tribunales ordinarios de
            justicia de Santiago, Chile.
          </p>

          <h2>12. Modificaciones</h2>
          <p>
            La Empresa se reserva el derecho de modificar estos términos y
            condiciones en cualquier momento. Las modificaciones entrarán en
            vigencia desde su publicación en el sitio web. El uso continuado del
            servicio implica la aceptación de los términos vigentes.
          </p>

          <h2>13. Contacto</h2>
          <p>
            Para consultas sobre estos términos, puede contactarnos en:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:contacto@fortexseguros.cl">
                contacto@fortexseguros.cl
              </a>
            </li>
            <li>Dirección: Apoquindo 6410, Of. 1404, Las Condes, Santiago</li>
            <li>RUT: 78.452.756-5</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

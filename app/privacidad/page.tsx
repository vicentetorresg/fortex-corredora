import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Fortex Corredora de Seguros",
  description:
    "Política de privacidad y protección de datos personales de Fortex Corredora de Seguros SpA.",
};

export default function Privacidad() {
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
          Política de Privacidad
        </h1>
        <p className="text-sm text-navy-300 mb-10">
          Última actualización: septiembre 2026
        </p>

        <div className="prose-legal">
          <h2>1. Responsable del tratamiento</h2>
          <p>
            <strong>Fortex Corredora de Seguros SpA</strong>, RUT 78.452.756-5,
            con domicilio en Apoquindo 6410, Of. 1404, Las Condes, Santiago,
            Chile, es responsable del tratamiento de los datos personales
            recopilados a través de este sitio web.
          </p>

          <h2>2. Datos que recopilamos</h2>
          <p>Podemos recopilar los siguientes datos personales:</p>
          <ul>
            <li>Nombre completo y RUT</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Nombre de la empresa y cargo</li>
            <li>
              Información relacionada con los riesgos a asegurar (bienes,
              vehículos, actividades comerciales)
            </li>
            <li>Datos de navegación y cookies</li>
          </ul>

          <h2>3. Finalidad del tratamiento</h2>
          <p>Los datos personales se utilizan para:</p>
          <ul>
            <li>Evaluar riesgos y preparar cotizaciones de seguros</li>
            <li>
              Gestionar la contratación, administración y renovación de pólizas
            </li>
            <li>Asistir en la gestión de siniestros</li>
            <li>Comunicar información relevante sobre sus seguros</li>
            <li>Cumplir con obligaciones legales y regulatorias</li>
            <li>Mejorar nuestros servicios y la experiencia del usuario</li>
          </ul>

          <h2>4. Base legal</h2>
          <p>
            El tratamiento de datos se realiza conforme a la Ley N° 19.628 sobre
            Protección de la Vida Privada y sus modificaciones, con base en:
          </p>
          <ul>
            <li>El consentimiento del titular de los datos</li>
            <li>La ejecución de un contrato de intermediación de seguros</li>
            <li>El cumplimiento de obligaciones legales</li>
            <li>El interés legítimo del responsable</li>
          </ul>

          <h2>5. Compartir datos con terceros</h2>
          <p>
            Sus datos personales pueden ser compartidos con las compañías
            aseguradoras para la cotización y contratación de pólizas, así como
            con liquidadores de seguros en caso de siniestros. No vendemos ni
            comercializamos datos personales a terceros.
          </p>

          <h2>6. Seguridad</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas
            apropiadas para proteger sus datos personales contra el acceso no
            autorizado, la alteración, divulgación o destrucción.
          </p>

          <h2>7. Derechos del titular</h2>
          <p>
            Usted tiene derecho a acceder, rectificar, cancelar y oponerse al
            tratamiento de sus datos personales. Para ejercer estos derechos,
            puede contactarnos a{" "}
            <a href="mailto:contacto@fortexseguros.cl">
              contacto@fortexseguros.cl
            </a>
            .
          </p>

          <h2>8. Cookies</h2>
          <p>
            Este sitio web utiliza cookies para mejorar la experiencia del
            usuario y analizar el tráfico del sitio. Puede configurar su
            navegador para rechazar cookies, aunque esto podría afectar la
            funcionalidad del sitio.
          </p>

          <h2>9. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política de privacidad
            en cualquier momento. La versión vigente estará siempre disponible en
            este sitio web.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Para consultas sobre privacidad y protección de datos:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:contacto@fortexseguros.cl">
                contacto@fortexseguros.cl
              </a>
            </li>
            <li>Dirección: Apoquindo 6410, Of. 1404, Las Condes, Santiago</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

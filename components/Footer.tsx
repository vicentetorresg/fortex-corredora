import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/fortex-logo.png"
              alt="Fortex Corredora de Seguros"
              width={160}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Soluciones de seguros corporativos y personales con respaldo,
              experiencia y confianza.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-400 mb-4">
                Servicios
              </h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li><a href="#servicios" className="hover:text-gold-300 transition-colors">Vehículos</a></li>
                <li><a href="#servicios" className="hover:text-gold-300 transition-colors">Incendio</a></li>
                <li><a href="#servicios" className="hover:text-gold-300 transition-colors">Construcción</a></li>
                <li><a href="#servicios" className="hover:text-gold-300 transition-colors">Responsabilidad Civil</a></li>
                <li><a href="#servicios" className="hover:text-gold-300 transition-colors">Vida y Salud</a></li>
                <li><a href="#servicios" className="hover:text-gold-300 transition-colors">Garantías</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-400 mb-4">
                Empresa
              </h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li><a href="#nosotros" className="hover:text-gold-300 transition-colors">Nosotros</a></li>
                <li><a href="#contacto" className="hover:text-gold-300 transition-colors">Contacto</a></li>
                <li><a href="/terminos" className="hover:text-gold-300 transition-colors">Términos y Condiciones</a></li>
                <li><a href="/privacidad" className="hover:text-gold-300 transition-colors">Política de Privacidad</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-400 mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>Apoquindo 6410, Of. 1404</li>
              <li>Las Condes, Santiago, Chile</li>
              <li className="pt-2">
                <a
                  href="mailto:contacto@fortexseguros.cl"
                  className="hover:text-gold-300 transition-colors"
                >
                  contacto@fortexseguros.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/30 text-center sm:text-left space-y-0.5">
            <p>
              &copy; {new Date().getFullYear()} Fortex Corredora de Seguros SpA
              — RUT 78.452.756-5
            </p>
            <p>
              Seguros intermediados por Fortex Corredora de Seguros SpA.
              Corredora registrada ante la CMF — Código N° 10275. Todos los derechos reservados.
            </p>
          </div>
          <a
            href="/terminos"
            className="text-xs text-white/30 hover:text-gold-400 transition-colors"
          >
            Código de conducta CMF
          </a>
        </div>
      </div>
    </footer>
  );
}

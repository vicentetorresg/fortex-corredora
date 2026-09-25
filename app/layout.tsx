import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Fortex Corredora de Seguros | Protección Patrimonial Integral",
  description:
    "Fortex Corredora de Seguros SpA — Soluciones de seguros corporativos y personales. Protección patrimonial con respaldo, experiencia y confianza.",
  keywords:
    "corredora de seguros, seguros Chile, seguros corporativos, seguros vehiculares, responsabilidad civil, seguros incendio, Fortex",
  openGraph: {
    title: "Fortex Corredora de Seguros",
    description:
      "Soluciones de seguros corporativos y personales con respaldo y confianza.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-navy-900 antialiased">{children}</body>
    </html>
  );
}

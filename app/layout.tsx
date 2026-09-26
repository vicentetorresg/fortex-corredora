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
  title: "Fortex Corredora de Seguros | El seguro ideal para tu negocio",
  description:
    "Fortex Corredora de Seguros SpA — Comparamos por ti en el mercado para encontrar la mejor opción. Asesoría profesional, independiente y sin costo.",
  keywords:
    "corredora de seguros, seguros Chile, seguros corporativos, seguros vehiculares, responsabilidad civil, seguros incendio, Fortex",
  icons: {
    icon: [
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Fortex Corredora de Seguros",
    description:
      "Comparamos por ti en el mercado para encontrar la mejor opción de seguros.",
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

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Advocacia Cível, Família, Penal e Imobiliário | Gonzales & Pitondo",
  description:
    "Atuação em inventário, divórcio, guarda, pensão, cobrança de dívidas, execução penal, locação e revisão de juros bancários. Atendimento sigiloso e orientação jurídica clara.",
  metadataBase: new URL("https://adv.avila.inc"),
  openGraph: {
    title: "Gonzales & Pitondo - Advocacia",
    description:
      "Inventário, divórcio, cobranças, execução penal, locação e revisão de juros. Orientação jurídica inicial sigilosa.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
  alt: "Gonzales & Pitondo - Advocacia",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-offwhite text-foreground`}>        
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export const metadata: Metadata = {
  title: "FuteMax site OFICIAL ✔️",
  description: "Acompanhe todos os campeonatos de futebol, jogos de hoje e canais de tv esportivos.",
  applicationName: "FuteMax",
  authors: [{ name: "FuteMax", url: baseUrl }],
  keywords: [
    "futebol",
    "jogos ao vivo",
    "jogos de hoje",
    "canais de tv",
    "esportes",
  ],
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "FuteMax — Acompanhe jogos e canais esportivos ao vivo",
    description:
      "Acompanhe todos os campeonatos de futebol, jogos de hoje e canais de tv esportivos.",
    url: baseUrl,
    siteName: "FuteMax",
    images: [
      {
        url: "/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "FuteMax — imagem de compartilhamento",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FuteMax — Jogos e canais esportivos",
    description:
      "Acompanhe todos os campeonatos, jogos de hoje e canais de tv esportivos.",
    creator: "@futemax",
    images: ["/logo/og-image.png"],
  },
  icons: {
    icon: "/logo/favicon.ico",
    shortcut: "/logo/favicon-16x16.png",
    apple: "/logo/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

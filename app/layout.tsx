import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Latinos en Berlín | Comunidad Latina en Berlín",
  icons: {
  icon: "/favicon.ico",
  },
  description: "Toda la información que necesitas en español: profesionales, eventos, servicios, oportunidades laborales, trámites y visas. Una comunidad para latinos en Berlín.",
  keywords: ["latinos en berlín", "comunidad latina berlín", "hispanos berlín", "españoles berlín", "latinoamericanos alemania", "trámites berlín español", "eventos latinos berlín"],
  authors: [{ name: "Bloom Studio" }],
  creator: "Bloom Studio",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://latinos-in-berlin.vercel.app/", // Cambia por tu dominio real
    siteName: "Latinos en Berlín",
    title: "Latinos en Berlín | Comunidad Latina en Berlín",
    description: "Toda la información que necesitas en español: profesionales, eventos, servicios, oportunidades laborales, trámites y visas.",
    images: [
      {
        url: "https://latinos-in-berlin.vercel.app/favicon.ico", // Usamos el favicon como imagen
        width: 1200,
        height: 630,
        alt: "Latinos en Berlín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latinos en Berlín | Comunidad Latina en Berlín",
    description: "Toda la información que necesitas en español: profesionales, eventos, servicios, oportunidades laborales, trámites y visas.",
    images: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
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
  verification: {
    google: "tu-codigo-de-verificacion", // Agrega cuando tengas Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
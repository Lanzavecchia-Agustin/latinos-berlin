import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

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
    url: "https://latinos-in-berlin.vercel.app/",
    siteName: "Latinos en Berlín",
    title: "Latinos en Berlín | Comunidad Latina en Berlín",
    description: "Toda la información que necesitas en español: profesionales, eventos, servicios, oportunidades laborales, trámites y visas.",
    images: [
      {
        url: "https://latinos-in-berlin.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Latinos en Berlín - Comunidad Latina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latinos en Berlín | Comunidad Latina en Berlín",
    description: "Toda la información que necesitas en español: profesionales, eventos, servicios, oportunidades laborales, trámites y visas.",
    images: ["https://latinos-in-berlin.vercel.app/logo.png"],
    creator: "@tuusuario", // Opcional: tu usuario de Twitter
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
  // Elimina verification si no tienes el código aún
  // verification: {
  //   google: "tu-codigo-de-verificacion",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-F91G5E6EPZ"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F91G5E6EPZ');
          `}
        </Script>
      </head>
      <body>
        <Toaster position="top-right"  />
        <main>
        {children}
        </main>
        </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import dynamic from 'next/dynamic'; // No longer needed here
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";
import { Suspense } from 'react';
import Script from 'next/script'; // Import next/script


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patient1st - Ne subissez plus l'hypertension. Agissez.",
  description: "Le carnet tensionnel digital qui change la donne contre l'hypertension.",
  icons: {
    icon: '/image/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* CookieYes Script placed in head */}
        <Script 
          id="cookieyes"
          type="text/javascript" 
          src="https://cdn-cookieyes.com/client_data/9f6727efc6ba731054f3a9dc/script.js"
          strategy="beforeInteractive" // Load before page is interactive, good for consent managers
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* <DynamicKlaroManagerLoader /> REMOVED */}
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <Suspense fallback={null}>
          <GoogleTagManager />
        </Suspense>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
// import dynamic from 'next/dynamic'; // No longer needed here
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "Patient1st - Ne subissez plus l'hypertension. Agissez.",
  description: "Le carnet tensionnel digital qui change la donne contre l'hypertension.",
  icons: {
    icon: '/image/favicon.ico',
  },
};

export default function WithHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <GoogleTagManager />
      </Suspense>
    </>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import GoogleTagManager from "@/components/GoogleTagManager";
import LinkedInInsightTag from "@/components/LinkedInInsightTag";
import { Suspense } from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merci pour votre réservation - Patient1st",
  description: "Votre rendez-vous a été confirmé avec succès. Découvrez les prochaines étapes.",
  icons: {
    icon: '/image/favicon.ico',
  },
};

export default function MerciReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <LinkedInInsightTag />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* No Header component here - that's the key difference */}
        <main className="flex-grow">
          {children}
        </main>
        <Suspense fallback={null}>
          <GoogleTagManager />
        </Suspense>
      </body>
    </html>
  );
} 
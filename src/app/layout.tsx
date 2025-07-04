import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
} 
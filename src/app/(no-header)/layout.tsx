import "../globals.css";
import Footer from "@/components/layout/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";
import { Suspense } from 'react';

export default function NoHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <GoogleTagManager />
      </Suspense>
    </>
  );
} 
import "../globals.css";
import Footer from "@/components/layout/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";
import LinkedInInsightTag from "@/components/LinkedInInsightTag";
import { Suspense } from 'react';

export default function NoHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LinkedInInsightTag />
      {/* No Header component here - that's the key difference */}
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
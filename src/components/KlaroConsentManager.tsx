'use client';

import { useEffect } from 'react';
import * as Klaro from 'klaro';
import { klaroConfig } from '@/lib/klaro-config'; // Using .js extension explicitly if needed

// Import Klaro's CSS. You might need to adjust the path based on your setup
// and how your bundler handles CSS from node_modules.
// If direct import doesn't work, you might need to copy it to your public folder
// and link it in your _app.tsx or layout.tsx, or import into a global CSS file.
import 'klaro/dist/klaro.min.css';

export default function KlaroConsentManager() {
  useEffect(() => {
    // Ensure Klaro is only initialized once and on the client side.
    if (typeof window !== 'undefined' && !window.klaro) {
      Klaro.setup(klaroConfig);
      window.klaro = Klaro; // Make it globally accessible if needed, e.g. for showing manager
    }
  }, []);

  return null; // This component does not render anything itself
}

// Optional: Function to manually show the Klaro consent manager
export function showKlaroManager() {
  if (typeof window !== 'undefined' && window.klaro) {
    window.klaro.show();
  }
} 
// src/types/klaro.d.ts
declare module 'klaro' {
  // You can be more specific with types if you know them or find them in Klaro's source.
  // For now, using 'any' for simplicity to get rid of the error.
  export function setup(config: any): void;
  export function show(config?: any, modal?: boolean): void;
  export function version(): string;
  // Add other functions/variables exported by Klaro if you use them.
}

// Extend the global Window interface
interface Window {
  klaro?: {
    setup: (config: any) => void;
    show: (config?: any, modal?: boolean) => void;
    // Add other Klaro methods you might access via window.klaro
  };
  dataLayer?: any[]; // Keep existing dataLayer declaration if it was here
} 
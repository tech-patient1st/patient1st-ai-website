// src/types/global.d.ts

// Klaro-specific types removed
/*
interface KlaroConfigGlobal {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; 
}
interface KlaroInstanceGlobal {
  setup: (config: KlaroConfigGlobal) => void;
  show: (config?: KlaroConfigGlobal, modal?: boolean) => void;
}
*/

// More specific types for common dataLayer structures
type GtagCommandParameters = {
  [key: string]: string | number | boolean | undefined | null;
};
type GtagCommand = [string, string, GtagCommandParameters]; // e.g., ['consent', 'default', {...}]

type DataLayerEvent = {
  event: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Allow other properties for specific events
};

declare global {
  interface Window {
    // dataLayer can accept gtag commands (arrays) or event objects
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: Array<GtagCommand | DataLayerEvent | Record<string, any> | IArguments>;
    // klaro?: KlaroInstanceGlobal; // REMOVED
  }
}

// This export statement makes the file a module, ensuring 'declare global' works as expected.
// It can be an empty export if you have no other specific exports from this file.
export {}; 
// src/lib/klaro-config.js

// You can customize the texts and other options as needed.
// Refer to the Klaro documentation for all available options:
// https://klaro.org/docs/configuration/config

export const klaroConfig = {
  // Inform users that we use cookies and obtain their consent.
  // Klaro stores the user's preferences in a cookie named 'klaro'.
  cookieName: 'klaro',
  // You can customize the name of the cookie here.
  // If you change it, you'll need to configure Klaro
  // to use the new name for its cookie.

  // Defines the apps (services) that Klaro will manage.
  apps: [
    {
      // A unique name for the app.
      name: 'googleTagManager',

      // If 'default' is true, the app will be enabled by default.
      // We set it to false because we want to get consent first.
      default: false,

      // The title of the app as displayed in the consent notice.
      title: 'Google Tag Manager & Analytics',

      // The purpose(s) of this app - used to group apps in the consent notice.
      purposes: ['analytics', 'marketing'],

      // An array of cookie names or regexes used by this app.
      // This helps Klaro automatically block cookies if consent is not given.
      // For GTM/GA, these are common ones. You might need to adjust based on your setup.
      cookies: [
        [/^_ga(_.*)?/, /^_gid/, /^_gat(_.*)?/, /__utm./, /__utma/, /__utmb/, /__utmc/, /__utmz/, /__utmv/],
      ],

      // A callback function that will be called if the user accepts this app.
      // This is where you would typically initialize GTM or push an event
      // to the dataLayer to signal that GTM can now load/fire tags.
      callback: (consent, app) => {
        const consentGranted = consent;
        // Ensure dataLayer is initialized
        window.dataLayer = window.dataLayer || []; 

        // Function to push to dataLayer (needed for gtag)
        function gtag(...args){window.dataLayer.push(args);}

        if (app.name === 'googleTagManager') {
          gtag('consent', 'update', {
            'analytics_storage': consentGranted ? 'granted' : 'denied',
            'ad_storage': consentGranted ? 'granted' : 'denied' // Assuming GTM also handles ad-related cookies
          });
          if (consentGranted) {
            console.log('GTM consent updated to granted for analytics_storage and ad_storage');
            // If GTM script wasn't loaded yet, this is a good place to trigger its load,
            // or ensure subsequent page loads will pick it up.
            // For now, we assume GTM is already loaded but respecting consent states.
            // We might need to push an event that GTM uses to re-evaluate triggers.
            window.dataLayer.push({ event: 'consent_updated_gtm' });
          } else {
            console.log('GTM consent updated to denied for analytics_storage and ad_storage');
          }
        }
      },

      // If 'required' is true, users cannot disable this app.
      // Set to false for analytics/marketing cookies as per GDPR.
      required: false,

      // If 'optOut' is true, the app will be enabled by default
      // but users can opt-out. Set to false if explicit opt-in is required.
      optOut: false, // Explicit opt-in

      // If 'onlyOnce' is true, the app will only be executed
      // once regardless how often the user toggles it on and off.
      onlyOnce: false, // Can be re-enabled/disabled
    },
    // You can add other services here, e.g., for marketing pixels, chat widgets, etc.
  ],

  // Defines the purposes for which apps can be used.
  // This helps users understand why they are giving consent.
  purposes: {
    analytics: {
      title: 'Analytics',
      description: 'These services help us understand how visitors interact with our website by collecting and reporting information anonymously.',
    },
    marketing: {
      title: 'Marketing',
      description: 'These services are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.',
    },
    // Add other purposes as needed
  },

  // You can customize the styling of the consent notice.
  // 'notice', 'modal', or 'bar'
  elementID: 'klaro',
  styling: {
    theme: ['light', 'top', 'embedded'], // Example theme
  },
  // Optional: The W3C CSS selector for the node where Klaro will be embedded.
  // If undefined, Klaro will be appended to the body.
  // target: '#klaro-container', // Example if you have a specific div

  // How Klaro should render the consent manager UI.
  // 'notice': A banner at the bottom/top of the screen.
  // 'modal': A modal dialog.
  consentManager: {
    layout: 'bar', // 'bar', 'box', 'categoriesFirst', 'justified'
    variant: 'popup', // 'popup', 'hidden'
  },

  // You can provide translations for all texts displayed to the user.
  // Using 'zz' as a placeholder for 'all languages'
  // You should provide translations for your target languages (e.g., 'en', 'fr')
  zz: {
    consentModal: {
      title: 'Services we would like to use',
      description: 'Here you can assess and customize the services that we would like to use on this website. You are in charge! Enable or disable services as you see fit.',
      privacyPolicy: {
        name: 'Privacy Policy',
        text: 'To learn more, please read our {privacyPolicy}.',
        url: '/privacy-policy', // Update with your privacy policy URL
      },
    },
    googleTagManager: {
      title: 'Google Tag Manager & Analytics',
      description: 'Services that help us track website usage, understand user behavior, and improve our services. This includes Google Analytics.',
    },
    purposes: {
      analytics: 'Analytics',
      marketing: 'Marketing',
      // ... other purposes
    },
    ok: 'Accept',
    acceptAll: 'Accept all',
    acceptSelected: 'Accept selected',
    decline: 'Decline',
    close: 'Close',
    consentNotice: {
      changeDescription: 'There were changes since your last visit, please update your consent.',
      description: 'We use cookies and similar technologies to run this website and help us understand how you use it. {privacyPolicy}',
      learnMore: 'Learn more / Customize',
    },
    poweredBy: 'Powered by Klaro!',
  },
  // Example for French translations (you'll need to fill these out)
  fr: {
    consentModal: {
      title: 'Services que nous souhaitons utiliser',
      description: 'Vous pouvez ici évaluer et personnaliser les services que nous souhaitons utiliser sur ce site Web. Vous avez le contrôle ! Activez ou désactivez les services comme bon vous semble.',
      privacyPolicy: {
        name: 'Politique de confidentialité',
        text: 'Pour en savoir plus, veuillez lire notre {privacyPolicy}.',
        url: '/politique-de-confidentialite', // Mettez à jour avec l'URL de votre politique
      },
    },
    googleTagManager: {
      title: 'Google Tag Manager & Analytics',
      description: "Services qui nous aident à suivre l'utilisation du site Web, à comprendre le comportement des utilisateurs et à améliorer nos services. Cela inclut Google Analytics.",
    },
    purposes: {
      analytics: 'Analytique',
      marketing: 'Marketing',
    },
    ok: 'Accepter',
    acceptAll: 'Tout accepter',
    acceptSelected: 'Accepter la sélection',
    decline: 'Refuser',
    close: 'Fermer',
    consentNotice: {
      changeDescription: 'Des modifications ont été apportées depuis votre dernière visite, veuillez mettre à jour votre consentement.',
      description: "Nous utilisons des cookies et technologies similaires pour faire fonctionner ce site Web et nous aider à comprendre comment vous l'utilisez. {privacyPolicy}",
      learnMore: 'En savoir plus / Personnaliser',
    },
    poweredBy: 'Propulsé par Klaro!',
  },
};

export default klaroConfig; 
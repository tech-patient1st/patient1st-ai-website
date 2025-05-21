'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react"; 
import { trackWebEvent } from '@/lib/analytics';


// Footer organization schema for structured data
const FooterSchema = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://patient1st.ai/#footer",
    "name": "Patient1st",
    "url": "https://patient1st.ai",
    "logo": "/Users/charlessese/Documents/patient1st/patient1st-ai-website/public/image/icon-512x512.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "contact@patient1st.ai",
      "availableLanguage": "French"
    },
    "sameAs": [
      "https://www.facebook.com/Patient1st",
      "https://www.instagram.com/preva_app",
      "https://www.linkedin.com/company/patient1-st/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <FooterSchema />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/image/patient1st-fleur.svg"
                alt="Patient1st Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold">Patient1st</span>
            </div>
            <p className="mb-6 text-primary-foreground/80">
              Patient1st vous aide à suivre et gérer la tension artérielle de vos patients.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61571564891624" 
                className="text-primary-foreground hover:text-warning transition-colors" 
                aria-label="Facebook"
                onClick={() => trackWebEvent('social_click', { platform: 'facebook', location: 'footer' })}
              >
                <Facebook className="h-6 w-6" />
              </a>
              
              <a 
                href="https://www.instagram.com/preva_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-foreground hover:text-warning transition-colors" 
                aria-label="Instagram"
                onClick={() => trackWebEvent('social_click', { platform: 'instagram', location: 'footer' })}
              >
                <Instagram className="h-6 w-6" />
              </a>
             
              <a 
                href="https://www.linkedin.com/company/patient1-st/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-foreground hover:text-warning transition-colors" 
                aria-label="LinkedIn"
                onClick={() => trackWebEvent('social_click', { platform: 'linkedin', location: 'footer' })}
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  onClick={() => trackWebEvent('navigation_click', { destination: 'home', location: 'footer' })}
                >
                  Accueil
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-foreground/80 mr-2">Email:</span>
                <a 
                  href="mailto:contact@patient1st.ai" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  onClick={() => trackWebEvent('contact_click', { method: 'email', location: 'footer' })}
                >
                  contact@patient1st.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 mt-8 border-t border-primary-foreground/20 text-primary-foreground/60 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              &copy; {new Date().getFullYear()} Patient1st. Tous droits réservés.
            </div>
            <div className="flex gap-4">
              <Link 
                href="/mentions-legales" 
                className="hover:text-primary-foreground transition-colors"
                onClick={() => trackWebEvent('navigation_click', { destination: 'mentions-legales', location: 'footer' })}
              >
                Mentions légales
              </Link>
              <Link 
                href="/politique-de-confidentialite" 
                className="hover:text-primary-foreground transition-colors"
                onClick={() => trackWebEvent('navigation_click', { destination: 'politique-de-confidentialite', location: 'footer' })}
              >
                Politique de confidentialité
              </Link>
              
              <Link 
                href="/cgv-medecin" 
                className="hover:text-primary-foreground transition-colors"
                onClick={() => trackWebEvent('navigation_click', { destination: 'cgv-medecin', location: 'footer' })}
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
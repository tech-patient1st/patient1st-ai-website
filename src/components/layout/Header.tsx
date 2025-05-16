'use client';

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { trackWebEvent } from "@/lib/analytics";

// Navigation schema for structured data
const NavigationSchema = () => {
  const navData = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [
      "Accueil",
      "Accéder à l&apos;application"
    ],
    url: [
      "https://preva.app/",
      "https://preva.app/#app-download"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(navData) }}
    />
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-primary text-white z-50">
      <NavigationSchema />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center"
          onClick={() => trackWebEvent('navigation_click', { destination: 'home', location: 'header' })}
        >
          <Image
            src="/image/patient1st-fleur.svg"
            alt="Patient1st Logo"
            width={90}
            height={90}
            className="h-12 w-auto bg-transparent"
          />
          <div className="ml-2">
            <span className="text-2xl font-semibold font-montserrat">Patient1st</span>
            <div className="text-xs font-montserrat">Votre partenaire hypertension</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Button 
            asChild 
            variant="default" 
            className="bg-yellow-400 text-primary hover:bg-yellow-500 font-medium focus-visible:ring-yellow-500"
          >
            <Link href="/login" onClick={() => trackWebEvent('cta_click', { action: 'login_click', location: 'header' }) }> 
              Se connecter
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          type="button"
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col space-y-4">
              <Button 
                asChild 
                variant="default" 
                className="bg-yellow-400 text-primary hover:bg-yellow-500 text-center font-medium focus-visible:ring-yellow-500"
              >
                <Link 
                  href="/login"
                  onClick={() => trackWebEvent('cta_click', { action: 'login_click', location: 'mobile_menu' })}
                > 
                  Se connecter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 
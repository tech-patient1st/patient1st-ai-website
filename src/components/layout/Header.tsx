'use client';

import React, { useState, useEffect, useCallback } from "react";
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
  const [scrollProgress, setScrollProgress] = useState(0); // Initial progress is 0 for white header

  const handleScrollLogic = useCallback(() => {
    const firstSection = document.querySelector('section'); // Assuming the first section is the target hero

    // Prioritize white header if at the very top of the page
    if (window.scrollY < 10) {
      setScrollProgress(0);
      return;
    }

    // If no specific section is found (e.g., on a page without a hero section),
    // default to primary header when scrolled.
    if (!firstSection) {
      setScrollProgress(1);
      return;
    }

    const sectionRect = firstSection.getBoundingClientRect();
    // Approximate Y-coordinate where the fixed header visually ends from the viewport top.
    // This might need adjustment based on actual header height and padding.
    const headerApparentBottomY = 70; 
    // The height (in pixels) over which the transition effect occurs.
    const transitionEffectivenessHeight = 100;

    // Transition starts when the bottom of the primary section reaches this point from the viewport top.
    const transitionStartBoundary = headerApparentBottomY + transitionEffectivenessHeight;
    // Transition ends (header fully primary) when the bottom of the primary section reaches the header's bottom.
    const transitionEndBoundary = headerApparentBottomY;

    let currentProgress: number;
    if (sectionRect.bottom >= transitionStartBoundary) {
      // Section bottom is far below the header (or just entering the transition zone from below).
      // Header should be white.
      currentProgress = 0;
    } else if (sectionRect.bottom <= transitionEndBoundary) {
      // Section bottom is at or above the header's apparent bottom.
      // Header should be fully primary.
      currentProgress = 1;
    } else {
      // Section bottom is within the transition zone.
      // Progress increases from 0 to 1 as sectionRect.bottom moves from transitionStartBoundary to transitionEndBoundary.
      currentProgress = (transitionStartBoundary - sectionRect.bottom) / transitionEffectivenessHeight;
    }
    
    // Ensure progress is clamped between 0 and 1.
    setScrollProgress(Math.min(Math.max(currentProgress, 0), 1));
  }, []); // useCallback to stabilize the function reference

  useEffect(() => {
    const animationFrameCallback = () => {
      handleScrollLogic();
    };

    const debouncedScrollHandler = () => {
      requestAnimationFrame(animationFrameCallback);
    };

    // Initial state setup after a short delay to allow DOM to settle for accurate measurements.
    const initTimeoutId = setTimeout(() => {
      debouncedScrollHandler(); // Call once for initial state
    }, 100); // 100ms delay, adjust if necessary

    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });

    return () => {
      clearTimeout(initTimeoutId);
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, [handleScrollLogic]); // Re-run effect if handleScrollLogic changes (it won't due to useCallback)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Calculate colors based on scroll progress
  const baseBgColor = scrollProgress < 0.01 ? 'rgba(248, 252, 250, 1)' : 'var(--primary)';
  const textColor = scrollProgress > 0.5 ? 'text-white' : 'text-primary';

  return (
    <header 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md rounded-full shadow-lg border border-white/10 max-w-4xl w-[95vw] px-6 py-2 flex items-center justify-between transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: baseBgColor,
      }}
    >
      <NavigationSchema />
      <div className="flex w-full items-center justify-between gap-8">
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
            <span className={`text-2xl font-semibold font-montserrat ${textColor} transition-colors duration-300`}>Patient1st</span>
            <div className={`text-xs font-montserrat ${textColor} transition-colors duration-300`}>Votre partenaire hypertension</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="https://preva.app" 
            className={`${textColor} hover:text-secondary font-medium transition-colors duration-300`}
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => trackWebEvent('navigation_click', { destination: 'preva', location: 'header' })}
          >
            Espace patient
          </Link>
          <Button 
            asChild
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-primary text-lg px-8 py-6 rounded-lg font-semibold shadow-lg"
          >
            <Link href="https://doctor.patient1st.ai/" onClick={() => trackWebEvent('cta_click', { action: 'login_click', location: 'header' }) }> 
              Se connecter
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          type="button"
          className={`md:hidden ${textColor} transition-colors duration-300`}
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
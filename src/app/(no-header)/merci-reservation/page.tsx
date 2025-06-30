'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Mail, ArrowRight, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trackWebEvent } from "@/lib/analytics";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-100 rounded-full p-6">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            Merci pour votre réservation !
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Votre rendez-vous a été confirmé avec succès. Nous avons hâte de vous présenter comment 
            <strong className="text-primary"> Patient1st</strong> peut transformer votre pratique médicale.
          </p>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Que se passe-t-il maintenant ?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Voici les prochaines étapes pour préparer au mieux notre rencontre.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">1. Confirmation par email</h3>
                <p className="text-gray-600">
                  Vous recevrez un email de confirmation avec tous les détails de votre rendez-vous 
                  et le lien de connexion.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-secondary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">2. Rappel automatique</h3>
                <p className="text-gray-600">
                  Nous vous enverrons un rappel 24h avant le rendez-vous avec les détails 
                  et les points que nous aborderons.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">3. Démonstration personnalisée</h3>
                <p className="text-gray-600">
                  Découvrez Patient1st en action avec une démonstration adaptée à votre pratique 
                  et vos besoins spécifiques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We'll Cover Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Ce que nous aborderons ensemble
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre démonstration sera entièrement personnalisée selon votre pratique et vos défis actuels.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    <strong>Analyse de vos besoins :</strong> Comprendre vos défis actuels dans le suivi de la tension
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    <strong>Démonstration live :</strong> Voir Patient1st en action avec des cas concrets
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    <strong>ROI et bénéfices :</strong> Calculer le gain de temps et amélioration de la prise en charge
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    <strong>Intégration :</strong> Comment déployer Patient1st dans votre pratique
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    <strong>Questions et réponses :</strong> Toutes vos questions techniques et pratiques
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center">
              <Image 
                src="/image/doctor-working.png" 
                alt="Démonstration Patient1st" 
                width={500} 
                height={400} 
                className="rounded-xl shadow-xl object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Une question avant notre rendez-vous ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous si vous avez des questions ou si vous souhaitez 
            modifier votre rendez-vous.
          </p>
          
          <div className="flex justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
            >
              <a 
                href="mailto:charles@patient1st.fr" 
                onClick={() => trackWebEvent('contact_click', { action: 'email_contact', location: 'thank_you_page' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Nous contacter par email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Back to Home Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            En attendant notre rencontre, découvrez plus sur Patient1st
          </p>
          <Button 
            asChild
            variant="outline"
            size="lg" 
            className="border-primary text-primary hover:bg-primary/5"
          >
            <Link 
              href="/"
              onClick={() => trackWebEvent('navigation_click', { action: 'back_to_home', location: 'thank_you_page' })}
            >
              Retour à la page principale
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 
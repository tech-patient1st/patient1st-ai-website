/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { Clock, Eye, CheckCircle2, Send, MailX, Rocket, ArrowRight, NotebookText, UsersRound, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { trackWebEvent } from "@/lib/analytics";
import CountUp from 'react-countup';

export default function Home() {
  return (
    <main className="min-h-screen bg-white -mt-8">
      {/* 
      Hero Section - Commented out for now
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            Fini le papier : créez, partagez et suivez vos carnets tensionnels en 1 clic.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              <strong>Le carnet tensionnel digital qui change la donne contre l'hypertension.</strong>
              <br />
              Des patients plus impliqués, des interventions plus précoces. Résultat : meilleure adhésion, moins de complications, tension maîtrisée plus rapidement.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="https://calendly.com/charles-patient1st/introduction-patient1st" target="_blank" rel="noopener noreferrer" onClick={() => trackWebEvent('cta_click', { action: 'book_demo_hero', location: 'hero_section' }) }>
                Réserver une démo
              </a>
            </Button>
            <div className="mt-8 text-sm text-gray-500">
              Hébergement en France conforme RGPD ▪︎ Données chiffrées
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Problem → Solution Section - Redesigned */}
      <section className="pt-0 pb-20 bg-primary relative rounded-3xl -mt-18 mx-2 md:mx-2 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <div>
              {/* Optional: Small pill/badge if you want to add one later like in the example */}
              {/* <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Optimisation du temps médical
              </span> */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Fini le papier : créez et analysez vos carnets tensionnels digitalisés<br />
                <span className="text-secondary">en 1 clic</span>.
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Notre carnet digital intelligent simplifie radicalement le suivi de l'hypertension. Fini la perte de temps avec les carnets papier et les calculs manuels. Obtenez des données fiables et structurées, prêtes pour analyse, en un clin d'œil.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white text-lg">Carnets digitaux structurés, lisibles instantanément.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white text-lg">Indicateurs clés et analyses automatisées pour faciliter la décision médicale.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white text-lg">Education thérapeutique intégrée pour faciliter l'adhésion des patients.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white text-lg">Carnets envoyés et rappels automatiques : plus besoin d'y penser, vos patients sont prêts avant chaque rendez-vous.</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Modern Dual Image Showcase */}
            <div className="relative">
              {/* Main Image - Logbook (smaller) */}
              <div className="relative z-10">
                <Image 
                  src="/image/screenshots/logbook.png" 
                  alt="Carnet tensionnel digital Patient1st" 
                  width={320} 
                  height={400} 
                  className="rounded-2xl shadow-2xl object-cover w-full max-w-xs mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-300" 
                />
                {/* Floating badge for logbook */}
                <div className="absolute -top-4 left-10 bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                  📊 Carnet digital
                </div>
              </div>
              
              {/* Secondary Image - Classification (bigger) */}
              <div className="absolute -bottom-8 -right-8 z-20">
                <Image 
                  src="/image/screenshots/classification-no-treatment.png" 
                  alt="Classification automatique de l'hypertension" 
                  width={450} 
                  height={550} 
                  className="rounded-xl shadow-xl object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-300 border-4 border-white" 
                />
                {/* Floating badge for classification */}
                <div className="absolute -top-5 -right-3 bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  🎯 Classification Intelligente
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>
          {/* Button centered below the grid */}
          <div className="flex justify-center w-full mt-10 mb-20">
            <Button 
              asChild
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary text-lg px-8 py-6 rounded-lg font-semibold shadow-lg"
            >
              <a href="https://cal.com/charles-patient1st/intro-patient1st" target="_blank" rel="noopener noreferrer" onClick={() => trackWebEvent('cta_click', { action: 'book_demo_problem_section', location: 'problem_solution_section' }) }>
                Découvrir la solution
              </a>
            </Button>
          </div>
          {/* Floating Metrics Overlay - Responsive */}
          <div
            className="w-full max-w-5xl px-4 mt-8 md:mt-20 md:absolute md:left-1/2 md:-bottom-20 md:transform md:-translate-x-1/2"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="flex flex-col items-center bg-white py-6 rounded-xl shadow-lg border border-gray-100 transition-transform hover:scale-105 duration-200">
                <NotebookText size={40} className="text-primary mb-2" strokeWidth={2}/>
                <div className="text-2xl font-bold mt-2 text-primary">
                  <CountUp end={1000} duration={2} prefix="+" />
                </div>
                <div className="text-muted-foreground text-base">carnets tensionnels réalisés</div>
              </div>
              <div className="flex flex-col items-center bg-white py-6 rounded-xl shadow-lg border border-gray-100 transition-transform hover:scale-105 duration-200">
                <UsersRound size={40} className="text-primary mb-2" strokeWidth={2}/>
                <div className="text-2xl font-bold mt-2 text-primary">
                  <CountUp end={800} duration={2} prefix="+" />
                </div>
                <div className="text-muted-foreground text-base">patients suivis</div>
              </div>
              <div className="flex flex-col items-center bg-white py-6 rounded-xl shadow-lg border border-gray-100 transition-transform hover:scale-105 duration-200">
                <Heart size={40} className="text-primary mb-2" strokeWidth={2}/>
                <div className="text-2xl font-bold mt-2 text-primary">
                  <CountUp end={96} duration={2} suffix="%" />
                </div>
                <div className="text-muted-foreground text-base">patients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section - MOVED AFTER Metrics, with gray background */}
      <section className="py-20 bg-gray-50 pt-40"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Transformez votre pratique médicale
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16">
            Découvrez comment Patient1st simplifie et optimise votre prise en charge de l'hypertension.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">
            {/* Image column */}
            <div className="flex justify-center lg:justify-end mb-8 lg:mb-0">
              <Image 
                src="/image/doctor-working.png" 
                alt="Médecin utilisant Patient1st" 
                width={400} 
                height={400} 
                className="rounded-2xl shadow-xl object-cover w-full max-w-xs lg:max-w-md" 
              />
            </div>
            {/* Benefits cards column */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[{
                  icon: Clock,
                  title: "Gain de temps important",
                  description: "Fin des verifications manuelles, des calculs et des doubles saisies."
                }, {
                  icon: Eye,
                  title: "Decisions médicales accélérées",
                  description: "Metriques métier claires et à portée de main."
                }, {
                  icon: CheckCircle2,
                  title: "0 erreur de transcription",
                  description: "Grâce a un accompagnement précis des patients."
                }, {
                  icon: Send,
                  title: "Envoi automatisé du carnet",
                  description: "Le patient reçoit un rappel lorsque c'est necessaire."
                }, {
                  icon: MailX,
                  title: "Education thérapeutique renforcée",
                  description: "FAQ & Articles a disposition du patient."
                }, {
                  icon: Rocket,
                  title: "Déploiement rapide pour le médecin et le patient",
                  description: "Ajout patient en moins de 10s, accès instantané."
                }].map((benefit, i) => {
                  // Assign theme-based gradients for each card
                  const gradients = [
                    "from-primary/20 to-secondary/20",
                    "from-secondary/20 to-primary/10",
                    "from-primary/10 to-secondary/10",
                    "from-secondary/10 to-primary/5",
                    "from-primary/20 to-primary/5",
                    "from-secondary/20 to-secondary/5"
                  ];
                  return (
                    <div
                      key={benefit.title}
                      className={`rounded-2xl shadow-lg p-6 bg-gradient-to-br ${gradients[i % gradients.length]} flex flex-col items-start min-h-[180px] transition-transform hover:scale-105 duration-200`}
                    >
                      <div className="mb-4">
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* How it works Section 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Comment ça marche
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {[{
              title: "Le médecin ajoute son patient",
              description: "Depuis son interface, le médecin enregistre le patient et initie le suivi personnalisé.",
              mainIconName: "UserPlus"
            }, {
              title: "Le patient reçoit son carnet digital",
              description: "Le patient est invité par e-mail à accéder facilement à son carnet de suivi.",
              mainIconName: "Smartphone"
            }, {
              title: "Le patient s'informe et remplit son carnet",
              description: "Guidé par l'application, il découvre le fonctionnement, s'équipe d'un tensiomètre si besoin, et saisit ses mesures.",
              mainIconName: "HeartPulse"
            }, {
              title: "Le médecin analyse et ajuste le traitement",
              description: "Lors de la consultation (physique ou à distance), le médecin examine les données claires et adapte le traitement, via l'app ou son logiciel habituel.",
              mainIconName: "LineChart"
            }, {
              title: "Suivi programmé et automatisé",
              description: "Le médecin planifie l'envoi automatique de nouveaux carnets pour les contrôles futurs, assurant une prise en charge continue.",
              mainIconName: "CalendarClock"
            }].map((step, index) => {
              let MainIconComponent = null;
              switch (step.mainIconName) {
                case "UserPlus": MainIconComponent = UserPlus; break;
                case "Smartphone": MainIconComponent = Smartphone; break;
                case "HeartPulse": MainIconComponent = HeartPulse; break;
                case "LineChart": MainIconComponent = LineChart; break;
                case "CalendarClock": MainIconComponent = CalendarClock; break;
              }

              return (
                <div key={step.title} className="flex flex-col items-center text-center p-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  
                  <div className="my-4 h-16 w-16 flex items-center justify-center">
                    {MainIconComponent && <MainIconComponent className="h-16 w-16 text-gray-700 mx-auto" />}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-lg font-semibold group shadow-md"
            >
              <a 
                href="https://cal.com/charles-patient1st/intro-patient1st"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWebEvent('cta_click', { action: 'book_demo_howitworks', location: 'how_it_works_section' })}
              >
                Commencer le suivi d'un patient
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
        */}

      {/* New Dashboard Stats Section 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Votre Tableau de Bord HTA
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Visualisez instantanément les indicateurs clés de vos patients. Notre tableau de bord synthétique offre toutes les données pour une prise de décision rapide et éclairée.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 relative h-[600px] rounded-xl shadow-xl overflow-hidden">
              <Image 
                src="/image/screenshots/logbook.png" 
                alt="Aperçu du carnet patient Patient1st" 
                fill 
                className="object-cover" 
              />
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[{
                  label: "Moyenne SYS / DIA",
                  value: "138 / 85",
                  unit: "mmHg",
                  description: "Pression artérielle moyenne.",
                  status: "yellow"
                }, {
                  label: "Pression pulsée moyenne",
                  value: "54",
                  unit: "mmHg",
                  description: "Marqueur de rigidité artérielle.",
                  status: "yellow"
                }, {
                  label: "Pic matinal",
                  value: "7",
                  unit: "mmHg",
                  description: "Différence SYS matin – SYS soir.",
                  status: "green"
                }, {
                  label: "% valeurs contrôlées",
                  value: "17%",
                  unit: "",
                  description: "Part de mesures <135/85.",
                  status: "red"
                }, {
                  label: "Crises hypertensives",
                  value: "0",
                  unit: "",
                  description: "Mesures ≥180/110.",
                  status: "green"
                }
                ].map((stat) => {
                  let statusClasses = "";
                  let valueColorClass = "";
                  if (stat.status === "green") {
                    statusClasses = "border-green-500";
                    valueColorClass = "text-green-600";
                  } else if (stat.status === "yellow") {
                    statusClasses = "border-yellow-400";
                    valueColorClass = "text-yellow-600";
                  } else if (stat.status === "red") {
                    statusClasses = "border-red-500";
                    valueColorClass = "text-red-600";
                  }

                  return (
                    <div 
                      key={stat.label} 
                      className={`bg-white rounded-lg shadow-md p-5 border-t-4 ${statusClasses} flex flex-col min-h-[160px]`}
                    >
                      <h3 className="text-sm font-semibold text-gray-700">{stat.label}</h3>
                      {stat.description && <p className="text-xs text-gray-500 mb-2">{stat.description}</p>}
                      <div className={`mt-auto text-3xl font-bold ${valueColorClass}`}>
                        {stat.value}
                        {stat.unit && <span className="text-xl font-medium ml-1">{stat.unit}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-lg font-semibold group shadow-md"
            >
              <a 
                href="https://cal.com/charles-patient1st/intro-patient1st" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackWebEvent('cta_click', { action: 'book_demo_impact', location: 'impact_section' })}
              >
                Je veux gagner 4 min par visite
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      */}

      {/* Impact Section - Adjusted mmHg Styling 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Hypertension : un enjeu majeur de santé
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[{
              stat: "1/3",
              description: "Des adultes français sont hypertendus.",
              isLongStat: false,
              unit: null
            }, {
              stat: "1 AVC / 4min",
              description: "Causé par l'HTA non maîtrisée en France.",
              isLongStat: true, 
              unit: null
            }, {
              stat: "-5", // Main stat
              unit: "mmHg", // Unit part
              description: "Baisse de PAS moyenne observée avec un suivi efficace.",
              isLongStat: false // The number "-5" itself is not long, so uses larger font for the number
            }, {
              stat: "-14%",
              description: "De risque d'AVC en moins pour 5mmHg de PAS réduite.",
              isLongStat: false,
              unit: null
            }
            ].map((item) => (
              <div 
                key={item.stat} 
                className="group p-6 lg:p-8 rounded-xl shadow-lg text-center flex flex-col justify-center items-center min-h-[200px] bg-gray-50 text-gray-900 hover:bg-primary transition-all duration-300 ease-in-out cursor-default"
              >
                <div className={`font-bold mb-3 text-primary group-hover:text-white transition-colors duration-300 ease-in-out ${item.isLongStat ? 'text-4xl lg:text-5xl' : 'text-5xl lg:text-6xl'}`}>
                  {item.stat}
                  {item.unit && (
                    <span className="ml-1 font-normal text-xl lg:text-2xl text-gray-500 group-hover:text-primary-foreground/80 align-baseline">
                      {item.unit}
                    </span>
                  )}
                </div>
                <p className="text-base lg:text-lg text-gray-600 group-hover:text-primary-foreground/90 transition-colors duration-300 ease-in-out">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      */}

      {/* Testimonials Section - New Structure */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 items-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Avec Patient1st, votre prise en charge de l'HTA est plus efficace
            </h2>
            <p className="text-lg text-gray-600 mt-3 mb-10">
              Nos médecins partenaires témoignent…
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[{
              title: "Gain de Temps et Suivi Serein",
              quote: "Grâce à Patient1st, j'ai pu intégrer le suivi de l'HTA à ma pratique beaucoup plus sereinement. Le gain de temps est considérable et me permet de mieux accompagner ces patients.",
              author: "Dr Thomas L."
            }, {
              title: "Capacité de Suivi Étendue",
              quote: "L'efficacité de Patient1st m'a permis d'étendre ma capacité de suivi à plus de 800 patients hypertendus, sans sacrifier la qualité des soins.",
              author: "Dr Yoann K."
            }, {
              title: "Expérience Patient Transformée",
              quote: "Patient1st a transformé l'expérience de suivi pour mes patients. Ils se sentent plus impliqués et comprennent mieux leur HTA, ce qui améliore grandement leur adhésion au traitement.",
              author: "Dr Malek M."
            }
            ].map((testimonial) => (
              <div key={testimonial.author} className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex items-center mb-3 gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={`star-${testimonial.author}-${i}`} className="text-secondary text-xl">★</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{testimonial.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonial.quote.replace(/l&apos;/g, "l'").replace(/d&apos;/g, "d'")}
                  </p>
                </div>
                <div className="mt-5 text-sm font-medium text-gray-700">{testimonial.author}</div>
              </div>
            ))}
          </div>

          <Button 
            asChild 
            size="lg" 
            className="mt-10 bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-lg font-semibold group shadow-md"
          >
            <a href="https://cal.com/charles-patient1st/intro-patient1st" 
               target="_blank" 
               rel="noopener noreferrer"
               onClick={() => trackWebEvent('cta_click', { action: 'book_demo_testimonials', location: 'testimonials_section' })}
            >
              Tester gratuitement
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Questions fréquentes (FAQ)
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[{
              question: "Est‑ce un dispositif médical ?",
              answer: "Non. Il s'agit d'un logiciel d'aide à la décision, sans diagnostic automatique. Son objectif est de faciliter le suivi et la communication des données d'automesure tensionnelle, conformément aux recommandations de la HAS."
            }, {
              question: "Comment puis-je présenter Patient1st à mes patients ?",
              answer: "Vous pouvez leur expliquer que Patient1st est un carnet de tension digital sécurisé, conçu pour les aider à mieux suivre leur tension artérielle à la maison, conformément à vos recommandations. Indiquez-leur que cela vous permettra d'avoir des mesures fiables et organisées pour mieux adapter leur traitement et qu'ils recevront des rappels pour ne pas oublier de prendre leurs mesures avant leur prochaine consultation. Rassurez-les sur la simplicité d'utilisation et le fait que cela facilitera leur suivi."
            }, {
              question: "Combien ça coûte ?",
              answer: "Nous proposons une licence mensuelle par médecin, sans engagement. Le tarif exact et les options vous seront présentés en détail lors de la démonstration personnalisée de 15 minutes."
            }, {
              question: "Est‑ce chronophage à installer ?",
              answer: "Absolument pas. Le déploiement prend moins de 10 minutes : création de votre compte sécurisé, ajout de votre premier patient, et vous êtes prêt à commencer. Aucune intégration complexe avec des logiciels tiers n'est requise."
            }, {
              question: "Puis‑je programmer un rappel pour le patient ?",
              answer: "Oui, c'est une fonctionnalité clé. Vous pouvez configurer des rappels automatiques par notification push (via l'application) pour encourager vos patients à remplir leur carnet d'automesure avant leur consultation."
            }, {
              question: "Que se passe‑t‑il si j'arrête mon abonnement ?",
              answer: "En cas d'arrêt de l'abonnement, vous conservez un accès en lecture seule à vos données pendant 30 jours. Durant cette période, vous pourrez télécharger tous les carnets de suivi au format PDF pour vos archives."
            },
            ].map((faqItem) => (
              <AccordionItem value={faqItem.question} key={faqItem.question}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faqItem.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2">
                  <p className="text-base text-gray-700">
                    {faqItem.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Prêt à gagner du temps et prioriser vos consultations <br /> à plus forte valeur ajoutée ?
          </h2>
          <Button asChild size="lg" className="text-lg px-8 py-6 w-full md:w-auto">
            <a href="https://cal.com/charles-patient1st/intro-patient1st" target="_blank" rel="noopener noreferrer" onClick={() => trackWebEvent('cta_click', { action: 'book_demo_final_cta', location: 'final_cta_section' }) }>
              Je réserve une démo de 15 min
            </a>
          </Button>
          <p className="mt-4 text-gray-600">
            Choisissez votre créneau dans notre agenda en ligne ; aucune CB requise.
          </p>
        </div>
      </section>
    </main>
  );
}

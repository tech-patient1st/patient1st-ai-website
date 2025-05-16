# Patient1st - Suivi HTA express pour médecins

Une application web moderne pour le suivi de l'hypertension artérielle (HTA) des patients, développée avec Next.js, Tailwind CSS et shadcn/ui.

## Fonctionnalités

- Interface moderne et responsive
- Suivi en temps réel des mesures de tension
- Calcul automatique des moyennes
- Génération de PDF pour les consultations
- Système de rappels automatisés
- FAQ intégrée
- Conforme RGPD

## Technologies utilisées

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/patient1st.git
cd patient1st
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du projet

```
src/
  ├── app/              # Pages et layouts Next.js
  ├── components/       # Composants React
  │   ├── ui/          # Composants shadcn/ui
  │   └── landing/     # Composants spécifiques à la landing page
  └── lib/             # Utilitaires et configurations
```

## Déploiement

Le projet peut être déployé sur Vercel :

```bash
npm run build
```

## Licence

Tous droits réservés © 2024 Patient1st

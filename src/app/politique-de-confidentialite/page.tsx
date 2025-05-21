import React from 'react';

const PolitiqueDeConfidentialitePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
      <p className="mb-4">Dernière mise à jour : 22/11/2024</p>

      <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
      <p className="mb-4">
        La présente Politique de Confidentialité décrit comment Patient1st (« nous », « notre » ou « nos ») collecte, utilise, conserve et protège les informations personnelles des utilisateurs (« vous », « vos ») de notre application Préva. En utilisant notre application, vous acceptez les termes de cette Politique.
      </p>

      <h2 className="text-2xl font-semibold mb-3">1. Données que nous collectons</h2>
      <p className="mb-4">
        Nous collectons plusieurs types de données personnelles lorsque vous utilisez notre application :
      </p>
      <h3 className="text-xl font-semibold mb-2">Données fournies par vous :</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Informations d’identification : nom, prénom, date de naissance, numéro de téléphone, adresse e-mail.</li>
        <li>Données médicales : mesures de tension artérielle, résultats de tests sanguins, autres données de santé renseignées par vous ou votre médecin.</li>
        <li>Documents téléchargés : résultats d’analyses médicales, ordonnances, etc.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Données collectées automatiquement :</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Informations techniques : modèle de l’appareil, système d’exploitation, adresse IP, données de connexion.</li>
        <li>Données d’utilisation : interactions avec l’application, fréquence d’utilisation, fonctionnalités utilisées.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Données collectées par des tiers :</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Données fournies par votre médecin dans le cadre de votre suivi médical.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">2. Pourquoi collectons-nous vos données ?</h2>
      <p className="mb-4">
        Nous utilisons vos données personnelles pour les finalités suivantes :
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Fourniture des services : suivi des mesures médicales, partage des données avec votre médecin, recommandations personnalisées.</li>
        <li>Amélioration de l’application : analyse des données d’utilisation pour améliorer les fonctionnalités.</li>
        <li>Conformité légale : respect des obligations légales et réglementaires, notamment en matière de gestion des données de santé.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">3. Partage de vos données</h2>
      <p className="mb-4">
        Vos données personnelles ne sont partagées qu’avec les parties suivantes :
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Votre médecin : dans le cadre de votre suivi médical.</li>
        <li>Fournisseurs de services tiers : outils techniques pour l’hébergement des données, l’envoi de notifications ou l’analyse statistique. Tous nos fournisseurs sont soumis à des obligations strictes de confidentialité et de sécurité.</li>
        <li>Autorités compétentes : uniquement en cas d’obligation légale.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">4. Sécurité des données</h2>
      <p className="mb-4">
        Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre l’accès non autorisé, la perte ou la destruction, notamment :
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Hébergement sécurisé conforme aux normes en matière de données de santé.</li>
        <li>Chiffrement des données en transit et au repos.</li>
        <li>Contrôle d’accès strict pour notre équipe et nos partenaires.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">5. Vos droits</h2>
      <p className="mb-4">
        Conformément au RGPD, vous disposez des droits suivants :
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Accès : demander une copie de vos données personnelles.</li>
        <li>Rectification : corriger des données inexactes ou incomplètes.</li>
        <li>Suppression : demander l’effacement de vos données (sauf obligation légale de les conserver).</li>
        <li>Portabilité : recevoir vos données dans un format structuré, couramment utilisé.</li>
        <li>Opposition : refuser le traitement de vos données pour des finalités spécifiques.</li>
      </ul>
      <p className="mb-4">
        Pour exercer vos droits, contactez-nous à privacy@patient1st.ai.
      </p>

      <h2 className="text-2xl font-semibold mb-3">6. Conservation des données</h2>
      <p className="mb-4">
        Vos données personnelles sont conservées aussi longtemps que nécessaire pour atteindre les finalités décrites dans cette Politique :
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Données médicales : durée de la relation patient-médecin, plus une période légale de conservation selon les lois applicables.</li>
        <li>Données techniques et d’utilisation : période maximale de 12 mois après la dernière utilisation de l’application.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">7. Modifications de la Politique de Confidentialité</h2>
      <p className="mb-4">
        Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Toute modification sera publiée dans l’application, et vous en serez informé(e) par une notification.
      </p>

      <h2 className="text-2xl font-semibold mb-3">8. Contact</h2>
      <p className="mb-4">
        Pour toute question concernant cette Politique de Confidentialité, vous pouvez nous contacter :
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>E-mail : privacy@patient1st.ai</li>
        <li>Adresse postale : 87 Avenue Archimede, 83700 Saint Raphael, France</li>
      </ul>
    </div>
  );
};

export default PolitiqueDeConfidentialitePage; 
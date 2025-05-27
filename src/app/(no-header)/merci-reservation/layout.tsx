import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci pour votre réservation - Patient1st",
  description: "Votre rendez-vous a été confirmé avec succès. Découvrez les prochaines étapes.",
  icons: {
    icon: '/image/favicon.ico',
  },
};

export default function MerciReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
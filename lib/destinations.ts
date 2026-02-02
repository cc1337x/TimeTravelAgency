export interface Destination {
  slug: string;
  title: string;
  era: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
  recommendedDuration: string;
  riskLevel: "low" | "medium" | "high";
  heroImage: string;
  whyGo: string[];
  mustSee: {
    title: string;
    description: string;
  }[];
  rules: {
    title: string;
    content: string;
  }[];
}

export const destinations: Destination[] = [
  {
    slug: "paris-1889",
    title: "Paris 1889",
    era: "Belle Époque",
    tags: ["Belle Époque", "Culture", "Lumières"],
    shortDescription:
      "Découvrez la Tour Eiffel lors de son inauguration et l'effervescence de l'Exposition Universelle.",
    fullDescription:
      "Plongez au cœur de la Belle Époque parisienne lors de l'Exposition Universelle de 1889. Assistez à l'inauguration de la Tour Eiffel, côtoyez les artistes impressionnistes et vivez l'effervescence culturelle qui a façonné le Paris moderne.",
    recommendedDuration: "3-5 jours",
    riskLevel: "low",
    heroImage: "/destinations/paris-1889-hero.webp",
    whyGo: [
      "Assistez à l'inauguration de la Tour Eiffel, symbole d'innovation",
      "Rencontrez les grands artistes de l'impressionnisme dans les cafés de Montmartre",
      "Vivez l'effervescence de l'Exposition Universelle avec ses 32 millions de visiteurs",
    ],
    mustSee: [
      {
        title: "Tour Eiffel",
        description:
          "Montez au sommet de la tour fraîchement construite et admirez Paris comme jamais auparavant.",
      },
      {
        title: "Moulin Rouge",
        description:
          "Assistez aux spectacles mythiques du cabaret le plus célèbre du monde.",
      },
      {
        title: "Café de Flore",
        description:
          "Partagez un café avec les intellectuels et artistes de l'époque.",
      },
    ],
    rules: [
      {
        title: "Code vestimentaire",
        content:
          "Vêtements d'époque fournis. Les tenues modernes sont strictement interdites pour préserver l'intégrité temporelle.",
      },
      {
        title: "Interactions sociales",
        content:
          "Évitez de mentionner des événements futurs. Nos agents vous briefent sur les sujets de conversation appropriés.",
      },
      {
        title: "Photographie",
        content:
          "Les appareils modernes sont interdits. Des daguerréotypes d'époque sont disponibles à la location.",
      },
    ],
  },
  {
    slug: "cretace",
    title: "Crétacé",
    era: "-66 millions d'années",
    tags: ["Aventure", "Nature extrême", "Risque élevé"],
    shortDescription:
      "Une expédition au cœur de l'ère des dinosaures pour les aventuriers les plus audacieux.",
    fullDescription:
      "Voyagez 66 millions d'années dans le passé pour une expédition unique au cœur du Crétacé. Observez les T-Rex, Tricératops et Ptéranodons dans leur habitat naturel. Une aventure réservée aux plus audacieux.",
    recommendedDuration: "1-2 jours",
    riskLevel: "high",
    heroImage: "/destinations/cretace-hero.webp",
    whyGo: [
      "Observez les dinosaures dans leur habitat naturel, une expérience unique",
      "Explorez des paysages préhistoriques d'une beauté sauvage inégalée",
      "Vivez l'adrénaline d'une aventure temporelle extrême",
    ],
    mustSee: [
      {
        title: "Vallée des Géants",
        description:
          "Observez les plus grands dinosaures herbivores en toute sécurité depuis notre poste d'observation blindé.",
      },
      {
        title: "Nid de Vélociraptors",
        description:
          "Une approche contrôlée pour observer ces créatures fascinantes à distance sécurisée.",
      },
      {
        title: "Lac Primordial",
        description:
          "Découvrez l'écosystème aquatique du Crétacé et ses créatures marines.",
      },
    ],
    rules: [
      {
        title: "Équipement obligatoire",
        content:
          "Combinaison de protection renforcée, balise de localisation et kit de survie fournis. Port obligatoire en permanence.",
      },
      {
        title: "Zones interdites",
        content:
          "Ne jamais sortir des zones balisées. Les territoires de chasse des grands prédateurs sont formellement interdits.",
      },
      {
        title: "Protocole d'urgence",
        content:
          "En cas d'alerte, retour immédiat au portail temporel. Nos équipes de sécurité sont formées à l'extraction d'urgence.",
      },
    ],
  },
  {
    slug: "florence-1504",
    title: "Florence 1504",
    era: "Renaissance",
    tags: ["Renaissance", "Art", "Romantique"],
    shortDescription:
      "Vivez l'apogée de la Renaissance aux côtés de Léonard de Vinci et Michel-Ange.",
    fullDescription:
      "Immergez-vous dans la Florence de la Renaissance, capitale mondiale de l'art et de la culture. Assistez à la création du David de Michel-Ange, croisez Léonard de Vinci dans les rues pavées et découvrez l'effervescence artistique qui a changé le monde.",
    recommendedDuration: "3-5 jours",
    riskLevel: "medium",
    heroImage: "/destinations/florence-1504-hero.webp",
    whyGo: [
      "Assistez à l'achèvement du David de Michel-Ange, chef-d'œuvre absolu",
      "Croisez Léonard de Vinci travaillant sur ses inventions révolutionnaires",
      "Découvrez l'architecture et l'art de la Renaissance à leur apogée",
    ],
    mustSee: [
      {
        title: "Atelier de Michel-Ange",
        description:
          "Observez le maître au travail sur ses sculptures monumentales.",
      },
      {
        title: "Palazzo Vecchio",
        description:
          "Explorez le cœur politique de Florence et ses fresques somptueuses.",
      },
      {
        title: "Ponte Vecchio",
        description:
          "Flânez sur le célèbre pont et découvrez les ateliers d'orfèvrerie.",
      },
    ],
    rules: [
      {
        title: "Langue et dialecte",
        content:
          "Cours intensif d'italien renaissance fourni. Nos traducteurs neuronaux sont également disponibles en option.",
      },
      {
        title: "Politique et religion",
        content:
          "Évitez tout commentaire sur les Médicis ou l'Église. La période est politiquement sensible.",
      },
      {
        title: "Transactions",
        content:
          "Florins d'époque fournis. N'utilisez jamais de monnaie moderne ou d'objets anachroniques.",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

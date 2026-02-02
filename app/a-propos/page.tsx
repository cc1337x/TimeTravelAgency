import { Shield, Eye, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Sécurité absolue",
    description:
      "Votre sécurité est notre priorité numéro un. Nos protocoles sont conçus pour minimiser tout risque et garantir un retour en toute sérénité.",
  },
  {
    icon: Eye,
    title: "Immersion totale",
    description:
      "Nous créons des expériences authentiques qui vous transportent véritablement dans une autre époque, sans compromis sur le réalisme.",
  },
  {
    icon: Heart,
    title: "Sur-mesure",
    description:
      "Chaque voyage est unique. Nous personnalisons chaque détail selon vos préférences pour une aventure qui vous ressemble.",
  },
  {
    icon: Users,
    title: "Accompagnement expert",
    description:
      "Nos agents IA et nos équipes sur le terrain vous accompagnent avant, pendant et après votre voyage temporel.",
  },
];

const safetyMeasures = [
  {
    title: "Protocoles de non-interférence",
    description:
      "Nos systèmes avancés surveillent en permanence les risques de paradoxes temporels et interviennent automatiquement si nécessaire.",
  },
  {
    title: "Équipement de protection",
    description:
      "Chaque voyageur reçoit un équipement adapté à sa destination : combinaisons d'époque, balises de localisation, et kits de survie si nécessaire.",
  },
  {
    title: "Équipes d'extraction",
    description:
      "Des équipes spécialisées sont présentes sur chaque époque, prêtes à intervenir en cas d'urgence pour un rapatriement immédiat.",
  },
  {
    title: "Formation préparatoire",
    description:
      "Avant chaque voyage, vous bénéficiez d'une formation complète sur les coutumes, langues et dangers potentiels de votre destination.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Notre histoire
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground max-w-4xl mx-auto text-balance">
            Redéfinir les frontières du voyage
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            TimeTravel Agency est née d&apos;une vision audacieuse : permettre
            à chacun de vivre l&apos;histoire, non pas comme spectateur, mais
            comme participant.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
              Notre mission
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Nous croyons que comprendre le passé est essentiel pour bâtir
              l&apos;avenir. Notre mission est de créer des expériences de
              voyage temporel sûres, immersives et transformatrices qui
              permettent à nos clients de toucher l&apos;histoire du doigt.
              Chaque voyage est une opportunité d&apos;apprentissage, de
              découverte et d&apos;émerveillement.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              Nos valeurs
            </h2>
            <p className="mt-4 text-muted-foreground">
              Les principes qui guident chacune de nos actions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-card border border-border rounded-2xl transition-all duration-300 hover:border-primary/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Section */}
        <div>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Votre sécurité
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground">
              Comment nous assurons votre sécurité
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              La sécurité n&apos;est pas une option, c&apos;est notre engagement
              fondamental.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {safetyMeasures.map((measure, index) => (
              <div
                key={measure.title}
                className="relative p-6 bg-card border border-border rounded-2xl"
              >
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 mt-2">
                  {measure.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {measure.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Note */}
        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-4 bg-glass border border-glass-border rounded-2xl">
            <p className="text-muted-foreground italic">
              &quot;Le temps n&apos;attend personne, mais avec TimeTravel Agency, vous
              pouvez le rattraper.&quot;
            </p>
            <p className="text-primary font-medium mt-2">
              — L&apos;équipe TimeTravel Agency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

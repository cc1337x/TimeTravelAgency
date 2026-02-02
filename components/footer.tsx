import Link from "next/link";
import { AnimateInView } from "@/components/animate-in-view";

const footerLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/planifier", label: "Planifier" },
  { href: "/faq", label: "FAQ" },
  { href: "/a-propos", label: "À propos" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <AnimateInView className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                TT
              </span>
            </div>
            <span className="text-xl font-semibold tracking-wide text-foreground">
              TimeTravel Agency
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            TimeTravel Agency est une expérience fictive créée à des fins de
            démonstration. Aucun voyage temporel réel n&apos;est proposé. Toute
            ressemblance avec des technologies existantes ou futures serait
            purement fortuite.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} TimeTravel Agency. Tous droits
            réservés.
          </p>
        </div>
      </AnimateInView>
    </footer>
  );
}

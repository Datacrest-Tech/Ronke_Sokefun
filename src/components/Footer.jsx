import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { footer, nav, socialLinks, secondaryLinks } from "../data/content";

const ICONS = { Facebook, Instagram, YouTube: Youtube };

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <p className="font-display text-lg text-white">{nav.brand}</p>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {secondaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-xs text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = ICONS[link.label];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  {Icon ? <Icon size={18} /> : link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6 border-t border-white/10">
          <p className="text-xs text-white/50 text-center">{footer.status}</p>
          <p className="text-xs text-white/50">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

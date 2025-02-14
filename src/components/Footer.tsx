import { Crown, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-black to-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Crown className="h-8 w-8 text-purple-500" />
                <div className="absolute -bottom-1 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500 rounded-full" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
                Ludopathyland
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              La tua fonte affidabile per confronti, recensioni e guide nel mondo dei casinò online.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Link Rapidi</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/comparazione" className="text-gray-400 hover:text-purple-400">Confronto Casinò</Link></li>
              <li><Link to="/banking" className="text-gray-400 hover:text-purple-400">Metodi di Pagamento</Link></li>
              <li><Link to="/strategie" className="text-gray-400 hover:text-purple-400">Trucchi e Strategie</Link></li>
              <li><Link to="/guadagni" className="text-gray-400 hover:text-purple-400">Guadagno Online</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-purple-400">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Supporto</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:supporto@ludopathyland.com" className="flex items-center gap-2 text-gray-400 hover:text-purple-400">
                  <Mail className="h-4 w-4" />
                  supporto@ludopathyland.com
                </a>
              </li>
              <li>
                <a href="tel:+390212345678" className="flex items-center gap-2 text-gray-400 hover:text-purple-400">
                  <Phone className="h-4 w-4" />
                  +39 02 1234567
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-purple-400">
                  <MapPin className="h-4 w-4" />
                  Milano, Italia
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">
              Iscriviti per ricevere offerte esclusive e aggiornamenti.
            </p>
            <form className="mt-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Inserisci la tua email"
                  className="flex-1 rounded-lg bg-white/5 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button variant="primary" size="sm">Iscriviti</Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p>&copy; 2025 Ludopathyland. Tutti i diritti riservati.</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-purple-400">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-purple-400">Termini di Servizio</Link>
              <Link to="/responsible-gaming" className="hover:text-purple-400">Gioco Responsabile</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Crown, Menu } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Crown className="h-8 w-8 text-purple-500" />
            <div className="absolute -bottom-1 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500 rounded-full" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            Ludopathyland
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#casino" className="hover:text-purple-400">Casinò</a>
          <a href="#banking" className="hover:text-purple-400">Banche</a>
          <a href="#tricks" className="hover:text-purple-400">Trucchi</a>
          <a href="#earnings" className="hover:text-purple-400">Guadagno</a>
          <a href="#blog" className="hover:text-purple-400">Blog</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">Accedi</Button>
          <Button variant="primary" size="sm">Registrati</Button>
          <Menu className="h-6 w-6 md:hidden" />
        </div>
      </div>
    </nav>
  );
}
import { useFavorites } from '../hooks/useFavorites';
import { CasinoCard } from './CasinoCard';
import { Heart } from 'lucide-react';

export function FavoritesList() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Nessun preferito</h3>
        <p className="text-gray-400">
          Aggiungi i tuoi casinò preferiti per trovarli facilmente qui
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {favorites.map((casino) => (
        <CasinoCard key={casino.name} {...casino} />
      ))}
    </div>
  );
}
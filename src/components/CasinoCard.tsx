import { Star, ExternalLink } from 'lucide-react';
import { Button } from './Button';

interface CasinoCardProps {
  name: string;
  rating: number;
  bonus: string;
  image: string;
  features: string[];
}

export function CasinoCard({ name, rating, bonus, image, features }: CasinoCardProps) {
  return (
    <div className="group relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="h-16 w-16 rounded-lg object-cover" />
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <p className="text-lg font-semibold text-green-400">{bonus}</p>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-300">• {feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex gap-3">
        <Button variant="primary" className="flex-1">
          Ottieni Bonus
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          Recensione <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
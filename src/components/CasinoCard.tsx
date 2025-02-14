import { Star, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

interface CasinoCardProps {
  name: string;
  rating: number;
  bonus: string;
  image: string;
  features: string[];
  affiliateLink: string;
}

export function CasinoCard({ name, rating, bonus, image, features, affiliateLink }: CasinoCardProps) {
  const { t } = useTranslation();
  const casinoSlug = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="group relative flex flex-col rounded-3xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-pastel">
      <div className="absolute -top-3 -right-3">
        <Sparkles className="h-6 w-6 text-pastel-yellow animate-bounce-slow" />
      </div>
      
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="h-16 w-16 rounded-2xl object-cover ring-4 ring-pastel-purple/20" />
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'fill-pastel-yellow text-pastel-yellow' : 'text-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex-grow">
        <p className="text-lg font-semibold text-pastel-green">{bonus}</p>
        <ul className="mt-2 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-pastel-purple"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-stretch gap-3">
        <Button 
          variant="primary" 
          className="flex-1 h-[42px] flex items-center justify-center bg-gradient-to-r from-pastel-purple to-pastel-pink hover:opacity-90"
          onClick={() => window.open(affiliateLink, '_blank', 'noopener,noreferrer')}
        >
          {t('buttons.getBonus')}
        </Button>
        <Link to={`/casino/${casinoSlug}`} className="h-[42px]">
          <Button 
            variant="outline" 
            className="h-full w-[120px] flex items-center justify-center border-pastel-purple text-pastel-purple hover:bg-pastel-purple/10"
          >
            {t('buttons.review')}
          </Button>
        </Link>
      </div>
    </div>
  );
}
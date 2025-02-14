import { Star, ExternalLink, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import { useFavorites } from '../hooks/useFavorites';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedCard } from './AnimatedCard';

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
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const casinoSlug = name.toLowerCase().replace(/\s+/g, '-');
  const favorite = isFavorite(name);

  return (
    <AnimatedCard>
      <div className="group relative flex flex-col rounded-3xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-pastel h-full">
        <motion.div 
          className="absolute -top-3 -right-3 flex gap-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Sparkles className="h-6 w-6 text-pastel-yellow animate-float" />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => favorite ? removeFavorite(name) : addFavorite({ name, rating, bonus, image, features, affiliateLink })}
            className="h-6 w-6 flex items-center justify-center"
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart 
              className={`h-5 w-5 transition-colors ${
                favorite ? 'fill-pastel-red text-pastel-red' : 'text-gray-400 hover:text-pastel-red'
              }`}
            />
          </motion.button>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <motion.img 
            src={image} 
            alt={name} 
            className="h-16 w-16 rounded-2xl object-cover ring-4 ring-pastel-purple/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star
                    className={`h-4 w-4 ${
                      i < rating ? 'fill-pastel-yellow text-pastel-yellow' : 'text-gray-400'
                    }`}
                  />
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex-grow">
          <p className="text-lg font-semibold text-pastel-green">{bonus}</p>
          <ul className="mt-2 space-y-1">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-pastel-purple"></span>
                {feature}
              </motion.li>
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
    </AnimatedCard>
  );
}
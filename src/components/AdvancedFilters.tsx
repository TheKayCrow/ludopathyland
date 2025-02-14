```typescript
import { useState } from 'react';
import { Filter, Search, Star, Gift, CreditCard, X } from 'lucide-react';
import { Button } from './Button';

interface FiltersState {
  rating: number | null;
  minBonus: number | null;
  maxBonus: number | null;
  paymentMethods: string[];
  features: string[];
}

interface AdvancedFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FiltersState) => void;
}

const PAYMENT_METHODS = [
  'PayPal',
  'Visa/Mastercard',
  'Bonifico',
  'Skrill',
  'Neteller',
  'Paysafecard',
  'Cryptocurrency'
];

const FEATURES = [
  'Live Casino',
  'Mobile App',
  'VIP Program',
  'Fast Withdrawals',
  'Live Chat 24/7',
  'Italian Support',
  'No Account Casino'
];

export function AdvancedFilters({ isOpen, onClose, onApplyFilters }: AdvancedFiltersProps) {
  const [filters, setFilters] = useState<FiltersState>({
    rating: null,
    minBonus: null,
    maxBonus: null,
    paymentMethods: [],
    features: []
  });

  const handlePaymentMethodToggle = (method: string) => {
    setFilters(prev => ({
      ...prev,
      paymentMethods: prev.paymentMethods.includes(method)
        ? prev.paymentMethods.filter(m => m !== method)
        : [...prev.paymentMethods, method]
    }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFilters(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const resetFilters = () => {
    setFilters({
      rating: null,
      minBonus: null,
      maxBonus: null,
      paymentMethods: [],
      features: []
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-2xl w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Filter className="h-6 w-6 text-pastel-purple" />
            <h2 className="text-xl font-bold">Filtri Avanzati</h2>
          </div>
          <Button variant="outline" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Rating Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-pastel-yellow" />
              Valutazione Minima
            </h3>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(rating => (
                <button
                  key={rating}
                  onClick={() => setFilters(prev => ({ ...prev, rating }))}
                  className={`p-2 rounded-lg transition-all ${
                    filters.rating === rating
                      ? 'bg-pastel-yellow text-gray-900'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {rating}★
                </button>
              ))}
            </div>
          </div>

          {/* Bonus Range */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Gift className="h-5 w-5 text-pastel-green" />
              Range Bonus
            </h3>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-400 mb-1">Min €</label>
                <input
                  type="number"
                  value={filters.minBonus || ''}
                  onChange={e => setFilters(prev => ({ ...prev, minBonus: Number(e.target.value) || null }))}
                  className="w-full rounded-lg bg-gray-800 px-4 py-2 text-white focus:ring-2 focus:ring-pastel-purple"
                  placeholder="0"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-400 mb-1">Max €</label>
                <input
                  type="number"
                  value={filters.maxBonus || ''}
                  onChange={e => setFilters(prev => ({ ...prev, maxBonus: Number(e.target.value) || null }))}
                  className="w-full rounded-lg bg-gray-800 px-4 py-2 text-white focus:ring-2 focus:ring-pastel-purple"
                  placeholder="1000"
                />
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-pastel-blue" />
              Metodi di Pagamento
            </h3>
            <div className="flex flex-wrap gap-2">
              {PAYMENT_METHODS.map(method => (
                <button
                  key={method}
                  onClick={() => handlePaymentMethodToggle(method)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    filters.paymentMethods.includes(method)
                      ? 'bg-pastel-blue text-gray-900'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Caratteristiche</h3>
            <div className="flex flex-wrap gap-2">
              {FEATURES.map(feature => (
                <button
                  key={feature}
                  onClick={() => handleFeatureToggle(feature)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    filters.features.includes(feature)
                      ? 'bg-pastel-purple text-gray-900'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" onClick={resetFilters}>
            Reset
          </Button>
          <Button variant="primary" onClick={() => onApplyFilters(filters)}>
            Applica Filtri
          </Button>
        </div>
      </div>
    </div>
  );
}
```
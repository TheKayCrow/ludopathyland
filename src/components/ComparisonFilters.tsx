import { useTranslation } from 'react-i18next';

interface ComparisonFiltersProps {
  onFilterChange: (type: string, value: string) => void;
  filters: {
    rating: string;
    bonus: string;
    payment: string;
  };
}

export function ComparisonFilters({ onFilterChange, filters }: ComparisonFiltersProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <select
        value={filters.rating}
        onChange={(e) => onFilterChange('rating', e.target.value)}
        className="flex-1 min-w-[200px] max-w-[250px] rounded-full bg-gray-800/50 px-6 py-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:bg-gray-900"
      >
        <option value="all">{t('comparison.filters.rating.label')}</option>
        <option value="5">{t('comparison.filters.rating.5stars')}</option>
        <option value="4">{t('comparison.filters.rating.4plusStars')}</option>
        <option value="3">{t('comparison.filters.rating.3plusStars')}</option>
      </select>
      
      <select
        value={filters.bonus}
        onChange={(e) => onFilterChange('bonus', e.target.value)}
        className="flex-1 min-w-[200px] max-w-[250px] rounded-full bg-gray-800/50 px-6 py-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:bg-gray-900"
      >
        <option value="all">{t('comparison.filters.bonus.label')}</option>
        <option value="deposit">{t('comparison.filters.bonus.deposit')}</option>
        <option value="spins">{t('comparison.filters.bonus.spins')}</option>
        <option value="cashback">{t('comparison.filters.bonus.cashback')}</option>
      </select>
      
      <select
        value={filters.payment}
        onChange={(e) => onFilterChange('payment', e.target.value)}
        className="flex-1 min-w-[200px] max-w-[250px] rounded-full bg-gray-800/50 px-6 py-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:bg-gray-900"
      >
        <option value="all">{t('comparison.filters.payment.label')}</option>
        <option value="card">{t('comparison.filters.payment.card')}</option>
        <option value="bank">{t('comparison.filters.payment.bank')}</option>
        <option value="crypto">{t('comparison.filters.payment.crypto')}</option>
      </select>
    </div>
  );
}
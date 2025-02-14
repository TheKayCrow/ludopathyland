import { Button } from './Button';
import { useTranslation } from 'react-i18next';
import { earningMethods } from '../data/earnings';

export function EarningsSection() {
  const { t } = useTranslation();

  return (
    <section id="earnings" className="py-20 bg-white/5">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="section-title">{t('sections.earnings.title')}</h2>
        <p className="section-subtitle">{t('sections.earnings.subtitle')}</p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {earningMethods.slice(0, 3).map((method, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">{method.title}</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between">
                  <span className="text-gray-400">Potenziale:</span>
                  <span className="text-green-400">{method.potential}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Difficoltà:</span>
                  <span>{method.difficulty}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Tempo:</span>
                  <span>{method.timeRequired}</span>
                </li>
              </ul>
              <Button variant="outline" size="sm" className="w-full">
                {t('buttons.learnMore')}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Button } from './Button';
import { useTranslation } from 'react-i18next';
import { strategies } from '../data/strategies';

export function TricksSection() {
  const { t } = useTranslation();

  return (
    <section id="tricks" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="section-title">{t('sections.strategies.title')}</h2>
        <p className="section-subtitle">{t('sections.strategies.subtitle')}</p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all flex flex-col">
              <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{strategy.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-purple-400">Difficoltà: {strategy.difficulty}</span>
                <Button variant="outline" size="sm">{t('buttons.readGuide')}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
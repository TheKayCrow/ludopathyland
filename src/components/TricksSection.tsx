import { Button } from './Button';
import { strategies } from '../data/strategies';

export function TricksSection() {
  return (
    <section id="tricks" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-2">Trucchi e Strategie</h2>
        <p className="text-gray-400 mb-8">Guide dettagliate e strategie vincenti per il gioco responsabile</p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all flex flex-col">
              <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{strategy.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-purple-400">Difficoltà: {strategy.difficulty}</span>
                <Button variant="outline" size="sm">Leggi Guida</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
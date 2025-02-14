```typescript
import { useState } from 'react';
import { Button } from './Button';
import { Calculator, Percent, DollarSign, RefreshCw } from 'lucide-react';

interface BonusCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BonusCalculator({ isOpen, onClose }: BonusCalculatorProps) {
  const [depositAmount, setDepositAmount] = useState<number>(0);
  const [bonusPercentage, setBonusPercentage] = useState<number>(100);
  const [wagering, setWagering] = useState<number>(35);
  const [maxBonus, setMaxBonus] = useState<number>(200);

  const calculateBonus = () => {
    const bonusAmount = Math.min((depositAmount * bonusPercentage) / 100, maxBonus);
    const wageringRequirement = (depositAmount + bonusAmount) * wagering;
    return {
      bonusAmount,
      totalBalance: depositAmount + bonusAmount,
      wageringRequirement
    };
  };

  const result = calculateBonus();

  const resetCalculator = () => {
    setDepositAmount(0);
    setBonusPercentage(100);
    setWagering(35);
    setMaxBonus(200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-lg w-full p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-pastel-purple" />
            <h2 className="text-xl font-bold">Calcolatore Bonus</h2>
          </div>
          <Button variant="outline" size="sm" onClick={onClose}>
            Chiudi
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Importo Deposito
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(Number(e.target.value))}
                className="w-full rounded-lg bg-gray-800 pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-pastel-purple"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Percentuale Bonus
            </label>
            <div className="relative">
              <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="number"
                value={bonusPercentage}
                onChange={(e) => setBonusPercentage(Number(e.target.value))}
                className="w-full rounded-lg bg-gray-800 pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-pastel-purple"
                placeholder="100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Requisito Wagering
            </label>
            <div className="relative">
              <RefreshCw className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="number"
                value={wagering}
                onChange={(e) => setWagering(Number(e.target.value))}
                className="w-full rounded-lg bg-gray-800 pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-pastel-purple"
                placeholder="35"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Bonus Massimo
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="number"
                value={maxBonus}
                onChange={(e) => setMaxBonus(Number(e.target.value))}
                className="w-full rounded-lg bg-gray-800 pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-pastel-purple"
                placeholder="200"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-400">Bonus Ottenibile:</span>
            <span className="text-pastel-green font-semibold">
              €{result.bonusAmount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Saldo Totale:</span>
            <span className="text-pastel-blue font-semibold">
              €{result.totalBalance.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Da Giocare:</span>
            <span className="text-pastel-purple font-semibold">
              €{result.wageringRequirement.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={resetCalculator}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
```
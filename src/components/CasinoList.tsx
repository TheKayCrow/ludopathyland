import { CasinoCard } from './CasinoCard';
import { Casino } from '../types';

interface CasinoListProps {
  casinos: Casino[];
}

export function CasinoList({ casinos }: CasinoListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {casinos.map((casino, index) => (
        <CasinoCard key={index} {...casino} />
      ))}
    </div>
  );
}
import { useState, useEffect } from 'react';
import { Casino } from '../types';
import { getCasinos } from '../services/casinoService';

export function useCasinos() {
  const [casinos, setCasinos] = useState<Casino[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCasinos() {
      try {
        const data = await getCasinos();
        setCasinos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Errore nel caricamento dei casinò');
      } finally {
        setLoading(false);
      }
    }

    fetchCasinos();
  }, []);

  return { casinos, loading, error };
}
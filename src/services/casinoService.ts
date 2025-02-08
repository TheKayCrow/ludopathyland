import { Casino } from '../types';
import { featuredCasinos } from '../data/casinos';

// Simulazione di una chiamata API
export async function getCasinos(): Promise<Casino[]> {
  // In un'implementazione reale, questa sarebbe una chiamata API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(featuredCasinos);
    }, 1000);
  });
}
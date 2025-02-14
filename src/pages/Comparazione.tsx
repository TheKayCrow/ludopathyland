```typescript
import { useTranslation } from 'react-i18next';
import { CasinoList } from '../components/CasinoList';
import { Loader } from '../components/Loader';
import { useCasinos } from '../hooks/useCasinos';
import { AnimatedSection } from '../components/AnimatedSection';

export function Comparazione() {
  const { t } = useTranslation();
  const { casinos, loading } = useCasinos();

  if (loading) return <Loader />;

  return (
    <AnimatedSection className="page-section">
      <div className="container-responsive">
        <h1 className="section-title">Comparazione Casinò</h1>
        <p className="section-subtitle">Confronta i migliori casinò online e trova quello più adatto a te</p>
        
        <CasinoList casinos={casinos} />
      </div>
    </AnimatedSection>
  );
}

export default Comparazione;
```
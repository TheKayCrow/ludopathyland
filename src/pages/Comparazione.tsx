import { useTranslation } from 'react-i18next';
import { CasinoList } from '../components/CasinoList';
import { Loader } from '../components/Loader';
import { useCasinos } from '../hooks/useCasinos';

export function Comparazione() {
  const { t } = useTranslation();
  const { casinos, loading } = useCasinos();

  if (loading) return <Loader />;

  return (
    <div className="page-section">
      <div className="container-responsive">
        <h1 className="section-title">Comparazione Casinò</h1>
        <p className="section-subtitle">Confronta i migliori casinò online e trova quello più adatto a te</p>
        
        <CasinoList casinos={casinos} />
      </div>
    </div>
  );
}
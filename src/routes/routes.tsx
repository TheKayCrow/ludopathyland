import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Comparazione } from '../pages/Comparazione';
import { CasinoDetail } from '../pages/CasinoDetail';
import { Guide } from '../pages/Guide';
import { News } from '../pages/News';
import { Layout } from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'comparazione',
        element: <Comparazione />
      },
      {
        path: 'casino/:id',
        element: <CasinoDetail />
      },
      {
        path: 'guide',
        element: <Guide />
      },
      {
        path: 'news',
        element: <News />
      }
    ]
  }
]);
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NorthBiminiHeritageTour from './pages/NorthBiminiHeritageTour';
import SouthBiminiFountainOfYouthTour from './pages/SouthBiminiFountainOfYouthTour';
import UltimateBiminiIslandTour from './pages/UltimateBiminiIslandTour';
import BiminiCruisePortGuide from './pages/BiminiCruisePortGuide';
import OneDayInBimini from './pages/OneDayInBimini';
import HistoryOfBimini from './pages/HistoryOfBimini';
import BiminiShoreExcursionsFAQ from './pages/BiminiShoreExcursionsFAQ';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="north-bimini-heritage-tour" element={<NorthBiminiHeritageTour />} />
        <Route path="south-bimini-fountain-of-youth-tour" element={<SouthBiminiFountainOfYouthTour />} />
        <Route path="ultimate-bimini-island-tour" element={<UltimateBiminiIslandTour />} />
        <Route path="bimini-cruise-port-guide" element={<BiminiCruisePortGuide />} />
        <Route path="one-day-in-bimini-from-a-cruise" element={<OneDayInBimini />} />
        <Route path="history-of-bimini" element={<HistoryOfBimini />} />
        <Route path="bimini-shore-excursions-faq" element={<BiminiShoreExcursionsFAQ />} />
      </Route>
    </Routes>
  );
}

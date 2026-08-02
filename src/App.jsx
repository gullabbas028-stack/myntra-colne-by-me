import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BagPage from './pages/BagPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import HomeLivingPage from './pages/HomeLivingPage';
import BeautyPage from './pages/BeautyPage';
import StudioPage from './pages/StudioPage';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bag" element={<BagPage />} />
        <Route path="/categories/men" element={<MenPage />} />
        <Route path="/categories/women" element={<WomenPage />} />
        <Route path="/categories/kids" element={<KidsPage />} />
        <Route path="/categories/home-living" element={<HomeLivingPage />} />
        <Route path="/categories/beauty" element={<BeautyPage />} />
        <Route path="/categories/studio" element={<StudioPage />} />
      </Routes>
      <CartDrawer />
    </>
  );
}

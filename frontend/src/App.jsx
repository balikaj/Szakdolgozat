import { Routes, Route, Navigate } from 'react-router-dom';
import Fooldal from './pages/Fooldal';
import Belepes from './pages/Belepes';
import Esemeny from './pages/Esemeny';
import Hely from './pages/Hely';
import Bulijaim from './pages/Bulijaim';
import Bekuldes from './pages/Bekuldes';
import Profil from './pages/Profil';
import Admin from './pages/Admin';


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Fooldal />} />
            <Route path="/belepes.html" element={<Belepes />} />
            <Route path="/esemeny.html" element={<Esemeny />} />
            <Route path="/hely.html" element={<Hely />} />
            <Route path="/bulijaim.html" element={<Bulijaim />} />
            <Route path="/bekuldes.html" element={<Bekuldes />} />
            <Route path="/profil.html" element={<Profil />} />
            <Route path="/admin.html" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
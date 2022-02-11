import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from '../src/pages/Home';
import { Units } from './pages/Units';
import { Civilizations } from './pages/Civilizations';
import { Stats } from './pages/Stats';




export default () => (
    <BrowserRouter>
        <Routes>   
            <Route path="/" element={<Home/>}/>
            <Route path="/units/" element={<Units/>}/>
            <Route path="/civilizations/" element={<Civilizations/>}/>
            <Route path="/stats/" element={<Stats/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);  
import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import CreatorLayout from './components/creator/CreatorLayout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<AppLayout />} />
                <Route exact path='/claims' element={<Blank />} />
                <Route exact path='/creator' element={<CreatorLayout />} />
                <Route exact path='/settings' element={<Blank />} />
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

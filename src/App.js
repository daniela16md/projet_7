import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import Logements from './pages/Logement';

function App() {
  return (
    <Router>
      <nav className='appdiv'>
        <ul className='navapp'>
          <li>
            <Link to="/"  className='liapp'>Home</Link>
          </li>
          <li>
            <Link to="/logements"  className='liapp'>Logements</Link>
          </li>
          <li>
            <Link to="*"  className='liapp'>Error</Link>
          </li>
         
          <li>
            <Link to="/apropos"  className='liapp'>À Propos</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logements />} />
        <Route path="*" element={<Error />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </Router>
  );
}

export default App;


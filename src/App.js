import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import Logements from './pages/Logement';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/apropos">À Propos</Link>
          </li>
          <li>
            <Link to="/error">Error</Link>
          </li>
          <li>
            <Link to="/logements">Logements</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;


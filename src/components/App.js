import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Correct import

import Header from './Header';
import Welcome from './Welcome';
import Memorials from './Memorials';
import MemorialPage from './MemorialPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<Welcome />} />
        <Route path="/memorials" element={<Memorials />} />
        <Route path="/memorials/:id" element={<MemorialPage />} />
      </Routes>
    </Router>
  );
}

export default App;

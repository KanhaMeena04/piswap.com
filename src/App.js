import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import AdminDashboard from './Component/AdminDashboard';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App; 
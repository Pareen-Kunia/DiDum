import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Intro from './Components/ContentPages/Intro';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
    <ScrollToTop />
    <div id="root">
      <Header />
      <main className="main-content">
        <Routes>
          
          <Route path="/*" element={<Intro />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

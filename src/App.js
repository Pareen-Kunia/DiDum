import React from 'react';
import './App.css';
import  Header  from './Components/Header';
import Footer from './Components/Footer';
import Intro from './Components/ContentPages/Intro';

function App() {
  return (
    <div id="root">
      <Header />
      <main className="main-content">
       <Intro />
      </main>
      <Footer />
    </div>
  );
}

export default App;

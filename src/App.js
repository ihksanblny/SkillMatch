import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LandingPage from './pages/landingpages';

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;

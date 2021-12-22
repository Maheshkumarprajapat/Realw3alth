import React, { useState, useEffect } from 'react';
import Traders from './components/Traders';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Preloader from './components/Preloader';
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <React.Fragment>
      {
        loading ?
          <Preloader />
          : <>
            <Header />
            <Home />
            <Pricing />
            <Traders />
            <Footer />
          </>

      }
    </React.Fragment>
  )
}

export default App

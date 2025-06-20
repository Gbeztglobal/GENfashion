import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from "./components/HERO/hero";
import Product from "./components/product/Product";
import TopRated from "./components/TopRated/TopRated";
import Best_sales from './components/Best_Sales/Best_sales';
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Product2 from "./components/product2/Product2";
import Testimonial from './components/Testimonial/Testimonial';
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import MensCollection from './components/MensCollection/MensCollection';
import AOS from "aos";
import "aos/dist/aos.css";
import WomensCollection from './components/WomensCollection/WomensCollection';
import Assesories from "./components/Assesories/Assesories";
import TopRated2 from './components/TopRated2/TopRated2';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-in-out-sine", delay: 100 });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar handleOrderPopup={handleOrderPopup} />
        
        {/*Routes*/}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <Hero handleOrderPopup={handleOrderPopup} />
              <Product />
              <TopRated handleOrderPopup={handleOrderPopup} />
              <Banner />
              <Subscribe />
              <Product2 />
              <Testimonial />
              <Footer />
            </>
          } />
          <Route path="/MensCollection" element={<MensCollection />} />
          <Route path="/WomensCollection" element={<WomensCollection />} />
          <Route path="/TopRated2" element={<TopRated2 />} />
          <Route path="/Assesories" element={<Assesories />} />
        </Routes>

        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};

export default App;

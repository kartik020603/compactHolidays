import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import TrainBooking from './pages/TrainBooking';
import PassportVisa from './pages/PassportVisa';
import CabsBuses from './pages/CabsBuses';
import TourTravel from './pages/TourTravel';
import AirlineHelicopter from './pages/AirlineHelicopter';
import Forex from './pages/Forex';
import Cruise from './pages/Cruise';
import TravelInsurance from './pages/TravelInsurance';
import AboutUs from './pages/AboutUs';
import Reviews from './pages/Reviews';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/train-booking" element={<TrainBooking />} />
            <Route path="/passport-visa" element={<PassportVisa />} />
            <Route path="/cabs-buses" element={<CabsBuses />} />
            <Route path="/tour-travel" element={<TourTravel />} />
            <Route path="/airline-helicopter" element={<AirlineHelicopter />} />
            <Route path="/forex" element={<Forex />} />
            <Route path="/cruise" element={<Cruise />} />
            <Route path="/insurance" element={<TravelInsurance />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;

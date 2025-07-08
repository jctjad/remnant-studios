import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './assets/Home';
import About from './assets/About';
import Security from './assets/Security';
import Cowabunga from './assets/Cowabunga';
import Contact from './assets/Contact';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/cowabunga" element={<Cowabunga />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
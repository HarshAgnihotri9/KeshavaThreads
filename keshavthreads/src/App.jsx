import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import KeshavVastramGallery from "./components/KeshavVastramGallery";
import ProductPage from "./components/ProductPage";
import SummerCollection from "./components/SummerCollection";
import Footer from "./components/Footer";
import AboutPage from "./components/NavbarComponents/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/gallery" element={<KeshavVastramGallery />} />
        <Route path="/collection" element={<SummerCollection />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

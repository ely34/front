import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil/accueil";
import Boissons from "./pages/boissons/boissons";
import Carte from "./pages/carte/carte";
import Contact from "./pages/contact/contact";
import Plats from "./pages/plats/plats";
import Footer from "./partials/Footer/Footer";
import Header from "./partials/Header/Header";
import Desserts from "./pages/desserts/desserts";
import Nous from "./pages/nous/nous";
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/boissons" element={<Boissons />} />
        <Route path="/Carte" element={<Carte />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/plats" element={<Plats />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/nous" element={<Nous />} />

       
      </Routes>
      <Footer />
    </Router>
  );
}

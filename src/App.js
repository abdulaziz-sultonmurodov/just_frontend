import NavBar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LocationsPage from "./pages/LocationsPage";
import Yakkasaroy from "./pages/locations/Yakkasaroy";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/app.css";
// import Carousel from "./components/carousel";

function App() {
  return (
    <Router>
      <NavBar />

      <Route path="/" exact component={HomePage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/locations" component={LocationsPage} exact />
      <Route path="/locations/yakkasaroy" component={Yakkasaroy} />

      <Footer />
    </Router>
  );
}

export default App;

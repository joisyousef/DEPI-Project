import Header from "./components/Header";
import Footer from "./components/Footer-main";
import Home from "./pages/home/Home";
import Blog from "./pages/blogs/Blog";
import Contact from "./pages/contactUs/contactUs";
import Service from "./pages/services/ServiceSection";
import Partners from "./pages/about/Partners";
import OrthopedicCards from "./pages/about/OrthopedicCards";
import Banner from "./pages/about/Banner";

import "./style/all.min.css";
import "./style/main.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* Conditional Rendering of HeroSection */}
      {location.pathname !== "/" && (
        <div className="hero-section">
          {/* Adjust the HeroSection to display relevant text based on the page */}
          <h1>Our Best Services</h1>
        </div>
      )}

      {/* Routes Configuration */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route
          path="/about-us"
          element={
            <>
              <Banner />
              <OrthopedicCards />
              <Partners />
            </>
          }
        />
      </Routes>

      {/* Conditional Rendering of Footer */}
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

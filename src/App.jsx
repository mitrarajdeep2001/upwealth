import Aboutus from "./Components/Aboutus";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ContactForm from "./ContactForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({duration: 600});
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
// <div className="nav_hero_img bg-no-repeat h-full">
//   {/* <Navbar /> */}
//   {/* <Hero /> */}
// </div>
// {/* <Aboutus/> */}
// <ContactForm/>

export default App;

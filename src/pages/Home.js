import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurWay from "../components/Our-way";
import JoinUs from "../components/Join-us";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import MobileBar from "../components/Mobile-bar";
import "../general.css";

const Home = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="font-all font-normal">
      <Navbar toggle={toggle} />
      <MobileBar open={open} toggle={toggle} />
      <Hero />
      <OurWay />
      <JoinUs />
      <Cta />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import { ScrollView } from "react-native";

import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <ScrollView>
      <Navbar />

      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />

      <Footer />
    </ScrollView>
  );
}
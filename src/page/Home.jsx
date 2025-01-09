import React from "react";
import { HeroSection } from "../components/HeroSection";
import { MethodologySection } from "../components/MethodologySection";
import { MainNav } from "../components/MainNav";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <MainNav />
      <main>
        <HeroSection />
        <MethodologySection />
        <Footer />
      </main>
    </div>
  );
};

export default Home;

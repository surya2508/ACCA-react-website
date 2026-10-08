import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Eligibility from "./components/Eligibility";
import Learning from "./components/Learning";
import Placement from "./components/Placement";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CallbackModal from "./components/CallbackModal";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onRequestCallback={() => setModalOpen(true)} />
      <main>
        <Hero onRequestCallback={() => setModalOpen(true)} />
        <WhyChooseUs />
        <Eligibility />
        <Learning />
        <Placement onRequestCallback={() => setModalOpen(true)} />
        <CTA onRequestCallback={() => setModalOpen(true)} />
      </main>
      <Footer />
      <CallbackModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default App;

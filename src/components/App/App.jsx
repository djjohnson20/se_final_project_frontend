import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [activeModal, setActiveModal] = useState("");
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;

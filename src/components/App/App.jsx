import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleLoginClick={handleLoginClick} />
        <Main />
        <About />
        <Footer />
      </div>
      <LoginModal
        onClose={closeActiveModal}
        activeModal={activeModal}
        isOpen={activeModal === "login"}
        onLogin={handleLoginClick}
        onRegister={handleRegisterClick}
      />
      <RegisterModal
        onClose={closeActiveModal}
        activeModal={activeModal}
        isOpen={activeModal === "register"}
        onLogin={handleLoginClick}
        onRegister={handleRegisterClick}
      />
    </div>
  );
}

export default App;

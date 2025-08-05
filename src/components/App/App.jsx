import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProtectedRoute from "../ProtectedRoute";
import { login, getCurrentUser } from "../../utils/auth";
import { newsArticles } from "../../utils/constants";
import getNewsItems from "../../utils/api";
import { apiKey } from "../../utils/constants";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [keyword, setKeyword] = useState("");
  const [newsItems, setNewsItems] = useState(newsArticles);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogIn = ({ email, password }) => {
    return login({ email, password })
      .then((loginData) => {
        const token = loginData.token;
        return getCurrentUser(token);
      })
      .then((userData) => {
        const user = userData.data.name;
        setIsLoggedIn(true);
        setCurrentUser(user);
        return user;
      })
      .catch((err) => {
        console.log("Login failed:", err.message);
      });
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
  };

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
        <Header
          handleLoginClick={handleLoginClick}
          handleLogOut={handleLogOut}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          keyword={keyword}
          setKeyword={setKeyword}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main newsItems={newsItems} setKeyword={setKeyword} />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Main newsItems={newsItems} />
                <Footer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <LoginModal
        onClose={closeActiveModal}
        activeModal={activeModal}
        isOpen={activeModal === "login"}
        onLogin={handleLogIn}
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

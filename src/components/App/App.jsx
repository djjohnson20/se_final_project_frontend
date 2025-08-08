import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import PreLoader from "../Preloader/Preloader";
import ProtectedRoute from "../ProtectedRoute";
import { login, getCurrentUser } from "../../utils/auth";
import getNewsItems from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [keyword, setKeyword] = useState("");
  const [newsItems, setNewsItems] = useState([]);
  const [ApiCall, SetapiCall] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword.trim() === "") {
      setErrorMessage("Please enter a keyword");
      return;
    }

    setErrorMessage("");
    setHasSearched(true);
    SetapiCall(true);

    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);
    const todayStr = today.toISOString().split("T")[0];
    const sevenDaysAgoStr = sevenDaysAgo.toISOString().split("T")[0];
    const pageSize = "100";

    getNewsItems({
      q: keyword,
      from: sevenDaysAgoStr,
      to: todayStr,
      pageSize: pageSize,
    })
      .then((data) => {
        setNewsItems(data.articles);
        SetapiCall(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setErrorMessage("Failed to fetch news. Please try again.");
        SetapiCall(false);
      });
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
          errorMessage={errorMessage}
          handleSubmit={handleSubmit}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {ApiCall ? (
                  <PreLoader />
                ) : newsItems.length > 0 ? (
                  <Main newsItems={newsItems} setKeyword={setKeyword} />
                ) : hasSearched ? (
                  <p>No results found. Try another keyword.</p>
                ) : null}

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

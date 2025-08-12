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
import NotFoundFace from "../../assets/not-found_v1.png";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [keyword, setKeyword] = useState("");
  const [newsItems, setNewsItems] = useState([]);
  const [ApiCall, SetapiCall] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      setIsLoggedIn(true);
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("savedArticles");
    if (saved) {
      setSavedArticles(JSON.parse(saved));
    }
  }, []);

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
        localStorage.setItem("token", token);
        return getCurrentUser(token);
      })
      .then((userData) => {
        const user = userData.data.name;
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoggedIn(true);
        setCurrentUser(user);

        const saved = localStorage.getItem("savedArticles");
        if (saved) {
          setSavedArticles(JSON.parse(saved));
        } else {
          setSavedArticles([]);
        }

        return user;
      })
      .catch((err) => {
        console.log("Login failed:", err.message);
      });
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setCurrentUser("");
    setSavedArticles([]);
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

  const handleToggleSaveArticle = (article) => {
    setSavedArticles((prevSaved) => {
      const isSaved = prevSaved.some((a) => a.url === article.url);

      const newSavedArticles = isSaved
        ? prevSaved.filter((a) => a.url !== article.url)
        : [...prevSaved, { ...article, keyword }];

      localStorage.setItem("savedArticles", JSON.stringify(newSavedArticles));

      return newSavedArticles;
    });
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
          savedArticles={savedArticles}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {ApiCall ? (
                  <PreLoader />
                ) : newsItems.length > 0 ? (
                  <Main
                    newsItems={newsItems}
                    setKeyword={setKeyword}
                    isLoggedIn={isLoggedIn}
                    savedArticles={savedArticles}
                    onToggleSave={handleToggleSaveArticle}
                    isSavedNewsPage={false}
                  />
                ) : hasSearched ? (
                  <div className="nothing">
                    <img
                      src={NotFoundFace}
                      alt="sad face"
                      className="nothing__found"
                    />
                    <p className="nothing__title">Nothing found</p>
                    <p className="nothing__description">
                      Sorry, but nothing matched
                      <br /> your search terms.
                    </p>
                  </div>
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
                <Main
                  newsItems={savedArticles}
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  onToggleSave={handleToggleSaveArticle}
                  isSavedNewsPage={true}
                />
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

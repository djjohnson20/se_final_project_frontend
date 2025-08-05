import { useState } from "react";

import "./SearchForm.css";

function SearchForm({ keyword, setKeyword }) {
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="search">
      <h1 className="search__title">What's going on in the world?</h1>
      <p className="search__text">
        Find the latest news on any topic and save them in your personal account
      </p>
      <form action="" className="search__form">
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Enter topic"
          className="search__input"
        />
        <button className="search__btn">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;

import { useState } from "react";

import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({ newsItems }) {
  return (
    <div className="main">
      <NewsCardList newsItems={newsItems} />
    </div>
  );
}

export default Main;

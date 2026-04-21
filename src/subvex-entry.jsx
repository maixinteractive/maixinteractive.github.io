import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import SubvexPage from "./SubvexPage";
import "./index.css";

const LANG_STORAGE_KEY = "maix_lang";

function getInitialLang() {
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    return saved === "en" || saved === "tr" ? saved : "tr";
  } catch {
    return "tr";
  }
}

function Root() {
  const [lang, setLang] = useState(() => getInitialLang());

  const handleSetLang = (nextLang) => {
    setLang(nextLang);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, nextLang);
    } catch {
      // no-op
    }
  };

  return (
    <SubvexPage
      lang={lang}
      setLang={handleSetLang}
    />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

export default Root;

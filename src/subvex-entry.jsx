import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import SubvexPage from "./SubvexPage";
import "./index.css";

function Root() {
  const [lang, setLang] = useState("tr");

  return (
    <SubvexPage
      lang={lang}
      setLang={setLang}
    />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

export default Root;

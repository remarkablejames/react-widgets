import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BooksContext } from "./context/BooksContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BooksContext.Provider value={{ text: "test String" }}>
    <App />
  </BooksContext.Provider>
);

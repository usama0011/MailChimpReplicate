import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import InitilizeApp from "./pages/InitilizeApp.jsx";
import { CompaingStateProvider } from "./context/NewCompaingContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CompaingStateProvider>
        <InitilizeApp />
      </CompaingStateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import MainProfile from "./pages/MainProfile";
import { Provider } from "../src/components/ui/provider";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider >
  <BrowserRouter>
  <Routes>
<Route path="/" element={<App />} />
<Route path="/MainProfile" element={<MainProfile />} />
  </Routes>
  </BrowserRouter>
  </Provider>
);

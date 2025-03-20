import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProtectedRoute from "../src/components/ProtectedRoutes.jsx";  
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          {/* <Route path="loggedIn" element={<LoggedIn />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

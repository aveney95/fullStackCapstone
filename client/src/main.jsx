import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProtectedRoute from "../src/components/ProtectedRoutes.jsx";
import HomePage from "../src/pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import { ListingsProvider } from "../src/components/context/Context";
import UserListings from "../src/components/UserListingsCard.jsx";
import Listings from "../src/pages/Listings.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <ListingsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/ProfilePage" element={<Profile />}></Route>
            <Route path="/" element={<UserListings />} />
            <Route path="/listings" element={<Listings />} />
            {/* <Route path="loggedIn" element={<LoggedIn />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ListingsProvider>
  </StrictMode>
);

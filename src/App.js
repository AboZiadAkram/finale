import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import StaffDetailsPage from "./pages/StaffDetailsPage";
import Header from "./keycomponents/Header";
import WorkersProvider from "./context/StaffContext";
import "./App.css";

const App = () => {
  return (
    <WorkersProvider>
      <Router>
        <Header />
        <div style={{ height: "80px" }}></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/staff/:email" element={<StaffDetailsPage />} />
        </Routes>
      </Router>
    </WorkersProvider>
  );
};

export default App;

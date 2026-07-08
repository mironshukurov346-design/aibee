import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CatalogPage } from "./pages";

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<CatalogPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;

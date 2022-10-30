import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPainting from "./components/AddPainting";
import Painting from "./components/Painting";
import PaintingsList from "./components/PaintingsList";

const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/paintings" className="navbar-brand">
          Met-App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/paintings"} className="nav-link">
              Paintings
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<PaintingsList/>} />
          <Route path="/paintings" element={<PaintingsList/>} />
          <Route path="/add" element={<AddPainting/>} />
          <Route path="/paintings/:id" element={<Painting/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

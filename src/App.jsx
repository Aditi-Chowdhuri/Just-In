import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import PagesocialTabComponent from "./components/PagesocialTabComponent";

function PlaceholderPage({ title }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="app-kicker">Frontend challenge</p>
        <h1 className="app-title">{title}</h1>
        <p className="app-subtitle">This screen is scaffolded for routing and future expansion.</p>
      </header>

      <main className="app-main">
        <div className="placeholder-card">
          <h2>{title}</h2>
          <p>Route is connected and ready for a full implementation.</p>
          <NavLink to="/" className="placeholder-link">
            Back to Home Feed
          </NavLink>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PagesocialTabComponent />} />
      <Route path="/search" element={<PlaceholderPage title="Search" />} />
      <Route path="/inbox" element={<PlaceholderPage title="Inbox" />} />
      <Route path="/profile" element={<PlaceholderPage title="Profile" />} />
      <Route path="/create" element={<PlaceholderPage title="Create Listing" />} />
    </Routes>
  );
}
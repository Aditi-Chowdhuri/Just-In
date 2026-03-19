import React from "react";
import PagesocialTabComponent from "./components/PagesocialTabComponent";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <main className="app-main">
        <div className="phone-stage">
          <PagesocialTabComponent />
        </div>
      </main>
    </div>
  );
}
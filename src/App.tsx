import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AbdomenPage from "./pages/AbdomenPage";
import FingerPage from "./pages/FingerPage";
import { AbdomenState, FingerState } from "./types";

const App: React.FC = () => {
  const [selectedAbdomen, setSelectedAbdomen] = useState<AbdomenState>({
    umbilicus: false,
    suprapubic: false,
    ruq: false,
    rlq: false,
    luq: false,
    llq: false,
    epigastrium: false,
    selectAll: false,
  });
  const [selectedFinger, setSelectedFinger] = useState<FingerState>({
    mcp: false,
    dip: false,
    pip: false,
    selectAll: false,
  });
  return (
    <Router>
      <div className="flex-row justify-center h-screen bg-gray-100 px-4">
        <div className="flex items-center">
          <img className="w-20" src="/agnos-logo.png" alt="agnos-logo" />
          <h2 className="text-2xl font-bold py-8 leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Health Check
          </h2>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <AbdomenPage
                selectedAbdomen={selectedAbdomen}
                setSelectedAbdomen={setSelectedAbdomen}
              />
            }
          />
          <Route
            path="/finger"
            element={
              <FingerPage
                selectedFinger={selectedFinger}
                setSelectedFinger={setSelectedFinger}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

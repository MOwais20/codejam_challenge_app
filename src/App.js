import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, NavLink } from 'react-router-dom'
import db from "./config/firebase";
const Home = React.lazy(() => import('./components/Home'))

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route
          path = "/"
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import db from "./config/firebase";
import { Routes, Route, NavLink } from 'react-router-dom'
const Home = React.lazy(() => import('./components/Home'))



function App() {
  return (
    <Routes>
    <Route
      index
      element={
        <React.Suspense fallback={<>...</>}>
          <Home />
        </React.Suspense>
      }
    />
  </Routes>
  );
}

export default App;

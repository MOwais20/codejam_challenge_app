import React from "react";
import logo from "./logo.svg";
import "./App.css";
import db from "./config/firebase";
import { Routes, Route, NavLink } from 'react-router-dom'
const Home = React.lazy(() => import('./components/Home'))
const Cards = React.lazy(()=>import('./components/FoodCard'))


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
      <Route
        path="cards"
        element={
          <React.Suspense fallback={<>...</>}>
            <Cards />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default App;

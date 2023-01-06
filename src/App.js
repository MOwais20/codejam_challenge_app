import React from "react";
import logo from "./logo.svg";
import "./App.css";
import db from "./config/firebase";
import { Routes, Route, NavLink } from "react-router-dom";
const Home = React.lazy(() => import("./components/Home"));
const LoginForm = React.lazy(() => import("./components/LoginForm"));
const SignUpForm = React.lazy(() => import("./components/signUpForm"));
const FoodCategory = React.lazy(() => import("./components/FoodByCategory"));

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
        path="/food-category"
        element={
          <React.Suspense fallback={<>...</>}>
            <FoodCategory />
          </React.Suspense>
        }
      />

      <Route
        path="/signUp"
        element={
          <React.Suspense fallback={<>...</>}>
            <SignUpForm />
          </React.Suspense>
        }
      />

      <Route
        path="/signIn"
        element={
          <React.Suspense fallback={<>...</>}>
            <LoginForm />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default App;

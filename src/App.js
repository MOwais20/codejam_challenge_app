import React from "react";
import logo from "./logo.svg";
import "./App.css";
import db from "./config/firebase";
import { Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
const Home = React.lazy(() => import("./components/Home"));
const LoginForm = React.lazy(() => import("./components/LoginForm"));
const SignUpForm = React.lazy(() => import("./components/signUpForm"));
const AboutPage = React.lazy(() => import("./Page/About"));
const FoodCategory = React.lazy(() => import("./components/FoodByCategory"));
const Favorites = React.lazy(() => import("./components/Favourites"));
function App() {
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   const token = localStorage.getItem("Auth_Token");
  //   if (!token ) {
  //     navigate("/signIn");
  //   }
  // }, []);

  return (
    <>
      <Navbar />
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
          path="/favorite"
          element={
            <React.Suspense fallback={<>...</>}>
              <Favorites />
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
          path="/about"
          element={
            <React.Suspense fallback={<>...</>}>
              <AboutPage />
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
    </>
  );
}

export default App;

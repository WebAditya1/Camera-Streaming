import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import Navbar from "./components/Navbar/Navbar";
import WelcomeAdmin from "./components/WelcomeAdmin/WelcomeAdmin";
import Camera from "./components/Camera/Camera";
import Account from "./components/Login/Account";
import Register from "./components/Login/Register";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

export const AuthContext = createContext(null);

function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("Authentication") != null
      ? JSON.parse(localStorage.getItem("Authentication"))
      : null
  );

  const toggleAuthentication = (e) => {
    console.log(e);
    setAuthenticated(e);
    localStorage.setItem("Authentication", JSON.stringify(e));
  };

  return (
    <AuthContext.Provider value={{ authenticated, toggleAuthentication }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Navbar />
                  <HomePage />
                  <Footer />
                </>
              }
            />
            <Route path="/account" exact element={<Account />} />
            <Route path="/account/login" exact element={<Login />} />
            <Route path="/account/register" exact element={<Register />} />
            <Route
              exact
              path="/admin"
              element={
                authenticated?.isAdmin ? (
                <>
                  <Navbar />
                  <WelcomeAdmin />
                  <Footer />
                </>
                ) : (
                  <Login />
                )
              }
            />
            <Route
              exact
              path="/admin/camera"
              element={
                authenticated?.isAdmin ? (
                <>
                  <Navbar />
                  <Camera />
                  <Footer />
                </>
                ) : (
                  <Login />
                )
              }
            />
            <Route
              exact
              path="/admin/user"
              element={
                authenticated?.isAdmin ? (
                <>
                  <Navbar />
                  <Admin />
                  <Footer />
                </>
                ) : (
                  <Login />
                )
              }
            />
            <Route
              exact
              path="/user"
              element={
                authenticated ? (
                <>
                  <Navbar />
                  <User />
                  <Footer />
                </>
                ) : (
                  <Login />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;

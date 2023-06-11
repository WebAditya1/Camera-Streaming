import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import Navbar from "./components/Navbar/Navbar";
import WelcomeAdmin from "./components/WelcomeAdmin/WelcomeAdmin";
import Camera from "./components/Camera/Camera";

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
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              authenticated ? (
                authenticated?.isAdmin ? (
                  <Navigate to="/admin"/>
                ) : (
                  <>
                    <Navigate to="/user"/>
                  </>
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            exact
            path="/admin"
            element={
              authenticated?.isAdmin ? (
                <>
                  <Navbar />
                  <WelcomeAdmin />
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
                </>
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

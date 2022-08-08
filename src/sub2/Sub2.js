import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

// Auth context
import AuthContext, { AuthContextProvider } from "./store/auth-context";

import "./Sub2.css";

function Sub2() {
  return (
    <AuthContextProvider>
      <SubContent />
    </AuthContextProvider>
  );
}

function SubContent() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default Sub2;

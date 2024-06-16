import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navigation/Navbar";
import Header from "./Components/Navigation/Header";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default App;

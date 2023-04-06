import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-5/6 mx-auto">
      {/* Header */}
      <Header />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;

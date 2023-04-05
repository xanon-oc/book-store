import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-5/6 mx-auto">
      {/* Header */}
      <Header />
      <Outlet />

      {/* Footer */}
    </div>
  );
};

export default App;

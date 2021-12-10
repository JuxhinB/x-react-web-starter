import React from "react";
import { Route, Routes } from "react-router-dom";
import screen from "../screen";

function GuestNavigation() {
  return (
    <Routes>
      <Route path="/" element={<screen.HomeScreen />} >
        <Route path="home" element={<screen.HomeScreen />} />
      </Route>
      <Route element={<screen.HomeScreen />} />
    </Routes>
  );
}

export default GuestNavigation;

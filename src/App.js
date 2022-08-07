/**
 * @author John Louie Nepomuceno
 * @version 0.0.1
 * @purpose CLEAR ADMIN Application
 * @function API Data Display
 */

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  React.useEffect(() => {
    document.title = "CLEAR ADMIN";
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

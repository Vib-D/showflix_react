import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/showList";
import Navbar from "./components/navbar";
import Summary from "./components/summary";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<List />} />

        <Route path='/show/:name/:id' element={<Summary />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

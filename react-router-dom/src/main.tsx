import React from "react";
import ReactDOM from "react-dom/client";
import "../src/components/styles/global.css";
import { Home } from "./components/Home";
import { About } from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Post } from "./components/Post";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

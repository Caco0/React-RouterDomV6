import React from "react";
import ReactDOM from "react-dom/client";
import "../src/components/styles/global.css";
import { Home } from "./components/Home";
import { About } from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Post } from "./components/Post";
import { Redirect } from "./components/Redirect";
import { NotFound } from "./components/NotFound";
import { Postes } from "./components/Posts";
import { PostContent } from "./components/Post-content";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/post/:id" element={<Post />} /> */}
        <Route path="/posts" element={<Postes />}>
          <Route path=":id" element={<PostContent />} />
        </Route>
        <Route path="/post" element={<Post />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

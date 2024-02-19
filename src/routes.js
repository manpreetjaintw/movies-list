import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, NotFound } from "./Screens";
import { Layouts } from "./components";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Layouts>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layouts>
    </BrowserRouter>
  );
};

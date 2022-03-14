import React from "react";
import { Routes, Route } from "react-router-dom";

import Beranda from "./Beranda";
import Karya from "./Karya";
import Kontak from "./Kontak";
import TentangSaya from "./TentangSaya";

const Utama = () => {
  <Routes>
    <Route exact path="/" element={<Beranda />} />
    <Route path="/TentangSaya" element={<TentangSaya />} />
    <Route path="/Karya" element={<Karya />} />
    <Route path="/Kontak" element={<Kontak />} />
  </Routes>;
};

export default Utama;

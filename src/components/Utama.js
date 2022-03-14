import React from "react";
import { Routes, Route } from "react-router-dom";

import Beranda from "./Beranda";
import Karya from "./Karya";
import Kontak from "./Kontak";
import TentangSaya from "./TentangSaya";

const Utama = () => {
  <Routes>
    <Route exact path="/" component={Beranda} />
    <Route path="/TentangSaya" component={TentangSaya} />
    <Route path="/Karya" component={Karya} />
    <Route path="/Kontak" component={Kontak} />
  </Routes>;
};

export default Utama;

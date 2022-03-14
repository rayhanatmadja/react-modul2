import React from "react";
import Utama from "./components/Utama";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link to="/">Beranda</Link>
      <Link to="/TentangSaya">TentangSaya</Link>
      <Link to="/Karya">Karya</Link>
      <Link to="/Kontak">Kontak</Link>
      <p>
        <Utama />
      </p>
    </div>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AirBnb from "./pages/AirBnb";
import AnTru from "./pages/AnTru";
import Ecovani from "./pages/Ecovani";
import Home from "./pages/Home";
import LifePeak from "./pages/LifePeak";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/lifepeak" element={<LifePeak />} />
        <Route path="/ecovani" element={<Ecovani />} />
        <Route path="/antru" element={<AnTru />} />
        <Route path="/airbnb" element={<AirBnb />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;

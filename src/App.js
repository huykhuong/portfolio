import { useEffect } from "react";
import { useLocation } from "react-router";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AirBnb from "./pages/AirBnb";
import AnTru from "./pages/AnTru";
import Ecovani from "./pages/Ecovani";
import Home from "./pages/Home";
import LifePeak from "./pages/LifePeak";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
  };

  return (
    <HelmetProvider>
      <ScrollToTop>
        <Routes>
          <Route path="/portfolio" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/lifepeak" element={<LifePeak />} />
            <Route path="/ecovani" element={<Ecovani />} />
            <Route path="/antru" element={<AnTru />} />
            <Route path="/airbnb" element={<AirBnb />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </ScrollToTop>
    </HelmetProvider>
  );
}

export default App;

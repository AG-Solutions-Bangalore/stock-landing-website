import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "animate.css/animate.min.css";
import { WOW } from "wowjs";

import Preloader from "../components/Preloader";
import ScrollToTop from "../components/ScrollToTop";
import LoadTop from "../components/ScrollToTop/LoadTop";

// import { Error, HomeThreeOnePage } from "../pages";
import { lazy, Suspense } from "react";

const HomeThreeOnePage = lazy(() => import("../pages/home-3/home-3-one-page"));
const Error = lazy(() => import("../pages/error/index"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  //preloader
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 500);

  return () => clearTimeout(timer);
}, []);

  //Initialize wow
  useEffect(() => {
    new WOW({ live: false, animateClass: "animate__animated" }).init();
  }, [location]);

  return (
    <div className="App">
      {isLoading && <Preloader />}
      <ScrollToTop />
      <LoadTop />
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<HomeThreeOnePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

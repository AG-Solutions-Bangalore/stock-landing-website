import React, { lazy, Suspense } from "react";
import HeaderThree from "../../components/Header/HeaderThree";
import HomeThreeMain from "./HomeThreeMain";

const FooterTwo = lazy(() => import("../../components/Footer/FooterTwo"));

const HomeThreeOnePage = () => {
  return (
    <>
      <HeaderThree onePage={true} parentMenu="home" />
      <HomeThreeMain />

      <Suspense fallback={null}>
        <FooterTwo
          footerClass="it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-2 ed-footer-style-3 black-bg pb-70"
          btnClass="it-btn-white purple-2"
        />
      </Suspense>
    </>
  );
};

export default HomeThreeOnePage;
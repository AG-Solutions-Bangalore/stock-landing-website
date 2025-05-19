import React from 'react';
import HeaderThree from '../../components/Header/HeaderThree';
import FooterTwo from '../../components/Footer/FooterTwo';
import HomeThreeMain from './HomeThreeMain';


const HomeThreeOnePage = () => {
  return (
    <>
      <HeaderThree onePage={true} parentMenu="home" />
      <HomeThreeMain />
      <FooterTwo
        footerClass="it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-2 ed-footer-style-3 black-bg pb-70"
        btnClass="it-btn-white purple-2"
      />
    </>
  );
};
export default HomeThreeOnePage;

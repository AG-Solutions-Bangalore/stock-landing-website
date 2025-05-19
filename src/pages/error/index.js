import React from 'react';
import ErrorMain from './ErrorMain';
import FooterTwo from '../../components/Footer/FooterTwo';
const Error = () => {
  return (
    <>

      <ErrorMain />

      <FooterTwo
        footerClass="it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-5 inner-style black-bg pb-70"
        btnClass="it-btn-white sky-bg"
        copyrightTextClass="it-copyright-text inner-style text-center"
      />
    </>
  );
};

export default Error;

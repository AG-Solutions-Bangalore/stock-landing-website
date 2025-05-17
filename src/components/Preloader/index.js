import React from "react";

import Logo from "../../assets/img/logo/rotate.gif";

const Preloader = () => {
  return (
    <div id="it-loading">
      <div id="it-loading-center">
        <div id="it-loading-absolute">
          <div className="it-loading-content">
            <img className="it-loading-logo" src={Logo} alt="" />

      
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;

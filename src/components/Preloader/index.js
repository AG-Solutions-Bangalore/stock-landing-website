import React from "react";

import Logo from "../../assets/img/logo/rotate.gif";
import Icon from "../../assets/img/logo/pencil.png";

const Preloader = () => {
  return (
    <div id="it-loading">
      <div id="it-loading-center">
        <div id="it-loading-absolute">
          <div className="it-loading-content">
            <img className="it-loading-logo" src={Logo} alt="" />

            {/* <div className="fw-semibold d-flex align-items-center gap-2">
              <div className="d-flex align-items-center">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "#2fb899" }}
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="d-flex flex-column">
                <h4
                  className="ed-section-title"
                  style={{
                    color: "#2fb899",
                    marginBottom: 0,
                    // marginTop: 5,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "2.2rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  Stock
                </h4>
              </div>
            </div> */}
            {/* <div className="it-loading-stroke">
              <img className="it-loading-icon" src={Icon} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;

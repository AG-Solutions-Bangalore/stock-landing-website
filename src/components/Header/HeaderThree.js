import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuItemsOnePage from "./MenuItemsOnePage";
import Logo from "../../assets/img/logo/bs-logo.png";
const HeaderThree = (props) => {
  const { headerClass, parentMenu } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  useEffect(() => {
    // Sticky Header is displayed after scrolling for 400 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <header className={headerClass ? headerClass : ""}>
        <div
          id="header-sticky"
          className={`${
            isVisible
              ? " ed-header-transparent ed-header-3-style mt-20 z-index-11 header-sticky"
              : " ed-header-transparent ed-header-3-style mt-20 z-index-11"
          }
           
          `}
        >
          <div className="ed-header-3-area">
            <div className="container">
              <div className="ed-header-3-wrapper">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                    <div className="fw-semibold d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center">
                        {/* <svg
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
                        </svg> */}
                        <img
                          src={Logo}
                          alt="logo"
                          className="img-fluid"
                          style={{ width: 40, height: 40 }}
                        />
                      </div>

                      <div className="d-flex flex-column">
                        <h4
                          className="ed-section-title"
                          style={{
                            color: "#FF9E0E",
                            marginBottom: 0,
                            // marginTop: 5,
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                            fontSize: "2.2rem",
                            letterSpacing: "0.5px",
                          }}
                        >
                          BizStock
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 d-none d-xl-block">
                    <div className="ed-header-2-main-menu it-main-menu">
                      <nav className="it-menu-content">
                        <MenuItemsOnePage
                          parentMenu={parentMenu}
                          onePageStyle="onePage3"
                        />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                    <div class="ed-header-3-right d-flex align-items-center justify-content-end justify-content-xl-center">
                      <div className="ed-header-3-bar">
                        <button
                          className="it-menu-bar"
                          onClick={() => setIsOffCanvasOpen(true)}
                        >
                          <svg
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 18.3333C10 17.4128 10.7462 16.6667 11.6667 16.6667H21.6667C22.5872 16.6667 23.3333 17.4128 23.3333 18.3333C23.3333 19.2538 22.5872 20 21.6667 20H11.6667C10.7462 20 10 19.2538 10 18.3333ZM0 1.66667C0 0.746183 0.746183 0 1.66667 0H21.6667C22.5872 0 23.3333 0.746183 23.3333 1.66667C23.3333 2.58713 22.5872 3.33333 21.6667 3.33333H1.66667C0.746183 3.33333 0 2.58713 0 1.66667ZM0 10C0 9.07953 0.746183 8.33333 1.66667 8.33333H21.6667C22.5872 8.33333 23.3333 9.07953 23.3333 10C23.3333 10.9205 22.5872 11.6667 21.6667 11.6667H1.66667C0.746183 11.6667 0 10.9205 0 10Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="ed-header-3-button d-none d-lg-block">
                        <Link
                          className="ed-btn-square"
                          to="https://admin.bizstock.in/"
                        >
                          Login To Admin Panel
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="it-offcanvas-area">
        <div className={isOffCanvasOpen ? "itoffcanvas opened" : "itoffcanvas"}>
          <div className="it-offcanva-bottom-shape d-none d-xxl-block"></div>
          <div className="itoffcanvas__close-btn">
            <button
              className="close-btn"
              onClick={() => setIsOffCanvasOpen(false)}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <div className="fw-semibold d-flex align-items-center gap-2">
              <div className="d-flex align-items-center">
                {/* <svg
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
                </svg> */}
                <img
                  src={Logo}
                  alt="logo"
                  className="img-fluid"
                  style={{ width: 40, height: 40 }}
                />
              </div>

              <div className="d-flex flex-column">
                <h4
                  className="ed-section-title"
                  style={{
                    color: "#FF9E0E",
                    marginBottom: 0,
                    // marginTop: 5,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "2.2rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  BizStock
                </h4>
              </div>
            </div>
          </div>
          <div className="itoffcanvas__text">
            <p style={{ textAlign: "justify" }}>
              Experience complete control over your inventory with real-time
              updates, low-stock alerts, and seamless stock movement tracking
              all in one powerful platform.
            </p>
          </div>
          <div className="it-menu-mobile d-xl-none">
            <MenuItemsOnePage
              parentMenu={parentMenu}
              onePageStyle="onePage3"
              mobileMenu="show"
            />
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="maito:info@ag-solutions.in">info@ag-solutions.in</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:+918867171060">8867171060</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
                <a
                  href="https://maps.app.goo.gl/oTeYoH7T61wwgdfS8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jayanagara 9th Block, Bengaluru, 560069{" "}
                </a>
              </div>
            </div>
          </div>
          {/* <OffCanvasInsta /> */}
        </div>
      </div>

      {isOffCanvasOpen ? (
        <div
          className="body-overlay apply"
          onClick={() => setIsOffCanvasOpen(false)}
        ></div>
      ) : (
        <div className="body-overlay"></div>
      )}
    </>
  );
};
export default HeaderThree;

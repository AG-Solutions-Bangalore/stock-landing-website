import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import PrevArrow from "../../components/SVG/PrevArrow";
import NextArrow from "../../components/SVG/NextArrow";

import shapeImg1 from "../../assets/img/slider/shape-3-2.png";
import shapeImg2 from "../../assets/img/slider/shape-3-3.png";
import sliderImg1 from "../../assets/img/slider/slider-1-3.jpg";
import sliderImg2 from "../../assets/img/slider/slider-1-4.jpg";

const Banner = () => {
  const sliderOption = {
    speed: 1500,
    loop: true,
    slidesPerView: "1",
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    navigation: {
      nextEl: ".slider-prev",
      prevEl: ".slider-next",
    },
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // setIsActive(id);
  };
  return (
    <div className="ed-slider-2-area p-relative fix">
      <div className="ed-slider-2-arrow-box">
        <button className="slider-prev">
          <PrevArrow />
        </button>
        <button className="slider-next">
          <NextArrow />
        </button>
      </div>
      <div className="ed-slider-2-box">
        <div className="swiper-container ed-slider-2-active">
          <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            {...sliderOption}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="ed-slider-2-overley p-relative">
                <div className="line_wrap">
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                </div>

                <div className="ed-slider-2-shape-1">
                  <img src={shapeImg1} alt="" />
                </div>
                <div className="ed-slider-2-shape-2">
                  <img src={shapeImg2} alt="" />
                </div>
                <div className="ed-slider-2-wrap p-relative">
                  <div
                    className="ed-slider-2-thumb"
                    style={{
                      backgroundImage: `url(${sliderImg1})`,
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9">
                        <div className="ed-slider-2-content">
                          <div className="ed-slider-2-subtitle pb-10">
                            <div>
                              <span>Empower Your Team</span>
                            </div>
                          </div>
                          <div className="ed-slider-title text-white">
                            <div>
                              <span>Automate Your Stock</span>
                            </div>
                            <div>
                              <span>
                                Maximize
                                <i>Efficiency & Accuracy</i>
                              </span>
                            </div>
                          </div>
                          <div className="ed-slider-2-text pb-25">
                            <div>
                              <p className=" text-white">
                                Connect your favorite tools, collaborate with
                                your team,
                                <br />
                                and scale effortlessly with robust integrations.
                              </p>
                            </div>
                          </div>
                          <div className="ed-slider-2-button">
                            <div>
                              <Link
                                className="ed-btn-square"
                                to="#it-contact"
                                onClick={() => scrollToSection("it-contact")}
                              >
                                View Integrations
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="ed-slider-2-overley p-relative">
                <div className="line_wrap">
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                  <div className="line_item"></div>
                </div>

                <div className="ed-slider-2-shape-1">
                  <img src={shapeImg1} alt="" />
                </div>
                <div className="ed-slider-2-shape-2">
                  <img src={shapeImg2} alt="" />
                </div>
                <div className="ed-slider-2-wrap p-relative">
                  <div
                    className="ed-slider-2-thumb"
                    style={{
                      backgroundImage: `url(${sliderImg2})`,
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9">
                        <div className="ed-slider-2-content">
                          <div className="ed-slider-2-subtitle pb-10">
                            <div>
                              <span>Stay in Control,Stay Ahead</span>
                            </div>
                          </div>
                          <div className="ed-slider-title text-white">
                            <div>
                              <span>Real-Time Stock</span>
                            </div>
                            <div>
                              <span>
                                <i> With Intelligent Alerts and Insights</i>
                              </span>
                            </div>
                          </div>
                          <div className="ed-slider-2-text pb-25">
                            <div>
                              <p className=" text-white">
                                Effortlessly track inventory levels, avoid
                                stockouts, and automate reordering
                                <br />
                                all in one smart CRM designed for growing
                                businesses.
                              </p>
                            </div>
                          </div>
                          <div className="ed-slider-2-button">
                            <div>
                              <Link
                                className="ed-btn-square"
                                to="#it-contact"
                                onClick={() => scrollToSection("it-contact")}
                              >
                                View Integrations
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Banner;

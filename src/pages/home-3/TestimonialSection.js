import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../components/SectionTitle";
import testimonialBG from "../../assets/img/testimonial/testimonial-bg.jpg";
import SingleFeature from "../../components/Feature";
import buyerreport from "../../assets/img/report/report.png";
import stock from "../../assets/img/report/product.png";
import purchase from "../../assets/img/feature/shopping-cart.png";
import sale from "../../assets/img/report/increase.png";
import hotstock from "../../assets/img/report/inventory.png";
const Testimonial = () => {
  const sliderOption = {
    speed: 1500,
    loop: true,
    slidesPerView: "3",
    spaceBetween: 50,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div
      className="it-testimonial-area ed-testimonial-ptb fix p-relative"
      id="it-report"
      style={{ backgroundImage: `url(${testimonialBG})`, paddingTop: 50 }}
    >
      <div className="container">
        <div className="it-testimonial-title-wrap mb-90">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <SectionTitle
                itemClass="it-testimonial-title-box text-center"
                subTitle="Report"
                title="Stock Management Report"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ed-testimonial-wrapper">
              <div className="swiper-container">
                <Swiper
                  modules={[Autoplay]}
                  {...sliderOption}
                  className="swiper-wrapper ed-testimonial-active"
                >
                  <SwiperSlide className="swiper-slide">
                    <SingleFeature
                      image={buyerreport}
                      title="Buyer Report"
                      description="Analyze buyer trends, orders, and purchase history to make informed decisions."
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleFeature
                      image={stock}
                      title="Stock"
                      description="Track real-time stock levels and ensure accurate inventory management."
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleFeature
                      image={purchase}
                      title="Purchase"
                      description="Manage your purchase orders and streamline supplier communication."
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleFeature
                      image={sale}
                      title="Dispatch"
                      description="Handle product dispatching with ease and monitor deliveries in real time."
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleFeature
                      image={hotstock}
                      title="Hot Stock"
                      description="Identify fast-moving products and optimize your stock based on demand."
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;

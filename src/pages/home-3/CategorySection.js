import React from "react";
import SectionTitle from "../../components/SectionTitle";
import SingleCategoryTwo from "../../components/Category/SingleCategoryTwo";

import shapeImg from "../../assets/img/category/shape-1-1.png";
import titleImg from "../../assets/img/category/title.svg";
import iconImg1 from "../../assets/img/feature/data-structure.png";
import iconImg2 from "../../assets/img/feature/ecosystem.png";
import iconImg3 from "../../assets/img/feature/subsidiary.png";
import iconImg4 from "../../assets/img/feature/shopping-cart.png";
import iconImg5 from "../../assets/img/category/category-4-5.png";
// import iconImg5 from '../../assets/img/feature/online-shop.png';

const Category = () => {
  return (
    <div className="it-category-4-area p-relative pt-120 pb-90" id="it-feature">
      <div className="it-category-4-shape-1 d-none d-lg-block">
        <img src={shapeImg} alt="" />
      </div>
      <div className="container">
        <div className="it-category-4-title-wrap mb-60">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <SectionTitle
                itemClass="it-category-4-title-box"
                subTitleClass="it-section-subtitle-5 purple-2"
                subTitle="Key Modules"
                titleClass="it-section-title-3"
                title="Stock Control Features"
                titleImage={titleImg}
              />
            </div>
          </div>
        </div>
        <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
          <div
            className="col mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <SingleCategoryTwo iconImage={iconImg1} title="Organized Data" />
          </div>
          <div
            className="col mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".4s"
          >
            <SingleCategoryTwo iconImage={iconImg2} title="User friendly" />
          </div>
          <div
            className="col mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <SingleCategoryTwo
              iconImage={iconImg3}
              title="Branches Management"
            />
          </div>
          <div
            className="col mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".6s"
          >
            <SingleCategoryTwo iconImage={iconImg4} title="Purchase" />
          </div>
          <div
            className="col mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleCategoryTwo iconImage={iconImg5} title="Sales" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;

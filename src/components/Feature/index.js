import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../SVG";

const SingleFeature = (props) => {
  const { itemClass, icon, title, description, btnText, image } = props;
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // setIsActive(id);
  };
  return (
    <div
      className={itemClass ? itemClass : "it-feature-3-item mb-30 text-center"}
      style={{ minHeight: 400 }}
    >
      <div className="it-feature-3-icon">
        <span>
          <img src={image} width={50} height={50} />
        </span>
      </div>
      <div className="it-feature-3-content">
        <h4 className="it-feature-3-title">
          <Link>{title ? title : "Best Coaching"}</Link>
        </h4>
        <p>
          {description
            ? description
            : "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet."}
        </p>
      </div>
      <div className="it-feature-3-btn">
        <Link
          className="ed-btn-theme theme-2"
          to="#it-contact"
          onClick={() => scrollToSection("it-contact")}
        >
          {btnText ? btnText : "view details"}
          <i>
            <RightArrow />
          </i>
        </Link>
      </div>
    </div>
  );
};
export default SingleFeature;

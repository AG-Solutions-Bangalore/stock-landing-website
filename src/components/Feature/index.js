import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../SVG";

const SingleFeature = (props) => {
  const { itemClass, icon, title, description, btnText, image } = props;

  return (
    <div
      className={itemClass ? itemClass : "it-feature-3-item mb-30 text-center"}
    >
      <div className="it-feature-3-icon">
        <span>
      <img src={image} width={50} height={50} />
        </span>
      </div>
      <div className="it-feature-3-content">
        <h4 className="it-feature-3-title">
          <Link >{title ? title : "Best Coaching"}</Link>
        </h4>
        <p>
          {description
            ? description
            : "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet."}
        </p>
      </div>
      <div className="it-feature-3-btn">
        <Link className="ed-btn-theme theme-2" >
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

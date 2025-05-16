import React from "react";
import { Link } from "react-router-dom";

import Image from "../../assets/img/category/category-4-1.png";

const SingleCategoryTwo = (props) => {
  const { itemClass, iconImage, title } = props;

  return (
    <div className={itemClass ? itemClass : "it-category-4-item text-center"}>
      <div className="it-category-4-icon">
        <span
          style={{
            display: "inline-block",
            padding: "10px",
            maxWidth: "120px",
          }}
        >
          <img
            src={iconImage ? iconImage : Image}
            alt={title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        </span>
      </div>
      <div className="it-about-3-mv-item">
        <span className="it-about-3-mv-title">
          {title ? title : "web Design"}
        </span>
      </div>
    </div>
  );
};
export default SingleCategoryTwo;

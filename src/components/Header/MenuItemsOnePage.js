import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuItemsOnePage = (props) => {
  const { parentMenu, onePageStyle, mobileMenu } = props;
  const [home, setHome] = useState(false);
  const [isActive, setIsActive] = useState(parentMenu);


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsActive(id);
  };

  const handleClick = (e) => {
    if (!mobileMenu) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      e.preventDefault();
    }
  };

  const onePageHomeMenu = (
    <li
      className={
        isActive == "home"
          ? "has-dropdown p-static active"
          : "has-dropdown p-static"
      }
    >
      <Link
        to="#"
        className={`${home ? "expanded" : ""}`}
        onClick={handleClick}
      >
        <span>Home</span>
      </Link>
    </li>
  );

  return (
    <>
      {onePageStyle === "onePage1" ? (
        <ul className="onepage-menu">
          {onePageHomeMenu}
          <li className={isActive === "it-feature" ? "active" : ""}>
            <Link
              to="#it-feature"
              onClick={() => scrollToSection("it-feature")}
            >
              <span>Features</span>
            </Link>
          </li>
          <li className={isActive === "it-about" ? "active" : ""}>
            <Link to="#it-course" onClick={() => scrollToSection("it-about")}>
              <span>About us</span>
            </Link>
          </li>
          <li className={isActive === "it-team" ? "active" : ""}>
            <Link to="#it-team" onClick={() => scrollToSection("it-team")}>
              <span>Team</span>
            </Link>
          </li>
          <li className={isActive === "it-blog" ? "active" : ""}>
            <Link to="#it-blog" onClick={() => scrollToSection("it-blog")}>
              <span>Blog</span>
            </Link>
          </li>
          <li className={isActive === "it-contact" ? "active" : ""}>
            <Link
              to="#it-contact"
              onClick={() => scrollToSection("it-contact")}
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      ) : onePageStyle === "onePage2" ? (
        <ul className="onepage-menu">
          {onePageHomeMenu}
          <li className={isActive === "it-about" ? "active" : ""}>
            <Link to="#it-course" onClick={() => scrollToSection("it-about")}>
              <span>About us</span>
            </Link>
          </li>
          <li className={isActive === "it-course" ? "active" : ""}>
            <Link to="#it-course" onClick={() => scrollToSection("it-course")}>
              <span>Courses</span>
            </Link>
          </li>
          <li className={isActive === "it-event" ? "active" : ""}>
            <Link to="#it-event" onClick={() => scrollToSection("it-event")}>
              <span>Event</span>
            </Link>
          </li>
          <li className={isActive === "it-team" ? "active" : ""}>
            <Link to="#it-team" onClick={() => scrollToSection("it-team")}>
              <span>Team</span>
            </Link>
          </li>
          <li className={isActive === "it-blog" ? "active" : ""}>
            <Link to="#it-blog" onClick={() => scrollToSection("it-blog")}>
              <span>Blog</span>
            </Link>
          </li>
        </ul>
      ) : onePageStyle === "onePage3" ? (
        <ul className="onepage-menu justify-content-xl-center">
          {onePageHomeMenu}

          <li className={isActive === "it-feature" ? "active" : ""}>
            <Link
              to="#it-feature"
              onClick={() => scrollToSection("it-feature")}
            >
              <span>Features</span>
            </Link>
          </li>
          <li className={isActive === "it-report" ? "active" : ""}>
            <Link to="#it-report" onClick={() => scrollToSection("it-report")}>
              <span>Report</span>
            </Link>
          </li>
          <li className={isActive === "it-contact" ? "active" : ""}>
            <Link
              to="#it-contact"
              onClick={() => scrollToSection("it-contact")}
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      ) : onePageStyle === "onePage4" ? (
        <ul className="onepage-menu">
          {onePageHomeMenu}
          <li className={isActive === "it-work" ? "active" : ""}>
            <Link to="#it-work" onClick={() => scrollToSection("it-work")}>
              <span>Work</span>
            </Link>
          </li>
          <li className={isActive === "it-about" ? "active" : ""}>
            <Link to="#it-about" onClick={() => scrollToSection("it-about")}>
              <span>About us</span>
            </Link>
          </li>
          <li className={isActive === "it-testimonial" ? "active" : ""}>
            <Link
              to="#it-testimonial"
              onClick={() => scrollToSection("it-testimonial")}
            >
              <span>Testimonial</span>
            </Link>
          </li>
          <li className={isActive === "it-team" ? "active" : ""}>
            <Link to="#it-team" onClick={() => scrollToSection("it-team")}>
              <span>Team</span>
            </Link>
          </li>
          <li className={isActive === "it-blog" ? "active" : ""}>
            <Link to="#it-blog" onClick={() => scrollToSection("it-blog")}>
              <span>Blog</span>
            </Link>
          </li>
        </ul>
      ) : onePageStyle === "onePage5" ? (
        <ul className="onepage-menu">
          {onePageHomeMenu}
          <li className={isActive === "it-feature" ? "active" : ""}>
            <Link
              to="#it-feature"
              onClick={() => scrollToSection("it-feature")}
            >
              <span>Feature</span>
            </Link>
          </li>
          <li className={isActive === "it-about" ? "active" : ""}>
            <Link to="#it-about" onClick={() => scrollToSection("it-about")}>
              <span>About us</span>
            </Link>
          </li>
          <li className={isActive === "it-course" ? "active" : ""}>
            <Link to="#it-course" onClick={() => scrollToSection("it-course")}>
              <span>Courses</span>
            </Link>
          </li>
          <li className={isActive === "it-faq" ? "active" : ""}>
            <Link to="#it-faq" onClick={() => scrollToSection("it-faq")}>
              <span>Faq</span>
            </Link>
          </li>
          <li className={isActive === "it-blog" ? "active" : ""}>
            <Link to="#it-blog" onClick={() => scrollToSection("it-blog")}>
              <span>Blog</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul></ul>
      )}
    </>
  );
};
export default MenuItemsOnePage;

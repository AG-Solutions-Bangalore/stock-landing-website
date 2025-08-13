import React from "react";
import Category from "./CategorySection";
import Contact from "./ContactSection";
import Banner from "./HomeThreeBanner";
import PopupContactForm from "./PopupContactForm";
import Testimonial from "./TestimonialSection";

const HomeThreeMain = () => {
  return (
    <main>
      <Banner />
      <Category />
      <PopupContactForm />
      <Testimonial />
      <Contact />
    </main>
  );
};
export default HomeThreeMain;

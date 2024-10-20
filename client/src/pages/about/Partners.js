import React from "react";
import "../../style/Partners.css";

const Partners = () => {
  const partners = [
    "/assets/images/about/1.png",
    "/assets/images/about/2.png",
    "/assets/images/about/3.png",
    "/assets/images/about/4.png",
    "/assets/images/about/5.png",
  ];

  return (
    <section className="about-imgs">
      <div className="container">
        <h2>Our Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner}
              alt={`Partner ${index + 1}`}
              className="partner-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

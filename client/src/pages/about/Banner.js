import React from "react";
import "../../style/Banner.css";

const Banner = () => {
  return (
    <div
      className="banner text-center"
      style={{
        backgroundImage: "url(/main-header.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div class="main-header">
        <div class="container">
          <h1 class="main-title">About the Mukti</h1>
          <div class="breadcrumbs">
            <a href="index.html">Home</a> -
            <a class="active" href="about-us.html">
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

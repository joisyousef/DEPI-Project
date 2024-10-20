import React from "react";
import "../../style//OrthopedicCards.css";

const OrthopedicCards = () => {
  const services = [
    {
      title: "Medical Treatment",
      description: "Specialized treatment",
      icon: "../../../public/assets/images/about/medical-symbol.png",
    },
    {
      title: "Medical Treatment",
      description: "Advanced care",
      icon: "../../../public/assets/images/about/hospital-building.png",
    },
    {
      title: "Medical Treatment",
      description: "Expert team",
      icon: "../../../public/assets/images/about/delivery-truck.png",
    },
    {
      title: "Medical Treatment",
      description: "Personalized approach",
      icon: "../../../public/assets/images/about/doctor.png",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">
        We Offer Specialized Orthopedics To Meet Your Needs
      </h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
              <img
                src={service.icon}
                className="card-img-top"
                alt={service.title}
              />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrthopedicCards;

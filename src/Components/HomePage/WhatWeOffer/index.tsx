import React from "react";
import Service1 from "assets/svg/service1.svg";
import Service2 from "assets/svg/service2.svg";
import Service3 from "assets/svg/service3.svg";
import Service4 from "assets/svg/service4.svg";
import "./style.scss";

export default function WhatWeOffer() {
  return (
    <div className="what-we-offer-outter-container">
      <div className="what-we-offer-container">
        <div className="title">
          What we <span>offer</span>
        </div>
        <div className="services-outter-container">
          <div className="service-container">
            <img src={Service1} alt="service-logo" />
            <div className="contents">
              <p>
                Empowered <span>Community Funding</span>
              </p>
              <p>
                GrantAi democratizes access to grant funding for the Prepaire
                community, empowering researchers, developers, and SMEs to
                pursue their innovative projects.
              </p>
            </div>
          </div>
          <div className="service-container">
            <img src={Service1} alt="service-logo" />
            <div className="contents">
              <p>
                Empowered <span>Community Funding</span>
              </p>
              <p>
                GrantAi democratizes access to grant funding for the Prepaire
                community, empowering researchers, developers, and SMEs to
                pursue their innovative projects.
              </p>
            </div>
          </div>
          <div className="service-container">
            <img src={Service3} alt="service-logo" />
            <div className="contents">
              <p>
                Enhanced <span>Efficiency</span>
              </p>
              <p>
                By automating the initial stages of the grant application
                process, GrantAi saves applicants valuable time and effort,
                allowing them to focus on the research and development of their
                projects.
              </p>
            </div>
          </div>
          <div className="service-container">
            <img src={Service4} alt="service-logo" />
            <div className="contents">
              <p>
                Seamless <span>Workflow Integration</span>
              </p>
              <p>
                GrantAi seamlessly integrates with existing Prepaire
                applications and services, providing a comprehensive solution
                for project management and grant applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

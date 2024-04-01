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
        <h2 className="title">
          What we <strong>Offer</strong>
        </h2>
        <div className="services-outter-container">
          <article className="service-container">
            <img src={Service1} alt="service-logo" />
            <div className="contents">
              <h3>
                Empowered <strong>Community Funding</strong>
              </h3>
              <h4 className="description">
                GrantAi democratizes access to grant funding for the Prepaire
                community, empowering researchers, developers, and SMEs to
                pursue their innovative projects.
              </h4>
            </div>
          </article>
          <article className="service-container">
            <img src={Service2} alt="service-logo" />
            <div className="contents">
              <h3>
                Increased <strong>Success Rate</strong>
              </h3>
              <h4 className="description">
                GrantAi's AI-powered analysis helps identify the most relevant
                grants and ensures that applications are tailored to specific
                funding criteria, significantly increasing the likelihood of
                success
              </h4>
            </div>
          </article>
          <article className="service-container">
            <img src={Service3} alt="service-logo" />
            <div className="contents">
              <h3>
                Enhanced <strong>Efficiency</strong>
              </h3>
              <h4 className="description">
                By automating the initial stages of the grant application
                process, GrantAi saves applicants valuable time and effort,
                allowing them to focus on the research and development of their
                projects.
              </h4>
            </div>
          </article>
          <article className="service-container">
            <img src={Service4} alt="service-logo" />
            <div className="contents">
              <h3>
                Seamless <strong>Workflow Integration</strong>
              </h3>
              <h4 className="description">
                GrantAi seamlessly integrates with existing Prepaire
                applications and services, providing a comprehensive solution
                for project management and grant applications
              </h4>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import GrantAiPlatform from "assets/img/grantai-platform.png";
import "./style.scss";

export default function Platform() {
  return (
    <section className="grantai-platform-outter-container" id="platform">
      <div className="grantai-platform-container">
        <img src={GrantAiPlatform} alt="grantai-platform-example" />
        <div className="platform-description">
          <h2 className="title">
            The GrantAI <strong>Platform</strong>
          </h2>
          <h4 className="description">
            <span>GrantAI</span> enables you to effortlessly connect your
            project with the most suitable grants or funds from the world's most
            extensive global database, ensuring instant access to opportunities
            tailored to your needs.
          </h4>
          <a className="action-button" href="/howitworks">
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}

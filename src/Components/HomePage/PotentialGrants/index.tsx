import React from "react";
import Avatar from "assets/img/chat-avatar.png";
import GrantAi from "assets/img/chat-grantai-logo.png";
import Sickle from "assets/img/Sickle.png";
import EHA from "assets/img/EHA.png";
import Vector from "assets/img/vector.png";
import "./style.scss";

export default function PotentialGrants() {
  return (
    <div className="potential-grants-outter-container">
      <div className="potential-grants">
        <div className="grant-chat-example-container">
          <div className="grant-chat-example-1-outter-container">
            <div className="grant-chat-example-1">
              <img src={Avatar} alt="avatar" className="avatar" />
              <p>
                I'm seeking funding for sickle cell research in a lab setting.
                Could you suggest specific grants or funding sources?
              </p>
            </div>
          </div>
          <div className="grant-chat-example-2-outter-container">
            <div className="grant-chat-example-2">
              <img src={GrantAi} alt="grantai-logo" />
              <div className="grantai-response-example-container">
                <p>
                  Of course, here are some targeted funding opportunities for
                  your sickle cell research project in a wet laboratory setting:
                </p>
                <div className="grant-cards-example-container">
                  <div className="grant-card">
                    <div className="icon-wrapper">
                      <img src={Sickle} alt="sickle" />
                    </div>
                    <div className="card-contents">
                      <p className="title">Sickle Cell Research</p>
                      <p className="description">
                        National Heart, Lung, and Blood...
                      </p>
                      <p className="price">$ 250,000 USD</p>
                    </div>
                  </div>
                  <div className="grant-card">
                    <div className="icon-wrapper eha-wrapper">
                      <img src={EHA} alt="EHA" />
                    </div>
                    <div className="card-contents">
                      <p className="title">
                        European Hematology Innovation Grant
                      </p>
                      <p className="description">
                        European Hematology Association
                      </p>
                      <p className="price">$ 300,000 USD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-container">
          <div>
            <h2 className="title">Maximizing Your</h2>
            <h2 className="title">
              <strong>Funding</strong> Potential
            </h2>
          </div>
          <h4 className="description">
            GrantAi assists you in crafting compelling and targeted
            applications, maximizing your chances of securing funding for your
            projects. With the cutting-edge capabilities of Gemini Ultra GrantAI
            will interpret project descriptions, analyze vast databases of
            global funding opportunities, and identify the most suitable grants
            for applicants.
          </h4>
        </div>
      </div>
    </div>
  );
}

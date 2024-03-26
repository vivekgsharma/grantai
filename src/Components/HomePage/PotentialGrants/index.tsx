import React from "react";
import Example1 from "assets/img/chat-example-1.png";
import Example2 from "assets/img/chat-example-2.png";
import "./style.scss";

export default function PotentialGrants() {
  return (
    <div className="potential-grants-outter-container">
      <div className="potential-grants">
        <div className="grant-chat-example-container">
          <div className="grant-chat-example-1">
            <img src={Example1} alt="image" />
          </div>
          <div className="grant-chat-example-2">
            <img src={Example2} alt="image" />
          </div>
        </div>
        <div className="description-container">
          <div className="title">
            <p>Maximizing Your</p>
            <p>
              <span>Funding</span> Potential
            </p>
          </div>
          <p className="description">
            GrantAi assists you in crafting compelling and targeted
            applications, maximizing your chances of securing funding for your
            projects. With the cutting-edge capabilities of Gemini Ultra GrantAI
            will interpret project descriptions, analyze vast databases of
            global funding opportunities, and identify the most suitable grants
            for applicants.
          </p>
        </div>
      </div>
    </div>
  );
}

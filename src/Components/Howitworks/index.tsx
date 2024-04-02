import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./style.scss";

import Step2 from "assets/img/step2.png";
import Step3 from "assets/img/step3.png";

import CircleCardContent from "assets/img/final-circle-content.png";

import Image10 from "assets/img/image10.png";
import Image11 from "assets/img/image11.png";
import Image12 from "assets/img/image12.png";
import SecondImage10 from "assets/img/image10-2.png";
import SecondImage12 from "assets/img/image12-2.png";
import Send from "assets/svg/send.svg";
import Search from "assets/svg/search.svg";
import TextLogo from "assets/svg/textLogo.svg";

export default function Howitworks() {
  const navigate = useNavigate();

  const searchGrant = () => {
    navigate(`/grantai?tab=${0}`);
  };
  return (
    <div className="howitworks-container">
      <h2 className="howitworks-title">
        <label>
          How <img src={TextLogo} alt="grantai text logo" />
        </label>
        <strong>Works</strong>
      </h2>
      <main className="howitworks-content">
        <section className="howitworks-card" id="step-1">
          <article className="howitworks-card-content">
            <div className="step-title">
              <h3 className="step-label">
                <strong>
                  Step <span>1</span>
                </strong>
              </h3>
              <h2>Search for Grant</h2>
            </div>
            <h4>
              Start by meticulously searching for grants that best match your
              project or research needs. Utilize online databases, government
              websites, and industry publications to find opportunities that
              align with your objectives.
            </h4>
          </article>
          <div className="howitworks-card-cover">
            <div className="howitworks-card-cover-content">
              <div className="search-bar">
                <div>
                  <img src={Search} alt="search" />
                  Sickle Cell
                </div>
                <button type="button">
                  <img src={Send} alt="send" />
                  <p>Search</p>
                </button>
              </div>
              <div className="loading-bar">
                <div className="left-blank">
                  <img src={Image10} alt="Image1" />
                </div>
                <div className="right-blank">
                  <div className="right-top">
                    <b>Sickle Cell</b> Disease Treatment Demonstration Program
                  </div>
                  <div className="right-bottom">
                    Health Resources & Services Administration
                  </div>
                </div>
              </div>
              <div className="loading-bar">
                <div className="left-blank">
                  <img src={Image11} alt="Image1" />
                </div>
                <div className="right-blank">
                  <div className="right-top">
                    Care for People with <b>Sickle Cell</b> Disease
                  </div>
                  <div className="right-bottom">
                    Sickle Cell Disease Association of America
                  </div>
                </div>
              </div>
              <div className="loading-bar">
                <div className="left-blank">
                  <img src={Image12} alt="Image1" />
                </div>
                <div className="right-blank">
                  <div className="right-top">
                    ASH <b>Sickle Cell</b> Disease Initiative Fund
                  </div>
                  <div className="right-bottom">
                    American Society of Hematology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="howitworks-card" id="step-2">
          <div className="howitworks-first-cover-img">
            <img alt="Card1" src={Step2} />
          </div>
          <article className="howitworks-card-content">
            <div className="step-title">
              <h3 className="step-label">
                <strong>
                  Step <span>2</span>
                </strong>
              </h3>
              <h2>Review your Grant</h2>
            </div>
            <h4>
              Carefully read the grant guidelines to ensure your project fits
              within the scope. Check eligibility criteria such as organization
              type, project focus, and funding requirements to confirm that your
              proposal meets all necessary conditions.
            </h4>
          </article>
        </section>
        <section className="howitworks-card" id="step-3">
          <article className="howitworks-card-content">
            <div className="step-title">
              <h3 className="step-label">
                <strong>
                  Step <span>3</span>
                </strong>
              </h3>
              <h2>Write & Submit</h2>
            </div>
            <h4>
              Develop a detailed and persuasive grant proposal. This should
              include a clear statement of your objectives, a comprehensive plan
              of action, budget details, and any supporting documentation.
              Ensure that your proposal is thorough, well-organized, and
              submitted before the deadline.
            </h4>
          </article>
          <div className="howitworks-second-cover-img">
            <img alt="Card1" src={Step3} />
          </div>
        </section>
        <section className="howitworks-card" id="step-4">
          <div className="howitworks-third-card-cover">
            <div className="howitworks-third-sub-card-container">
              <div className="third-card-left-panel">
                <div className="left-avatar">
                  <img src={SecondImage10} alt="Image1" />
                </div>
                <div className="right-panel">
                  <div className="right-panel-full-blank-title">
                    Sickle Cell Disease Treatment Demonstration Program
                  </div>
                  <p>$ 250,000 USD</p>
                  <div className="right-panel-full-blank">
                    Health Resources & Services Administration
                  </div>
                  <div className="right-panel-bottom">
                    <div className="right-panel-bottom-text">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1814 4.03497L5.30157 9.91483L2.62891 7.24217"
                          stroke="#14790D"
                          strokeWidth="1.06906"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Accepted
                    </div>
                    <div className="right-panel-bottom-blank">
                      Applied on: Dec 18, 2023
                    </div>
                  </div>
                </div>
              </div>
              <button type="button">
                <p>View</p>
              </button>
            </div>
            <div className="howitworks-third-sub-card-container">
              <div className="third-card-left-panel">
                <div className="left-avatar">
                  <img src={SecondImage12} alt="Image1" />
                </div>
                <div className="right-panel">
                  <div className="right-panel-full-blank-title">
                    Care for People with Sickle Cell Disease
                  </div>
                  <p>$ 250,000 USD</p>
                  <div className="right-panel-full-blank">
                    Sickle Cell Disease Association of America
                  </div>
                  <div className="right-panel-bottom">
                    <div className="right-panel-pending-bottom-text">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_6075_3312)">
                          <path
                            d="M6.90782 4.13422V7.34142L9.04595 8.41048M12.2531 7.34142C12.2531 10.2936 9.85996 12.6867 6.90782 12.6867C3.95568 12.6867 1.5625 10.2936 1.5625 7.34142C1.5625 4.38928 3.95568 1.99609 6.90782 1.99609C9.85996 1.99609 12.2531 4.38928 12.2531 7.34142Z"
                            stroke="#6F6B0A"
                            strokeWidth="1.06906"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_6075_3312">
                            <rect
                              width="12.8288"
                              height="12.8288"
                              fill="white"
                              transform="translate(0.492188 0.924927)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Pending
                    </div>
                    <div className="right-panel-bottom-blank">
                      Applied on: Dec 18, 2023
                    </div>
                  </div>
                </div>
              </div>
              <button type="button">
                <p>View</p>
              </button>
            </div>
          </div>
          <article className="howitworks-card-content">
            <div className="step-title">
              <h3 className="step-label">
                <strong>
                  Step <span>4</span>
                </strong>
              </h3>
              <h2>Monitor your Grant</h2>
            </div>
            <h4>
              After submission, actively monitor the status of your application.
              Be prepared to provide additional information if requested by the
              grantor. Stay informed about the review process and be ready for
              any next steps post-decision.
            </h4>
          </article>
        </section>
      </main>
    </div>
  );
}

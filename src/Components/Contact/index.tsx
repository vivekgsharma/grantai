import React from "react";
import XLogo from "assets/svg/x-green-logo.svg";
import Instagram from "assets/svg/instagram-green-logo.svg";
import Linkedin from "assets/svg/linkedin-green-logo.svg";
import SalesContact from "assets/svg/sales-contact.svg";
import DeveloperContact from "assets/svg/developer-contact.svg";
import InvestorContact from "assets/svg/investor-contact.svg";
import "./style.scss";

export default function Contact() {
  return (
    <div className="contacts-container">
      <div className="contact-us-container">
        <h2>
          Contact <strong>Us</strong>
        </h2>
        <p>Get in touch and let us know how we can help</p>
        <div className="contact-btn-container">
          <a
            href="https://twitter.com/prepaire_labs?lang=en "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={XLogo} alt="xicon" />
          </a>
          <a
            href="https://www.instagram.com/prepaire_labs/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </a>
          <a
            href="https://ie.linkedin.com/company/prepaire-labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
      <section className="contact-cards-container">
        <div className="contact-card">
          <div className="contact-cardContent-container">
            <div className="contact-image-wrapper">
              <img alt="sales image" src={SalesContact}></img>
            </div>
            <h3>Sales</h3>
            <h4>
              Interested in our platform? Reach out to our Sales team to learn
              how we can elevate your research.
            </h4>
          </div>
          <button
            className="contact-regular-button"
            onClick={() => (window.location.href = "mailto:sales@prepaire.com")}
          >
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path d="M13.5411 4.29289C13.1506 3.90237 12.5174 3.90237 12.1269 4.29289C11.7364 4.68342 11.7364 5.31658 12.1269 5.70711L17.4198 11H5.83398C5.2817 11 4.83398 11.4477 4.83398 12C4.83398 12.5523 5.2817 13 5.83398 13H17.4198L12.1269 18.2929C11.7364 18.6834 11.7364 19.3166 12.1269 19.7071C12.5174 20.0976 13.1506 20.0976 13.5411 19.7071L20.5411 12.7071C20.9316 12.3166 20.9316 11.6834 20.5411 11.2929L13.5411 4.29289Z" />
            </svg>
          </button>
        </div>

        <div className="contact-card">
          <div className="contact-cardContent-container">
            <div className="contact-image-wrapper">
              <img alt="sales image" src={DeveloperContact}></img>
            </div>

            <h3>Developers</h3>
            <h4>
              Developers, join us in shaping the future of personalized
              medicine. Contact us to explore opportunities.
            </h4>
          </div>
          <button
            className="contact-regular-button"
            onClick={() =>
              (window.location.href = "mailto:developers@prepaire.com")
            }
          >
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path d="M13.5411 4.29289C13.1506 3.90237 12.5174 3.90237 12.1269 4.29289C11.7364 4.68342 11.7364 5.31658 12.1269 5.70711L17.4198 11H5.83398C5.2817 11 4.83398 11.4477 4.83398 12C4.83398 12.5523 5.2817 13 5.83398 13H17.4198L12.1269 18.2929C11.7364 18.6834 11.7364 19.3166 12.1269 19.7071C12.5174 20.0976 13.1506 20.0976 13.5411 19.7071L20.5411 12.7071C20.9316 12.3166 20.9316 11.6834 20.5411 11.2929L13.5411 4.29289Z" />
            </svg>
          </button>
        </div>

        <div className="contact-card">
          <div className="contact-cardContent-container">
            <div className="contact-image-wrapper">
              <img alt="sales image" src={InvestorContact}></img>
            </div>

            <h3>Media & investors</h3>
            <h4>
              Media and investors, contact us for insights into our
              groundbreaking work in personalized medicine.
            </h4>
          </div>
          <button
            className="contact-regular-button"
            onClick={() =>
              (window.location.href = "mailto:investor@prepaire.com")
            }
          >
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path d="M13.5411 4.29289C13.1506 3.90237 12.5174 3.90237 12.1269 4.29289C11.7364 4.68342 11.7364 5.31658 12.1269 5.70711L17.4198 11H5.83398C5.2817 11 4.83398 11.4477 4.83398 12C4.83398 12.5523 5.2817 13 5.83398 13H17.4198L12.1269 18.2929C11.7364 18.6834 11.7364 19.3166 12.1269 19.7071C12.5174 20.0976 13.1506 20.0976 13.5411 19.7071L20.5411 12.7071C20.9316 12.3166 20.9316 11.6834 20.5411 11.2929L13.5411 4.29289Z" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

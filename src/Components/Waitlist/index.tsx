import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import waitlistbackground from "assets/img/waitlist-background.png";
import Whatsapp from "assets/svg/whatsapp.svg";
import Tg from "assets/svg/tg.svg";
import "./style.scss";

export default function WaitList() {
  const navigate = useNavigate();
  // email and password states that are send to endpoint
  const [Cemail, setEmail] = useState("");
  const [Cphone, setPhone] = useState("");

  // error handling states
  const [emailInput, setemailInput] = useState("input-wrapper");
  const [errorEmailM, setErrorEmailM] = useState("hidden");
  // error message
  const [message, setMessage] = useState("");

  // loading purpose
  const [showLoading, setshowLoading] = useState(false);
  // handle email Change & validate
  const handleEmailChange = (event) => {
    // eslint-disable-next-line
    const valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const emailValue = event.target.value;

    setEmail(emailValue);
    if (!valid.test(emailValue) || emailValue === "") {
      setemailInput("input-wrapper-error");
      setErrorEmailM("error-message");
    } else {
      setemailInput("input-wrapper-success");
      setErrorEmailM("hidden");
    }
  };

  const handlePhone = (event) => {
    const phoneValue = event.target.value;
    setPhone(phoneValue);
  };

  // submit login
  const handleSubmit = async (event) => {
    event.preventDefault();
    // validate that password is not empty
    if (Cemail === "") {
      setemailInput("input-wrapper-error");
      setErrorEmailM("error-message");
    } else {
      setemailInput("input-wrapper-success");
      setErrorEmailM("hidden");

      setshowLoading(true); // when clciked on submit it should true

      try {
        const postData = {
          email: Cemail,
          waitlist_id: 15072,
        };
        if (Cphone !== "") postData["phone"] = Cphone;
        const apiUrl = "https://api.getwaitlist.com/api/v1/signup";
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });

        if (response.ok) {
          const data = await response.json(); // Parse the JSON response
          navigate("/");
          setshowLoading(false); // after navigate
          console.log("data", data);
        } else {
          setMessage("Wrong email or phone number, please try again.");
        }
      } catch (e) {
        setMessage("Wrong email or phone number, please try again.");
        setshowLoading(false); // if error occur then we can try again
      }
    }
  };

  return (
    <div className="waitlist-outter-container">
      <div className="waitlist-container">
        <h2>
          Welcome to <strong>GrantAi</strong>
        </h2>
        <img src={waitlistbackground} alt="waitlist background" />
        <p className="description">
          Gain instant access to a global database of grants and funds tailored
          to your project's needs. GrantAI's cutting-edge technology, Gemini
          Ultra, ensures pinpoint accuracy in identifying the most suitable
          opportunities.
        </p>
        <div className="tip-texts-container">
          <p>
            <strong>
              Ready to skyrocket your project's funding potential?
            </strong>
          </p>
          <p>
            Join the waitlist for GrantAI - the ultimate platform
            revolutionizing grant acquisition!
          </p>
        </div>
        <div className="submit-container">
          <div className="input-group-container">
            <div className="input-container">
              <label className="input-title">Email</label>
              <input
                type="text"
                placeholder="youremail@grantai.com"
                className={emailInput}
                autoComplete="off"
                value={Cemail}
                onChange={handleEmailChange}
              />
              <div className={errorEmailM}>
                <span>Must be a valid email.</span>
              </div>
            </div>
            <div className="input-container">
              <label className="input-title">Phone</label>
              <input
                type="text"
                placeholder="+1 123 456 7899(Optional)"
                autoComplete="off"
                value={Cphone}
                onChange={handlePhone}
              />
              <div className="notify-on-container">
                <label>Get notified on:</label>
                <div className="notify-on-items">
                  <div className="notify-item">
                    Telegram
                    <img src={Tg} alt="telegram icon" />
                  </div>
                  <div className="notify-item">
                    Whatsapp
                    <img src={Whatsapp} alt="whatsapp icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="submit-btn" onClick={handleSubmit}>
            Subscribe
          </button>
          <div className="error-message">
            <span>{message}</span>
          </div>
        </div>
        <p className="terms-description">
          By creating an account you agree to the Terms of service and Privacy
          Policy
        </p>
      </div>
    </div>
  );
}

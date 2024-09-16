import React, { useState } from "react";
import Image from "next/image";
import Triangles from "./Triangles";

const Banner2 = ({ title, subtitle, subtitle2 }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail) || inputEmail === "");
  };

  const handleButtonClick = async () => {
    if (validateEmail(email)) {
      try {
        await fetch("/api/email-send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        setIsConfirmed(true);
      } catch (e) {
        console.error(e);
      }
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <div className="banner-container">
      <div className="textosBanner2">
        <div className="tituloBanner">{title}</div>
        <div className="subtituloBanner">{subtitle}</div>
        <div className="subtituloBanner5">{subtitle2}</div>
        <div className="container-botones2">
          {/* {!isEmailValid && !isConfirmed && (
            <p className="error-message">Enter a valid a email.</p>
          )} */}
          {isConfirmed ? (
            <div className="input-circle">
              <Image alt="" src="/check.png" width={30} height={30} />
            </div>
          ) : (
            <input
              type="email"
              placeholder="Email:"
              value={email}
              onChange={handleInputChange}
              className={`input-email ${!isEmailValid ? "invalid" : ""}`}
            />
          )}
          <button
            className={`button-landing-5 ${isConfirmed ? "confirmed" : ""}`}
            onClick={handleButtonClick}
            disabled={isConfirmed}
          >
            {isConfirmed ? "THANK YOU" : "GET EARLY ACCESS"}
          </button>
        </div>
      </div>
      <Triangles />
    </div>
  );
};

export default Banner2;

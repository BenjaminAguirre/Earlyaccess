import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer2 = () => {
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
    <div className="fondo-footer">
      <section className="container-footer2">
        <Image alt="" src="/logoGridVacio.svg" height={80} width={180} />
        <h2>Ready to build?</h2>
        <span>Get notified of our launch</span>
        <input
          type="email"
          placeholder="Email:"
          value={email}
          onChange={handleInputChange}
          className={`input-email ${!isEmailValid ? "invalid" : ""}`}
        />
        <button
          onClick={handleButtonClick}
          disabled={isConfirmed}
        >
          {isConfirmed ? "THANK YOU" : "Get early access"}
        </button>
        <div className="redes-footer2">
          <a href="https://www.linkedin.com/company/ongridrun/?viewAsMember=true">
            <img
              style={{ marginLeft: "0px" }}
              className="icon-redes2"
              src={"/linkedin.png"}
            />
          </a>

          <a href="https://discord.gg/yjkPTHjKeZ">
            <img className="icon-redes2" src={"/discord (1).png"} />
          </a>

          <a href="https://x.com/OnGridRun">
            <img className="icon-redes2" src={"/twitter.png"} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer2;

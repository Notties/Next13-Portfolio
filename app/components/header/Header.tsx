import React from "react";
import CTA from "./CTA";
import Image from "next/image";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Akthakorn Traimitr</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />

        <HeaderSocial />
        <div className="me">
          <Image src="/assets/me.png" alt="" width={50} height={50} />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

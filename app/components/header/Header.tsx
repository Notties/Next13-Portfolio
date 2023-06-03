"use client";

import CTA from "./CTA";
import Image from "next/image";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header
      className="h-[100vh] pt-28 overflow-hidden
      max-[1024px]:h-[68vh] max-[600px]:h-[100vh]
    "
    >
      <div
        className="
        container text-center items-center h-[100%] relative 
      "
      >
        <h5>Hello I'm</h5>
        <h1>Akthakorn Traimitr</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />

        <HeaderSocial />
        <div
          className="
          bg-gradient-to-b from-primary absolute
          left-[calc(50%_-_11rem)] mt-16 rounded-t-[12rem]
          overflow-hidden px-3 pt-20
        "
        >
          <Image
            src="/assets/me.png"
            alt="me"
            width={352}
            height={480}
            loading='lazy'
          />
        </div>
        <a
          href="#about"
          className="absolute right-[-2.3rem] bottom-[5rem] rotate-90 font-normal text-[0.9rem] max-[600px]:hidden"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

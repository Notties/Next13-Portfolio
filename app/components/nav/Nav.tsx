"use client";

import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import { useEffect, useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection: HTMLElement | null = document.getElementById("about");
      const experienceSection: HTMLElement | null = document.getElementById("experience");
      const servicesSection: HTMLElement | null = document.getElementById("services");
      const contactSection: HTMLElement | null = document.getElementById("contact");
      const scrollPosition: number = window.scrollY;

      if (
        aboutSection &&
        experienceSection &&
        servicesSection &&
        contactSection &&
        scrollPosition >= aboutSection.offsetTop! &&
        scrollPosition < experienceSection.offsetTop!
      ) {
        setActiveNav("#about");
      } else if (
        aboutSection &&
        experienceSection &&
        servicesSection &&
        contactSection &&
        scrollPosition >= experienceSection.offsetTop! &&
        scrollPosition < servicesSection.offsetTop!
      ) {
        setActiveNav("#experience");
      } else if (
        aboutSection &&
        experienceSection &&
        servicesSection &&
        contactSection &&
        scrollPosition >= servicesSection.offsetTop! &&
        scrollPosition < contactSection.offsetTop!
      ) {
        setActiveNav("#services");
      } else if (aboutSection && experienceSection && servicesSection && contactSection && scrollPosition >= contactSection.offsetTop!) {
        setActiveNav("#contact");
      } else {
        setActiveNav("#");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="bg-black w-max px-5 py-2 z-[2] 
      fixed left-[50%] translate-x-[-50%] bottom-[2rem]
      flex
      gap-[0.8rem]
      rounded-[3rem] backdrop-blur-[16px]
      "
      >
        <a
          href="#"
          className={`active p-[0.9rem] flex text-[1.1rem] rounded-[50%] text-light
          hover:bg-black-variant
          ${activeNav === "#" ? "bg-bg text-white" : ""}
          `}
          onClick={() => setActiveNav("#")}
        >
          <HiOutlineHome />
        </a>
        <a
          href="#about"
          className={`active p-[0.9rem] flex text-[1.1rem] rounded-[50%] text-light
          hover:bg-black-variant
          ${activeNav === "#about" ? "bg-bg text-white" : ""}
          `}
          onClick={() => setActiveNav("#about")}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          className={`active p-[0.9rem] flex text-[1.1rem] rounded-[50%] text-light
          hover:bg-black-variant
          ${activeNav === "#experience" ? "bg-bg text-white" : ""}
          `}
          onClick={() => setActiveNav("#experience")}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          className={`active p-[0.9rem] flex text-[1.1rem] rounded-[50%] text-light
          hover:bg-black-variant
          ${activeNav === "#services" ? "bg-bg text-white" : ""}
          `}
          onClick={() => setActiveNav("#services")}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          className={`active p-[0.9rem] flex text-[1.1rem] rounded-[50%] text-light
          hover:bg-black-variant
          ${activeNav === "#contact" ? "bg-bg text-white" : ""}
          `}
          onClick={() => setActiveNav("#contact")}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Nav;

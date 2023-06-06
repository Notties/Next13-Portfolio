'use client';

import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary pt-[3rem] text-center text-sm mt-[7rem]">
      <a href="#" className="text-bg text-[3rem] mt-[1rem] mb-[4rem] inline-block">
        KNOT
      </a>
      <ul className="flex flex-wrap justify-center gap-[2rem] mx-auto mb-[3rem] text-lg">
        <li>
          <a href="#" className="text-bg">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-bg">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="text-bg">
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" className="text-bg">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="text-bg">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex justify-center gap-[1rem] mb-[4rem]">
        <a
          href="https://github.com/Notties"
          target="_blank"
          className="bg-bg text-white rounded-[0.7rem]
          p-[0.9rem] flex border-[1px] border-bg border-solid border-opacity-0
          hover:bg-opacity-0 hover:text-bg hover:border-bg 
        "
        >
          <FaGithub className="text-lg"/>
        </a>
        <a
          href="https://www.facebook.com/akthakorn"
          target="_blank"
          className="bg-bg text-white rounded-[0.7rem]
          p-[0.9rem] flex border-[1px] border-bg border-solid border-opacity-0
          hover:bg-opacity-0 hover:text-bg hover:border-bg 
        "
        >
          <BsFacebook className="text-lg"/>
        </a>
        <a
          href="mailto:akthakorn@gmail.com"
          target="_blank"
          className="bg-bg text-white rounded-[0.7rem]
          p-[0.9rem] flex border-[1px] border-bg border-solid border-opacity-0
          hover:bg-opacity-0 hover:text-bg hover:border-bg 
        "
        >
          <MdEmail className="text-lg"/>
        </a>
      </div>

      <div className=" text-bg text-lg pb-[8rem]">
        <small>&copy; Knot Portfolio. MIT license :)</small>
      </div>
    </footer>
  );
};

export default Footer;

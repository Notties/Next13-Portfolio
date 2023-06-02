"use client";

import {HiOutlineHome} from "react-icons/hi";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";

const Nav = () => {
  return (
    <>
      <nav>
        <a href="#">
          <HiOutlineHome />
        </a>
        <a href="#about">
          <AiOutlineUser />
        </a>
        <a href="#experience">
          <BiBook />
        </a>
        <a href="#services">
          <RiServiceLine />
        </a>
        <a href="#contact">
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Nav;

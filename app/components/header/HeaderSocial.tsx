"use client";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <div
      className="
      flex flex-col align-middle gap-5 absolute left-0 bottom-2 
      after:content-[''] after:w-[1px] after:h-8 after:bg-primary after:ml-[6px]
      max-[600px]:hidden 
    "
    >
      <a href="#" target="_blank">
        <BsLinkedin />
      </a>
      <a href="#" target="_blank">
        <FaGithub />
      </a>
      <a href="#" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;

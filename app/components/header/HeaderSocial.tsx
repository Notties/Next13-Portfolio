"use client";

import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const HeaderSocial = () => {
  return (
    <div
      className="
      flex flex-col align-middle gap-5 absolute left-0 bottom-2 
      after:content-[''] after:w-[1px] after:h-8 after:bg-primary after:ml-[6px]
      max-[600px]:hidden 
    "
    >
      <a href="https://github.com/Notties" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/akthakorn" target="_blank">
        <BsFacebook />
      </a>
      <a href="mailto:akthakorn@gmail.com" target="_blank">
        <MdEmail />
      </a>
    </div>
  );
};

export default HeaderSocial;

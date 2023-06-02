import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="#" target="_blank"><BsLinkedin/></a>
      <a href="#" target="_blank"><FaGithub/></a>
      <a href="#" target="_blank"><FiDribbble/></a>
    </div>
  );
};

export default HeaderSocial;

import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" rel="noopener noreferrer" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com"  rel="noopener noreferrer" target="_blank"></a>
    </div>
  );
};

export default HeaderSocials;

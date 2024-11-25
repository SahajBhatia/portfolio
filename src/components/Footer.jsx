import React from "react";
import { MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h4 className="dd">Designed and developed by Sahaj Bhatia</h4>
        <h4>
          Copyright <MdCopyright /> 2024 SB
        </h4>
        <h4>
          <a href="https://www.linkedin.com/in/sahaj-bhatia-55243a27a"><FaLinkedin /></a> <a href="https://github.com/SahajBhatia"><FaGithub /></a>  <a href=""><FaTwitter /></a>
        </h4>
      </div>
    </div>
  );  
};

export default Footer;

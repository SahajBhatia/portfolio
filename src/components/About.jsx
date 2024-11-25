import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3, FaNodeJs, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiMysql, SiMongodb, SiJquery } from "react-icons/si";
const About = () => {
  return (
    <div className="about">
      <div className="about-sec1">
        <div>
          <h1>Know About Me</h1>
          <p>
            Hi everyone I'm Sahaj Bhatia from Faridabad, Haryana. I have
            completed my BCA(Data Science) from Aravali College of Engineering
            and Management and Advance Web Developement from Delhi Institute of
            Computer Science.
          </p>
          <p>
            Apart from coding my hobbies are :
            <ul>
              <li>Travelling</li>
              <li>Playing Games</li>
            </ul>
          </p>
        </div>
        <img src="img/pixelcut-export-Photoroom.png" alt="err" />
      </div>
      <div className="about-sec2">
        <h1>My Skills</h1>
        <div>
          <h1>
            <TiHtml5 />{" "}
          </h1>
          <h1>
            <FaCss3 />
          </h1>
          <h1>
            <IoLogoJavascript />
          </h1>
          <h1>
            <GrReactjs />
          </h1>
          <h1>
            <FaNodeJs />
          </h1>
        </div>
        <div>
          <h1>
            <FaPhp />
          </h1>
          <h1>
            <SiMysql />
          </h1>
          <h1>
            <SiMongodb />
          </h1>
          <h1>
            <SiJquery />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;

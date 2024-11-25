  import React from "react";
  import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
  const Home = () => {
    return (
      <div className="home">
        <div className="home-sec1">
          <div>
            <h1>Hi There 👋</h1>
            <h1>I'm Sahaj Bhatia</h1>
            <p>
              I'm a web developer and my expertise is to create, edit, design
              websites and many more...
            </p>
            {/* <button>Contact Me</button> */}
          </div>
          <div>
            <img src="img/971-removebg.png" alt="err" />
          </div>
        </div>
        <div className="home-sec2">
          <h1>About Myself</h1>
          <div>
            <p>
              I'm a dedicated and enthusiastic web developer with a growing skill
              set in front-end and back-end technologies. I specialize in creating
              visually appealing and responsive websites using HTML, CSS, and
              JavaScript, and am actively expanding my knowledge in React.js,
              Node.js, PHP, MySQL, Express.js.
            </p>
            <img src="img/avatar_purple.png" alt="err" />
          </div>
        </div>
        <div className="home-sec3">
          <h1>Feel free to connect with me</h1>
          <div>
          <a href="https://www.linkedin.com/in/sahaj-bhatia-55243a27a"><h3><FaGithub/></h3></a>
          <a href="https://github.com/SahajBhatia"><h3><FaLinkedin/></h3></a>
            <a href=""><h3><FaTwitter/></h3></a>
          </div>
        </div>
      </div>
    );
  };

  export default Home;

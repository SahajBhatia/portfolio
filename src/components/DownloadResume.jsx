import React from "react";
import { FaDownload } from "react-icons/fa";
const DownloadResume = () => {
  return (
    <a href="../assets/SahajBhatiaCV.pdf" download="SahajBhatiaCV.pdf">
      <button>
        Download Resume <FaDownload />
      </button>
    </a>
  );
};

export default DownloadResume;

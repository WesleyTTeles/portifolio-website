import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function IconsButton() {
  return (
    <div className="w-full flex justify-center gap-10">
      <a href="https://github.com/WesleyTTeles" target="_blank">
        <FaGithub color="#000035" size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/wesley-teles-05789023b/"
        target="_blank"
      >
        <FaLinkedin color="#000035" size={32} />
      </a>
    </div>
  );
}

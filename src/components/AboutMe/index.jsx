import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

export default function Aboutme() {
  return (
    <div
      id="aboutme"
      className="max-w-[1280px] flex flex-col items-center m-auto md:pl-20 p-4 py-12"
    >
      <h1 className="text-4xl font-bold text-[#000035]">About Me</h1>
      <p className="sm:text-2xl text-justify text-base py-8 text-zinc-800">
        I have a degree in Analysis and Systems Development passionate about
        technology, I am constantly immersed in studies to improve my skills. I
        combined my academic background with practical projects for clients,
        aiming to deliver solutions based on my knowledge, resulting in strong
        skills in web development and some Python automations. I stand out for
        my ease of learning, effective communication, critical thinking, and a
        proactive approach.
      </p>
      <button className="w-[240px] h-[44px] my-5 bg-[#000035] rounded-lg cursor-pointer hover:scale-110 ease-in duration-300">
        <a
          href="src/assets/Doc/Curriculo.pdf"
          download="download"
          className="w-full h-full flex justify-center items-center gap-3 text-white"
        >
          Download CV
          <AiOutlineCloudDownload size={20} />
        </a>
      </button>
    </div>
  );
}

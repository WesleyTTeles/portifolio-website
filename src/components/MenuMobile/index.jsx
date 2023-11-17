import React from "react";

import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

export default function MenuMobile() {
  return (
    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
      <a
        href="#main"
        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
      >
        <AiOutlineHome size={20} />
        <span className="p-4">Home</span>
      </a>
      <a
        href="#aboutme"
        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
      >
        <BsPerson size={20} />
        <span className="p-4">About me</span>
      </a>
      <a
        href="#freelancer"
        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
      >
        <AiOutlineProject size={20} />
        <span className="p-4">Freelancer</span>
      </a>
      <a
        href="#projects"
        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
      >
        <GrProjects size={20} />
        <span className="p-4">Projects</span>
      </a>
    </div>
  );
}
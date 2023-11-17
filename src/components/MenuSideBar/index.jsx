import React from "react";

import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

export default function MenuSideBar() {
  return (
    <div className="md:block hidden fixed top-[35%] z-10">
      <div className="flex flex-col">
        <a
          href="#main"
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-300 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <AiOutlineHome color="#7562E0" size={20} />
        </a>
        <a
          href="#aboutme"
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-300 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <BsPerson color="#7562E0" size={20} />
        </a>
        <a
          href="#freelancer"
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-300 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <AiOutlineProject color="#7562E0" size={20} />
        </a>
        <a
          href="#projects"
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-300 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <GrProjects color="#7562E0" size={20} />
        </a>
      </div>
    </div>
  );
}

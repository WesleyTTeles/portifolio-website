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
          className="rounded-full shadow-lg bg-gray-10 shadow-gray-300 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <AiOutlineHome size={20} />
        </a>
        <a
          href="#aboutme"
          className="rounded-full shadow-lg bg-gray-10 shadow-gray-300 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <BsPerson size={20} />
        </a>
        <a
          href="#freelancer"
          className="rounded-full shadow-lg bg-gray-10 shadow-gray-300 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <AiOutlineProject size={20} />
        </a>
        <a
          href="#projects"
          className="rounded-full shadow-lg bg-gray-10 shadow-gray-300 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <GrProjects size={20} />
        </a>
      </div>
    </div>
  );
}

import React from "react";
import { TypeAnimation } from "react-type-animation";

import PerfilPhoto from "../../assets/Img/perfilPhoto.svg";
import IconsButton from "../IconButtons";

export default function Main() {
  return (
    <main id="main">
      <img
        src={PerfilPhoto}
        alt="Perfil Photo"
        className="w-full h-screen object-cover object-right"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 ">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl text-center font-mono font-bold text-[#000035]">
            Hi, I'm Wesley Teles
          </h1>
          <h2 className="sm:text-3xl text-2xl text-[#7562E0]">
            <TypeAnimation
              sequence={[
                "I'm a FrontEnd Developer",
                1000,
                "I create Automations with Python",
                1000,
                "I'm Tech Enthusiast",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h2>
          <span className="sm:text-2xl text-xl  w-full my-4 p-1 text-center text-[#000035] ">
            Formado em Desenvolvimento de Sistemas e amante da tecnologia.
          </span>
          <IconsButton />
        </div>
      </div>
    </main>
  );
}

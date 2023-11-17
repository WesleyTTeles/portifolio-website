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
        Sou aluno do curso de Análise e Desenvolvimento de Sistemas e sempre
        busco ao máximo absorver o que a faculdade pode me proporcionar, bem
        como faço cursos extracurriculares que complementam o meu aprendizado
        acadêmico. Desenvolvo projetos web para clientes particulares e tenho
        certeza de que estou apto para somar à sua equipe de programadores, pois
        tenho facilidade de aprendizado, boa comunicação, senso crítico,
        proatividade e a todo momento busco me aprimorar cada vez mais.
      </p>
      <button className="w-[240px] h-[44px] my-5 bg-[#000035] rounded-lg cursor-pointer hover:scale-110 ease-in duration-300">
        <a
          href="http://"
          className="w-full h-full flex justify-center items-center gap-3 text-white"
        >
          Download CV
          <AiOutlineCloudDownload size={20} />
        </a>
      </button>
    </div>
  );
}

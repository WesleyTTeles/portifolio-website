import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CvPdf from "../../assets/Doc/Curriculo.pdf";

export default function Aboutme() {
  return (
    <div
      id="aboutme"
      className="max-w-[1280px] flex flex-col items-center m-auto md:pl-20 p-4 py-12"
    >
      <h1 className="text-4xl font-bold text-[#000035]">Sobre mim</h1>
      <p className="text-base md:text-lg text-justify py-8 text-zinc-800">
        Trabalhei como gerente operacional, onde tive a oportunidade de
        gerenciar projetos e desenvolver soluções para a empresa. Foi nesse
        contexto que surgiu minha paixão pela tecnologia, o que me levou a
        buscar formação em Análise e Desenvolvimento de Sistemas. Fiz a
        transição de carreira para o desenvolvimento frontend e tenho trabalhado
        como freelancer no último ano. Minha especialidade inclui ReactJs,
        Html5, Css3 e JavaScript além de algumas automações em Python.
        Destaco-me pela facilidade de aprendizado,boa comunicação, pensamento
        crítico, proatividade e trablho em equipe.
      </p>
      <button className="w-[240px] h-[44px] my-5 bg-[#000035] rounded-lg cursor-pointer hover:scale-110 ease-in duration-300">
        <a
          href={CvPdf}
          download="download"
          className="w-full h-full flex justify-center items-center gap-3 text-white"
        >
          Baixar Curriculo
          <AiOutlineCloudDownload size={20} />
        </a>
      </button>
    </div>
  );
}

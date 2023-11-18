import React from "react";
import { FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#000035] flex justify-center items-center gap-6">
      <span className="text-white text-xl py-8">Criado por Wesley Teles</span>
      <FaReact size={28} color="#FFFFFF" />
    </footer>
  );
}
